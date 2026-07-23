# Base SCSS Package

This is a reusable base SCSS package that provides foundational styles and components.

## Installation

When this becomes an npm package, install it with:
```bash
npm install small-style
```

## Usage

Configure the package in your main SCSS file:

```scss
@use "small-style/scss/index" with (
	$font-family-base: 'Inter, sans-serif',
	$primary-l: 0.6,
	$primary-c: 0.15,
	$primary-h: 240,
);
```

## Structure

- `base/` - Core base styles and components
- `theme/` - Forwarded theme surface for config, mixins, and functions
- `variables/_config.scss` - Public package configuration surface

## Dependencies

This package expects a normal project stylesheet that configures the package entrypoint, for example:

```scss
@use "small-style/scss/index" with (
	$radius: 0.5rem,
	$include-forms: false,
);
```

The package entrypoint forwards the configurable theme surface, so consumers can configure it directly:

```scss
@use "small-style/scss/index" with (
	$radius: 0.5rem,
	$include-forms: false,
);
```
