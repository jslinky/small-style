# Integration Guide

## For Package Users

When you install this package via npm, configure it through the package entrypoint.

### 1. Install the package
```bash
npm install small-style
```

### 2. Create your stylesheet
```
your-project/
├── styles/
│   └── main.scss
```

### 3. Configure the package in your stylesheet
```scss
@use "small-style/scss/index" with (
  $secondary-l: 0.41,
  $font-family-base: 'Your Font',
  $font-size-base-px: 18,
  $root-max-wrapper-width: 1200,
);

// Your site-specific styles below
@layer site {
  // Your styles here
}
```

## For Package Development

The package now expects configuration through `@use ... with (...)` against `scss/index`.

## Build Pipeline Integration

Make sure your build process includes:
```json
{
  "scripts": {
    "build:sass": "npx sass --watch src/scss/style.scss:src/css/style.css --style=expanded --source-map"
  }
}
```
