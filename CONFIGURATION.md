# Gardners Styles Configuration

This document explains how to customize the installation and setup of Gardners Styles.

## Styles Directory Configuration

By default, Gardners Styles creates a `styles/` directory in your project root. You can customize this location using several methods.

### Method 1: Package.json Configuration (Recommended)

Add a `gardnersStyles` configuration object to your `package.json`:

```json
{
  "name": "your-project",
  "gardnersStyles": {
    "stylesDir": "src/scss",
    "overridesFile": "_variables.scss",
    "entryFile": "index.scss"
  },
  "dependencies": {
    "@gardners/styles": "^1.0.0"
  }
}
```

**Options:**
- `stylesDir` - Directory where styles files will be created (default: `styles`)
- `overridesFile` - Name of the overrides file (default: `_overrides.scss`)
- `entryFile` - Name of the main entry file (default: `main.scss`)

### Method 2: Environment Variables

Set environment variables before installation:

```bash
# Basic directory change
GARDNERS_STYLES_DIR=src/scss npm install @gardners/styles

# Full customization
GARDNERS_STYLES_DIR=assets/styles \
GARDNERS_OVERRIDES_FILE=_config.scss \
GARDNERS_ENTRY_FILE=framework.scss \
npm install @gardners/styles
```

### Method 3: Auto-Detection

The setup script automatically detects common style directory patterns:

- `src/styles/`
- `src/scss/`
- `assets/styles/`
- `assets/scss/`
- `layers/base/assets/scss/`
- `app/assets/scss/`

If any of these directories exist, the setup will use them automatically.

## Project Structure Examples

### Default Structure
```
your-project/
├── styles/
│   ├── _overrides.scss
│   └── main.scss
└── package.json
```

### Custom Structure (src/scss)
```json
{
  "gardnersStyles": {
    "stylesDir": "src/scss"
  }
}
```
Results in:
```
your-project/
├── src/scss/
│   ├── _overrides.scss
│   └── main.scss
└── package.json
```

### Nuxt/Vue Project Structure
```json
{
  "gardnersStyles": {
    "stylesDir": "assets/scss",
    "overridesFile": "_variables.scss"
  }
}
```
Results in:
```
your-project/
├── assets/scss/
│   ├── _variables.scss
│   └── main.scss
└── package.json
```

### Complex Project Structure (like gardners25)
```json
{
  "gardnersStyles": {
    "stylesDir": "layers/base/assets/scss"
  }
}
```
Results in:
```
your-project/
├── layers/base/assets/scss/
│   ├── _overrides.scss
│   └── main.scss
└── package.json
```

## Re-running Setup

If you need to change your configuration after installation:

1. Update your `package.json` configuration
2. Run the setup script manually:
   ```bash
   node node_modules/@gardners/styles/scripts/setup.js
   ```

The setup script will respect your new configuration and update the overrides proxy accordingly.

## Import Usage

After setup, import the framework in your project:

```scss
// Option 1: Use the generated entry file
@import './assets/scss/main.scss';

// Option 2: Import the framework directly
@import '@gardners/styles';

// Option 3: Import specific parts
@use '@gardners/styles/scss/theme' as *;
@use '@gardners/styles/scss/base/base';
```

## Troubleshooting

**Setup script not running:**
- Ensure the postinstall script is enabled in npm/pnpm
- Run manually: `node node_modules/@gardners/styles/scripts/setup.js`

**Overrides not being applied:**
- Check that the overrides file exists in the configured location
- Verify the proxy file was updated correctly
- Check for SCSS compilation errors in your build process

**Custom directory not detected:**
- Make sure the directory exists before running setup
- Use package.json configuration for non-standard paths
- Check file permissions on the target directory