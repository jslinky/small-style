# small-style

A customizable CSS framework built with SCSS that provides a comprehensive design system with variables, components, and utilities.

## Installation

```bash
npm install small-style
```

The post-install script will automatically create:
- `styles/_overrides.scss` - Your customization variables  
- `styles/main.scss` - Your main stylesheet entry point

## Quick Start

After installation, you can either:

### Option 1: Use the generated files
Import the generated main file in your project:

```scss
// In your main SCSS file
@import './styles/main.scss';
```

### Option 2: Import directly
Import the framework directly and customize:

```scss
// Make sure you have styles/_overrides.scss with your customizations
@import 'small-style/scss/index';
```

## Customization

Edit `styles/_overrides.scss` (or your configured overrides file) to customize the framework:

```scss
// Font customization
$font-family-base: 'Inter', sans-serif;
$font-family-heading: 'Inter', sans-serif;
$font-heading-weight: 700;

// Layout customization  
$root-max-wrapper-width: 1400px;
$layout-gap: max(min(2vmax, var(--space-xl)), var(--space-lg, 1rem));

// Color customization (OKLCH format)
$primary-l: 0.6;    // Lightness (0-1)
$primary-c: 0.15;   // Chroma (0-0.37+) 
$primary-h: 240;    // Hue (0-360)

// Generate stepped color variants
$generateSteppedColors: 'primary';

// Component customization
$button-selectors: '.button';
$radius: 0.5rem;
```

### Custom Styles Directory

You can customize where the styles files are created:

**Package.json Configuration:**
```json
{
  "gardnersStyles": {
    "stylesDir": "src/scss",
    "overridesFile": "_variables.scss"
  }
}
```

**Environment Variables:**
```bash
SMALL_STYLES_DIR=assets/scss npm install small-style
```

**Auto-Detection:** The setup automatically detects common patterns like `src/scss/`, `assets/styles/`, etc.

See [CONFIGURATION.md](./CONFIGURATION.md) for detailed configuration options.

## Project Structure

After installation, your project will have:

```
your-project/
├── styles/
│   ├── _overrides.scss  # Your customizations
│   └── main.scss        # Your entry point
├── node_modules/
│   └── @gardners/
│       └── styles/      # Framework files
└── ...
```

## Site-Specific Styles

The framework provides only the base styles. Site-specific styles should be added in your project:

```scss
// In your styles/main.scss or similar
@import 'small-style/scss/index';

@layer site {
  .your-site-components {
    // Your custom site styles
  }
}

@layer site.props {
  :root {
    // Your site-specific CSS variables
    --color-brand-secondary-l: 0.6;
    --color-brand-secondary-c: 0.15; 
    --color-brand-secondary-h: 180;
  }
}
```

## Available Variables

### Colors
- `$primary-l`, `$primary-c`, `$primary-h` - Primary color in OKLCH format
- `$secondary-l`, `$secondary-c`, `$secondary-h` - Secondary color  
- `$tertiary-l`, `$tertiary-c`, `$tertiary-h` - Tertiary color
- `$generateSteppedColors` - List of colors to generate variants for

### Typography  
- `$font-family-base` - Base font family
- `$font-family-heading` - Heading font family
- `$font-heading-weight` - Default heading weight

### Layout
- `$root-max-wrapper-width` - Maximum content width
- `$layout-gap` - Grid and flex gap
- `$wrapper-padding-min` - Minimum wrapper padding
- `$space-increment` - Spacing scale multiplier

### Components
- `$button-selectors` - CSS selectors for button styling
- `$radius` - Default border radius

## Framework Features

- **CSS Custom Properties**: Automatic generation of CSS variables
- **Color System**: OKLCH-based color generation with automatic variants
- **Typography**: Fluid type scales and heading systems
- **Layout**: CSS Grid and Flexbox utilities  
- **Components**: Buttons, cards, forms, and more
- **Responsive**: Mobile-first responsive design
- **Modern CSS**: Uses latest CSS features like Container Queries

## Development

To work on the framework itself:

```bash
git clone [repository]
cd gardners-styles
npm install
npm run build
```

## Support

This framework provides comprehensive styling for modern web applications with a focus on customization and maintainability.
