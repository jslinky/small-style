#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the project root (where the package is being installed)
const projectRoot = process.cwd();

console.log('🎨 Setting up Gardners Styles...');

// Only run setup if we're not in the gardners-styles package itself
if (path.basename(projectRoot) === 'gardners-styles') {
  console.log('⏭️  Skipping setup (running in source package)');
  process.exit(0);
}

// Configuration options (in order of priority)
const config = getConfiguration();

const stylesDirPath = path.join(projectRoot, config.stylesDir);
const overridesFile = path.join(stylesDirPath, config.overridesFile);
const entryFile = path.join(stylesDirPath, config.entryFile);

console.log(`📁 Using styles directory: ${config.stylesDir}/`);

function getConfiguration() {
  // 1. Environment variables
  if (process.env.GARDNERS_STYLES_DIR) {
    console.log('🔧 Using environment variable configuration');
    return {
      stylesDir: process.env.GARDNERS_STYLES_DIR,
      overridesFile: process.env.GARDNERS_OVERRIDES_FILE || '_overrides.scss',
      entryFile: process.env.GARDNERS_ENTRY_FILE || 'main.scss'
    };
  }

  // 2. package.json config
  const pkgConfig = getPackageJsonConfig();
  if (pkgConfig) {
    console.log('📦 Using package.json configuration');
    return pkgConfig;
  }

  // 3. Auto-detect common patterns
  const autoDetected = autoDetectStylesLocation();
  if (autoDetected) {
    return autoDetected;
  }

  // 4. Default
  console.log('🎯 Using default configuration');
  return {
    stylesDir: 'styles',
    overridesFile: '_overrides.scss',
    entryFile: 'main.scss'
  };
}

function getPackageJsonConfig() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
    const config = pkg.gardnersStyles;
    if (config && config.stylesDir) {
      return {
        stylesDir: config.stylesDir,
        overridesFile: config.overridesFile || '_overrides.scss',
        entryFile: config.entryFile || 'main.scss'
      };
    }
  } catch {
    // package.json doesn't exist or invalid
  }
  return null;
}

function autoDetectStylesLocation() {
  const commonPaths = [
    'src/styles',
    'src/scss', 
    'assets/styles',
    'assets/scss',
    'layers/base/assets/scss',
    'app/assets/scss'
  ];

  for (const dir of commonPaths) {
    if (fs.existsSync(path.join(projectRoot, dir))) {
      console.log(`🔍 Auto-detected existing styles directory: ${dir}`);
      return {
        stylesDir: dir,
        overridesFile: '_overrides.scss',
        entryFile: 'main.scss'
      };
    }
  }
  return null;
}

try {
  // Create styles directory if it doesn't exist
  if (!fs.existsSync(stylesDirPath)) {
    fs.mkdirSync(stylesDirPath, { recursive: true });
    console.log(`📁 Created ${config.stylesDir}/ directory`);
  }

  // Find the package directory - handle both npm and file: installs
  let packageDir;
  try {
    packageDir = path.dirname(require.resolve('@gardners/styles/package.json'));
  } catch (e) {
    // Fallback for file: dependencies - look in node_modules
    packageDir = path.join(projectRoot, 'node_modules', '@gardners', 'styles');
    if (!fs.existsSync(packageDir)) {
      throw new Error('Cannot find @gardners/styles package directory');
    }
  }

  // Create overrides file if it doesn't exist
  if (!fs.existsSync(overridesFile)) {
    const overridesTemplate = fs.readFileSync(
      path.join(packageDir, 'templates', '_overrides.scss'),
      'utf8'
    );
    fs.writeFileSync(overridesFile, overridesTemplate);
    console.log(`✅ Created ${config.stylesDir}/${config.overridesFile}`);
  } else {
    console.log(`⚠️  ${config.stylesDir}/${config.overridesFile} already exists, skipping`);
  }

  // Create main entry file if it doesn't exist
  if (!fs.existsSync(entryFile)) {
    const entryTemplate = fs.readFileSync(
      path.join(packageDir, 'templates', 'main.scss'),
      'utf8'
    );
    fs.writeFileSync(entryFile, entryTemplate);
    console.log(`✅ Created ${config.stylesDir}/${config.entryFile}`);
  } else {
    console.log(`⚠️  ${config.stylesDir}/${config.entryFile} already exists, skipping`);
  }

  // Update the overrides proxy to point to external overrides
  updateOverridesProxy(packageDir, config);
  console.log('✅ Updated overrides proxy');

  console.log('');
  console.log('🎉 Gardners Styles setup complete!');
  console.log('');
  console.log('Next steps:');
  console.log(`1. Customize variables in ${config.stylesDir}/${config.overridesFile}`);
  console.log(`2. Import ${config.stylesDir}/${config.entryFile} in your project`);
  console.log(`3. Add your custom styles to ${config.stylesDir}/${config.entryFile}`);

} catch (error) {
  console.error('❌ Error setting up Gardners Styles:', error.message);
  process.exit(1);
}

function updateOverridesProxy(packageDir, config) {
  const proxyFile = path.join(packageDir, 'scss', 'theme', '_overrides-proxy.scss');
  
  // Calculate the relative path from the proxy file to the external overrides
  const proxyDir = path.dirname(proxyFile);
  const overridesPath = path.join(projectRoot, config.stylesDir, config.overridesFile.replace('.scss', ''));
  const relativePath = path.relative(proxyDir, overridesPath).replace(/\\/g, '/');
  
  const proxyContent = `// Overrides proxy for NPM usage - auto-generated by setup
// This file forwards to the external overrides in the consuming project
// Path: ${config.stylesDir}/${config.overridesFile}

@forward "${relativePath}";`;
  
  fs.writeFileSync(proxyFile, proxyContent);
}