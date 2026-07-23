# Design Tokens

Source reviewed: `/Users/justinsmall/Development/git/Gardners Project Work/small-style/scss/`

This document lists the core design tokens defined by the SCSS source. The system uses Sass defaults for configuration and emits many of those values as CSS custom properties.

## Core Configuration

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$scopeClassName` | `.new` | Main scope class for output |
| `$baseResetRulesScopeClassName` | `:root:is(.new)` | Scope used for root/reset rules |
| `$include-prop-fallbacks` | `true` | Controls fallback output for custom properties |
| `$useTailwindForColorOutput` | `true` | Controls whether colour output is prepared for Tailwind `@theme` use |

## Colour Configuration

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$colorNamePrefix` | `color-` | Prefix used for generated colour custom properties |
| `$colorIncludes` | `primary secondary tertiary dark light grey` | Colour families included in output |
| `$generateSteppedColors` | `primary secondary` | Colour families that receive generated lightness steps |
| `$grey-tint-color` | `primary` | Colour family used as the grey range reference |
| `$grey-tint-chroma` | `0.02` | Chroma used for the generated grey range |
| `$surface-colors` | `primary secondary tertiary grey dark light` | Colour families available to surface rules |

## Core Colour Families

Colours are defined in OKLCH using separate lightness, chroma, and hue channel tokens.

| Family | Lightness token | Chroma token | Hue token | Default OKLCH channels |
| --- | --- | --- | --- | --- |
| Primary | `$primary-l` | `$primary-c` | `$primary-h` | `0.7 0.15 256` |
| Secondary | `$secondary-l` | `$secondary-c` | `$secondary-h` | `0.72 0.14 145` |
| Tertiary | `$tertiary-l` | `$tertiary-c` | `$tertiary-h` | `0.75 0.16 55` |
| Dark | `$dark-l` | `$dark-c` | `$dark-h` | `0.23 0 0` |
| Light | `$light-l` | `$light-c` | `$light-h` | `0.97 0 0` |

## Colour Custom Properties

Base colour properties:

- `--color-primary`
- `--color-secondary`
- `--color-tertiary`
- `--color-dark`
- `--color-light`

Colour channel properties:

- `--color-primary-l`
- `--color-primary-c`
- `--color-primary-h`
- `--color-secondary-l`
- `--color-secondary-c`
- `--color-secondary-h`
- `--color-tertiary-l`
- `--color-tertiary-c`
- `--color-tertiary-h`
- `--color-dark-l`
- `--color-dark-c`
- `--color-dark-h`
- `--color-light-l`
- `--color-light-c`
- `--color-light-h`

Generated stepped colour ranges:

- `--color-primary-0` through `--color-primary-11`
- `--color-secondary-0` through `--color-secondary-11`
- `--color-grey-0` through `--color-grey-11`

Generated lightness channel ranges:

- `--color-primary-l-0` through `--color-primary-l-11`
- `--color-secondary-l-0` through `--color-secondary-l-11`

Generated contrast properties:

- `--color-{family}-contrast`
- `--color-{family}-contrast-muted`
- `--color-{family}-{step}-contrast`
- `--color-{family}-{step}-contrast-muted`

## Contrast Configuration

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$fg-threshold` | `0.7` | Foreground contrast threshold |
| `$fg-lightest-text` | `0` | Lightest text clamp |
| `$fg-darkest-text` | `1` | Darkest text clamp |
| `$fg-muted-lightest-text` | `0.4` | Muted lightest text clamp |
| `$fg-muted-darkest-text` | `0.9` | Muted darkest text clamp |

Related custom properties used by contrast generation:

- `--contrast-threshold`
- `--contrast-lightest-text`
- `--contrast-darkest-text`
- `--contrast-muted-lightest-text`
- `--contrast-muted-darkest-text`
- `--color-{family}-contrast-lightest-text`
- `--color-{family}-contrast-darkest-text`
- `--color-{family}-contrast-muted-lightest-text`
- `--color-{family}-contrast-muted-darkest-text`

## Font Families

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$font-family-base` | `system-ui, sans-serif` | Base text font stack |
| `$font-family-heading` | `Calibri, Seravek, 'Gill Sans Nova', Ubuntu, 'DejaVu Sans', source-sans-pro, sans-serif` | Heading font stack |
| `$font-heading-weight` | `600` | Default heading weight |

Generated custom properties:

- `--font-family-base`
- `--font-family-heading`
- `--font-heading-weight`

## Font Size Scale

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$use-typo-scale` | `true` | Enables generated type scale |
| `$text-size-increment` | `1.25` | Type scale multiplier |
| `$font-size-base-px` | `16` | Base font size in px |
| `$base-font-size-marker` | `md` | Scale marker used as the base size |

Defined size map:

| Size | Pixel value |
| --- | ---: |
| `xxs` | `10` |
| `xs` | `12` |
| `sm` | `14` |
| `md` | `16` |
| `lg` | `18` |
| `xl` | `20` |
| `display-xs` | `24` |
| `display-sm` | `30` |
| `display-md` | `36` |
| `display-lg` | `48` |
| `display-xl` | `60` |
| `display-2xl` | `72` |

Generated custom properties:

- `--text-size-increment`
- `--font-size-base-px`
- `--font-size-base`
- `--xxs-px`
- `--xs-px`
- `--sm-px`
- `--md-px`
- `--lg-px`
- `--xl-px`
- `--display-xs-px`
- `--display-sm-px`
- `--display-md-px`
- `--display-lg-px`
- `--display-xl-px`
- `--display-2xl-px`
- `--xxs`
- `--xs`
- `--sm`
- `--md`
- `--lg`
- `--xl`
- `--display-xs`
- `--display-sm`
- `--display-md`
- `--display-lg`
- `--display-xl`
- `--display-2xl`

## Text Frame and Rhythm

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$text-frame-ratio` | `2.75` | Ratio used to derive horizontal text padding from vertical frame |
| `$text-frame-y` | `0.725em` | Vertical text frame value |
| `$text-frame-x` | `calc(var(--text-frame-y) * var(--text-frame-ratio))` | Horizontal text frame value |
| `$flow-space` | `1em` | Default vertical flow spacing |

Generated custom properties:

- `--text-frame-ratio`
- `--text-frame-y`
- `--text-frame-x`
- `--flow-space`

## Spacing Scale

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$space-increment` | `1.42` | Spacing scale multiplier |
| `$unit-max` | `1rem` | Maximum value for the base responsive unit |
| `$unit-min` | `calc(1rem / 2)` | Minimum value for the base responsive unit |
| `$unit-fluid` | `1vi` | Fluid viewport-relative unit |
| `$unit` | `clamp(var(--unit-min), var(--unit-fluid), var(--unit-max))` | Base responsive unit |

Generated custom properties:

- `--space-increment`
- `--unit-max`
- `--unit-min`
- `--unit-fluid`
- `--unit`
- `--space-3xs`
- `--space-2xs`
- `--space-xs`
- `--space-sm`
- `--space-md`
- `--space-lg`
- `--space-xl`
- `--space-2xl`
- `--space-3xl`
- `--space-4xl`
- `--space-5xl`
- `--space-6xl`

## Radius and Borders

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$radius` | `0.35rem` | Global radius |
| `$field-border-color` | `var(--color-grey-10, #d1d5db)` | Default field border colour |
| `$field-border-width` | `1px` | Default field border width |

Generated custom properties:

- `--radius`
- `--field-border-color`
- `--field-border-width`

## Line Height

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$line-height-relative` | `1.4em` | Relative line-height contribution |
| `$line-height-fixed` | `0.375rem` | Fixed line-height contribution |

Generated custom properties:

- `--line-height-relative`
- `--line-height-fixed`

## Layout

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$layout-column-min` | `30ch` | Minimum grid column width |
| `$layout-gap` | `1rem` | Default layout gap |
| `$column-count` | `4` | Default target column count |

Generated custom properties:

- `--layout-column-min`
- `--layout-gap`
- `--layout-grid-min`
- `--layout-grid-gap`
- `--layout-grid-template-columns`
- `--column-count`
- `--breakpoint`
- `--column-size`
- `--flex-grid-min`
- `--flex-grid-gap`

## Wrapper

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$root-max-wrapper-width` | `1440` | Root max wrapper width, in px |
| `$wrapper-padding-min` | `clamp($layout-gap, 2vw, $layout-gap * 2)` | Minimum wrapper padding |

Generated custom properties:

- `--root-max-wrapper-width`
- `--max-wrapper-width`
- `--wrapper-padding`
- `--wrapper-padding-min`
- `--wrapper-inline`
- `--wrapper-width`
- `--grid-wrapper-columns`

## Breakpoints

| Sass token | Value |
| --- | ---: |
| `$breakpoint-sm` | `40rem` |
| `$breakpoint-md` | `48rem` |
| `$breakpoint-lg` | `64rem` |
| `$breakpoint-xl` | `80rem` |
| `$breakpoint-2xl` | `96rem` |

## Container Width Tokens

| Sass token | Value | Pixel reference |
| --- | ---: | ---: |
| `$container-3xs` | `16rem` | `256px` |
| `$container-2xs` | `18rem` | `288px` |
| `$container-xs` | `20rem` | `320px` |
| `$container-sm` | `24rem` | `384px` |
| `$container-md` | `28rem` | `448px` |
| `$container-lg` | `32rem` | `512px` |
| `$container-xl` | `36rem` | `576px` |
| `$container-2xl` | `42rem` | `672px` |
| `$container-3xl` | `48rem` | `768px` |
| `$container-4xl` | `56rem` | `896px` |
| `$container-5xl` | `64rem` | `1024px` |
| `$container-6xl` | `72rem` | `1152px` |
| `$container-7xl` | `80rem` | `1280px` |

## Ch-Based Container Tokens

| Sass token | Value |
| --- | ---: |
| `$container-3xs-ch` | `32ch` |
| `$container-2xs-ch` | `36ch` |
| `$container-xs-ch` | `40ch` |
| `$container-sm-ch` | `48ch` |
| `$container-md-ch` | `56ch` |
| `$container-lg-ch` | `64ch` |
| `$container-xl-ch` | `72ch` |
| `$container-2xl-ch` | `80ch` |
| `$container-3xl-ch` | `88ch` |
| `$container-4xl-ch` | `96ch` |
| `$container-5xl-ch` | `104ch` |
| `$container-6xl-ch` | `112ch` |
| `$container-7xl-ch` | `120ch` |

## Module Include Flags

| Sass token | Default | Purpose |
| --- | --- | --- |
| `$include-forms` | `true` | Controls whether form styles are emitted |

The config file also includes TODO placeholders for future module flags:

- `$include-buttons`
- `$include-cards`
- `$include-collapse`
- `$include-headings`
- `$include-breakpoints`
- `$include-layout`

