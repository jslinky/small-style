# small-style

A customizable CSS framework built with SCSS that provides a comprehensive design system with variables, components, and utilities.

## Installation

```bash
npm install small-style
```

The post-install script will automatically create:
- `styles/main.scss` - Your main stylesheet entry point

## Quick Start

After installation, import the generated main file in your project:

```scss
@use './styles/main';
```

You can also import the framework directly and configure it inline:

```scss
@use 'small-style/scss/index' with (
  $font-family-base: 'Inter, sans-serif',
  $root-max-wrapper-width: 1400,
  $primary-l: 0.6,
  $primary-c: 0.15,
  $primary-h: 240,
  $include-forms: false,
);
```

## Customization

Edit `styles/main.scss` and set config values in the `@use 'small-style/scss/index' with (...)` block:

```scss
@use 'small-style/scss/index' with (
  $font-family-base: 'Inter, sans-serif',
  $font-family-heading: 'Inter, sans-serif',
  $font-heading-weight: 700,
  $root-max-wrapper-width: 1400,
  $layout-gap: max(min(2vmax, var(--space-xl)), var(--space-lg, 1rem)),
  $primary-l: 0.6,
  $primary-c: 0.15,
  $primary-h: 240,
  $generateSteppedColors: 'primary',
  $button-selectors: '.button',
  $radius: 0.5rem,
);
```

### Custom Styles Directory

You can customize where the styles files are created:

**Package.json Configuration:**
```json
{
  "smallStyles": {
    "stylesDir": "src/scss",
    "entryFile": "framework.scss"
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
│   └── main.scss        # Your entry point and config
├── node_modules/
│   └── small-style/     # Framework files
└── ...
```

## Site-Specific Styles

The framework provides only the base styles. Site-specific styles should be added in your project:

```scss
// In your styles/main.scss or similar
@use 'small-style/scss/index' with (
  $primary-l: 0.6,
  $primary-c: 0.15,
  $primary-h: 240,
);

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

## CSS Module Mode

If you do not need SCSS configuration, you can import prebuilt CSS modules from `dist/`.

```css
@import "small-style/dist/modules/reset.css";
@import "small-style/dist/modules/base.css";
@import "small-style/dist/modules/props/registration.css";
@import "small-style/dist/modules/props/layout.css";
@import "small-style/dist/modules/props/spacing.css";
@import "small-style/dist/modules/components/buttons.css";
```

### Per-category registration imports

You can import registration props as a single file or by category:

```css
/* All registrations */
@import "small-style/dist/modules/props/registration.css";

/* Or per category */
@import "small-style/dist/modules/props/registration/key-tokens.css";
@import "small-style/dist/modules/props/registration/font-size.css";
@import "small-style/dist/modules/props/registration/font.css";
@import "small-style/dist/modules/props/registration/spacing.css";
@import "small-style/dist/modules/props/registration/wrapper.css";
@import "small-style/dist/modules/props/registration/layout.css";
@import "small-style/dist/modules/props/registration/colors.css";
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
- `$include-forms` - Toggle form rules on or off

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
