# Small Style Configuration

This document explains how to customize the install setup and Sass configuration surface for `small-style`.

## Styles Directory Configuration

By default, Gardners Styles creates a `styles/` directory in your project root. You can customize this location using several methods.

### Method 1: Package.json Configuration

Add a `smallStyles` configuration object to your `package.json`:

```json
{
  "name": "your-project",
  "smallStyles": {
    "stylesDir": "src/scss",
    "entryFile": "index.scss"
  },
  "dependencies": {
    "small-style": "^1.0.0"
  }
}
```

**Options:**
- `stylesDir` - Directory where styles files will be created (default: `styles`)
- `entryFile` - Name of the main entry file (default: `main.scss`)

### Method 2: Environment Variables

Set environment variables before installation:

```bash
# Basic directory change
SMALL_STYLES_DIR=src/scss npm install small-style

# Custom entry file name
SMALL_STYLES_DIR=assets/styles \
SMALL_ENTRY_FILE=framework.scss \
npm install small-style
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
│   └── main.scss
└── package.json
```

### Custom Structure (src/scss)
```json
{
  "smallStyles": {
    "stylesDir": "src/scss"
  }
}
```
Results in:
```
your-project/
├── src/scss/
│   └── main.scss
└── package.json
```

### Nuxt/Vue Project Structure
```json
{
  "smallStyles": {
    "stylesDir": "assets/scss",
    "entryFile": "main.scss"
  }
}
```
Results in:
```
your-project/
├── assets/scss/
│   └── main.scss
└── package.json
```

### Complex Project Structure (like gardners25)
```json
{
  "smallStyles": {
    "stylesDir": "layers/base/assets/scss"
  }
}
```
Results in:
```
your-project/
├── layers/base/assets/scss/
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

The setup script will respect your new configuration and regenerate the sample entry file when it is missing.

## Import Usage

After setup, import the framework in your project:

```scss
// Option 1: Use the generated entry file
@use './assets/scss/main';

// Option 2: Import the framework directly
@use 'small-style/scss/index' with (
  $font-family-base: 'Inter, sans-serif',
  $primary-l: 0.6,
  $primary-c: 0.15,
  $primary-h: 240,
);
```

## Troubleshooting

**Setup script not running:**
- Ensure the postinstall script is enabled in npm/pnpm
- Run manually: `node node_modules/@gardners/styles/scripts/setup.js`

**Config values not being applied:**
- Check that the `@use 'small-style/scss/index' with (...)` block appears before any other `small-style` imports in that file
- Check for SCSS compilation errors in your build process

**Custom directory not detected:**
- Make sure the directory exists before running setup
- Use package.json configuration for non-standard paths
- Check file permissions on the target directory