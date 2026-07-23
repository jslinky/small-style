# Component Custom Properties

Source reviewed: `/Users/justinsmall/Development/git/Gardners Project Work/small-style/scss/`

This document lists the CSS custom properties defined by, consumed by, or exposed through each component in the SCSS source. Shared design tokens such as colour, spacing, radius, and typography variables are included where a component depends on them.

## Buttons

### Base Properties

- `--button-color`
- `--button-color-contrast`
- `--button-fg`
- `--button-bg`
- `--button-border`
- `--button-border-color`
- `--button-border-width`
- `--button-border-style`
- `--button-border-depth`
- `--button-border-color-mix`
- `--button-font-weight`
- `--button-border-radius`
- `--button-max-radius`
- `--button-padding-block-start`
- `--button-padding-block-end`
- `--button-padding-inline-start`
- `--button-padding-inline-end`
- `--button-default-color`
- `--button-default-color-contrast`

### State Properties

- `--button-bg-hover`
- `--button-bg-focus`
- `--button-fg-hover`
- `--button-fg-focus`
- `--button-border-hover`
- `--button-border-focus`
- `--button-bg-hover-depth`
- `--button-bg-focus-depth`
- `--button-bg-hover-color-mix`
- `--button-bg-focus-color-mix`

### Generated Colour Patterns

The button system generates colour-specific custom properties using configured colour family names such as `primary`, `secondary`, `tertiary`, `dark`, `light`, and `grey`.

- `--button-fg-{color}`
- `--button-bg-{color}`
- `--button-bg-{color}-hover`
- `--button-bg-{color}-focus`
- `--button-fg-{color}-hover`
- `--button-fg-{color}-focus`
- `--button-border-{color}-hover`
- `--button-border-{color}-focus`

### Inverted Variant

- `--button-inverted-default-fg`
- `--button-inverted-default-bg`
- `--button-inverted-default-border-color`
- `--button-inverted-bg-hover`
- `--button-inverted-bg-focus`
- `--button-inverted-fg-hover`
- `--button-inverted-fg-focus`
- `--button-inverted-border-hover`
- `--button-inverted-border-focus`

### Soft Variant

- `--button-soft-default-fg`
- `--button-soft-default-bg`
- `--button-soft-default-bg-opacity`
- `--button-soft-default-border-color`
- `--button-soft-default-border-opacity`
- `--button-soft-bg-{color}-hover`
- `--button-soft-bg-{color}-focus`
- `--button-soft-fg-{color}-hover`
- `--button-soft-fg-{color}-focus`
- `--button-soft-{color}-hover-bg-opacity`
- `--button-soft-{color}-focus-bg-opacity`

### Outline Variant

- `--button-outline-default-fg`
- `--button-outline-default-bg`
- `--button-outline-default-border-color`
- `--button-outline-bg-{color}-hover`
- `--button-outline-bg-{color}-focus`
- `--button-outline-fg-{color}-hover`
- `--button-outline-fg-{color}-focus`

### Ghost Variant

- `--button-ghost-default-fg`
- `--button-ghost-default-bg`
- `--button-ghost-default-border-color`

### Shared Properties Used

- `--text-frame-x`
- `--text-frame-y`
- `--radius`
- `--xs`
- `--sm`
- `--lg`
- `--xl`
- Colour tokens such as `--color-primary`, `--color-primary-contrast`

## Forms and Inputs

### Input Properties

- `--input-color`
- `--input-bg`
- `--input-fs`
- `--input-outline`
- `--input-outline-width`
- `--input-outline-color`
- `--input-outline-color-focused`
- `--input-outline-mix-color`
- `--input-outline-mix-color-focused`
- `--input-text-frame-x`
- `--input-text-frame-y`
- `--input-text-radius`
- `--input-text-max-radius`
- `--input-accent-color`
- `--input-box-frame-x`
- `--input-box-frame-y`
- `--input-box-radius`
- `--input-box-max-radius`

### Internal Scoped Properties

These are emitted with an underscore prefix for component-local use.

- `--_color`
- `--_bg`
- `--_fs`
- `--_outline-color`
- `--_outline-color-focused`

### Form Layout Properties

- `--row-gap`
- `--column-gap`
- `--hint-fs`
- `--half-row-gap`
- `--quarter-row-gap`

### Shared Properties Used

- `--color`
- `--accent-color`
- `--text-frame-x`
- `--text-frame-y`
- `--radius`
- `--space-sm`
- `--space-xs`
- `--xs`

## Cards

### Base Card Properties

- `--card-two-columns`
- `--card-left-col`
- `--card-right-col`
- `--card-top-row`
- `--card-bottom-row`
- `--card-columns`
- `--card-auto-row`
- `--card-background-color`
- `--card-border-width`
- `--card-border-style`
- `--card-border-color`
- `--card-radius`
- `--card-aspect`
- `--card-padding-inline`
- `--card-padding-block`
- `--card-gap-column`
- `--card-gap-row`
- `--card-gap-column-multiplier`
- `--card-gap-row-multiplier`

### Body and Media Properties

- `--card-body-padding-inline`
- `--card-body-padding-block`
- `--card-picture-aspect`

### Backdrop and Image Properties

- `--card-image-mask-direction`
- `--card-image-mask-color-from`
- `--card-image-mask-color-to`
- `--card-backdrop-fill`
- `--card-backdrop-direction`
- `--card-backdrop-color-from-color`
- `--card-backdrop-color-to-color`
- `--card-backdrop-color-stop-from`
- `--card-backdrop-color-stop-to`
- `--card-backdrop-color-stop-from-opacity`
- `--card-backdrop-color-stop-to-opacity`

### Heading Properties Used Inside Cards

- `--fluid-headings`
- `--heading-underline-margin-inline`

### Shared Properties Used

- `--layout-gap`
- `--surface-bg-color`
- `--field-border-width`
- `--field-border-color`
- `--radius`
- `--aspect-video`

## Collapse

### Component Properties

- `--details-inline-size`
- `--collapse-transition`
- `--collapse-title-gap`
- `--collapse-icon-arrow-transition`
- `--marker-content`

### Shared Properties Used

- `--bg-color`
- `--color`
- `--text-frame-y`
- `--field-border-width`
- `--field-border-color`

### Potential Naming Mismatch

The collapse component uses `--spacing-md` and `--spacing-sm`, but the local spacing token system defines `--space-md` and `--space-sm`. Unless `--spacing-*` comes from another dependency, these appear to be unmatched references.

## Headings

### Generic Heading Properties

- `--font-size`
- `--text-transform`
- `--letter-spacing`
- `--line-height`
- `--color`
- `--color-heading`
- `--font-family`
- `--font-family-heading`
- `--font-weight`
- `--font-heading-weight`

### Heading Tag Override Patterns

The heading system supports tag-specific overrides for `h1` through `h6`.

- `--h1-text-transform`
- `--h1-letter-spacing`
- `--h1-line-height`
- `--h1-color`
- `--h1-font-family`

The same pattern is available for `h2`, `h3`, `h4`, `h5`, and `h6`.

### Size Override Patterns

The heading size system supports these size keys:

- `3xl`
- `2xl`
- `xl`
- `lg`
- `default`
- `sm`
- `xs`

For each size, these custom property patterns are used:

- `--heading-{size}-font-size`
- `--heading-{size}-font-size-fluid-cq`
- `--heading-{size}-font-size-min`
- `--heading-{size}-font-size-max`
- `--heading-{size}-font-ratio-min`
- `--heading-{size}-font-ratio-max`
- `--heading-{size}-font-width-min`
- `--heading-{size}-font-width-max`
- `--heading-{size}-font-fluid-cq-variance`

### Underline Properties

- `--heading-underline-width`
- `--heading-underline-color`
- `--heading-underline-height`
- `--heading-underline-margin-inline`
- `--heading-underline-block-start`
- `--heading-underline-border-radius`

## Fluid Type

### Component and Helper Properties

- `--fluid-min`
- `--fluid-max`
- `--fluid-preferred`
- `--fluid-type`
- `--font-size`
- `--default-font-size-fluid-cq`

### Input and Shared Properties Used

- `--font-size-min`
- `--font-size-max`
- `--font-ratio-min`
- `--font-ratio-max`
- `--font-level`
- `--font-width-min`
- `--font-width-max`
- `--variable-unit`
- `--font-size-base`
- `--sm`
- `--font-fluid-cq-variance`

## Layout Components

### Wrapper

- `--wrapper-inline`
- `--wrapper-width`
- `--wrapper-padding`
- `--wrapper-padding-min`
- `--max-wrapper-width`
- `--grid-wrapper-columns`

### Layout Grid

- `--layout-grid-template-columns`
- `--layout-grid-gap`
- `--layout-grid-min`
- `--layout-grid-auto-repeat`
- `--column-count`
- `--column-size`
- `--breakpoint`

### Flex Layout Grid

- `--flex-grid-gap`
- `--flex-grid-min`

### Grid Child Container

- `--grid-item-container`

## Flow

### Component Properties

- `--flow-space`

## Surface

### Surface Properties

- `--surface-bg-color`
- `--surface-color`
- `--surface-color-muted`
- `--surface-depth`

### Properties Set or Overridden by Surface

- `--color`
- `--color-muted`
- `--bg-color`
- `--field-border-color`

### Other Properties Used

- `--field-border-color-tint`
- `--root-bg`
- `--color-light`
- Colour family tokens such as `--color-primary`, `--color-primary-contrast`

## Timeline

### Component Properties

- `--gap`
- `--total-gap`
- `--timeline-branch-width`
- `--timeline-branch-bg`
- `--timeline-marker-bg`
- `--timeline-marker-size`
- `--timeline-inner-radius`
- `--timeline-length`
- `--timeline-line-width`
- `--timeline-line-bg`
- `--index`

### Shared Properties Used

- `--accent-color`
- `--color-primary`
- `--bg-color`
- `--radius`

### Potential External or Unmatched Properties

The timeline defaults reference these properties, but they are not defined in the local token files inspected:

- `--spacing`
- `--breakpoint-lg`
- `--text-4xl`

## Extra: 3D Carousel

### Component Properties

- `--w`
- `--ba`
- `--n`
- `--i`

`--n` is expected on the carousel container or context. `--i` is expected per card.

