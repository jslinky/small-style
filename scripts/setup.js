#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the project root (where the package is being installed)
const projectRoot = process.cwd();

console.log('🎨 Setting up Small Styles...');

// Only run setup if we're not in the small-style package itself
if (path.basename(projectRoot) === 'small-style') {
  console.log('⏭️  Skipping setup (running in source package)');
  process.exit(0);
}

// Configuration options (in order of priority)
const config = getConfiguration();

const stylesDirPath = path.join(projectRoot, config.stylesDir);
const entryFile = path.join(stylesDirPath, config.entryFile);

console.log(`📁 Using styles directory: ${config.stylesDir}/`);

function getConfiguration() {
  // 1. Environment variables
  if (process.env.SMALL_STYLES_DIR) {
    console.log('🔧 Using environment variable configuration');
    return {
      stylesDir: process.env.SMALL_STYLES_DIR,
      entryFile: process.env.SMALL_ENTRY_FILE || 'main.scss'
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
    entryFile: 'main.scss'
  };
}

function getPackageJsonConfig() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
    const config = pkg.smallStyles;
    if (config && config.stylesDir) {
      return {
        stylesDir: config.stylesDir,
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
    packageDir = path.dirname(require.resolve('small-style/package.json'));
  } catch (e) {
    // Fallback to node_modules path
    packageDir = path.join(projectRoot, 'node_modules', 'small-style');
    if (!fs.existsSync(packageDir)) {
      throw new Error('Cannot find small-style package directory');
    }
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

  console.log('');
  console.log('🎉 Small Styles setup complete!');
  console.log('');
  console.log('Next steps:');
  console.log(`1. Customize variables in ${config.stylesDir}/${config.entryFile}`);
  console.log(`2. Import ${config.stylesDir}/${config.entryFile} in your project`);
  console.log(`3. Add your custom styles below the framework @use in ${config.stylesDir}/${config.entryFile}`);

} catch (error) {
  console.error('❌ Error setting up Small Styles:', error.message);
  process.exit(1);
}