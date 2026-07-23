# small-style Release Workflow (Tarball Mode)

This playbook is for releasing `small-style` without publishing to npm.

## Goal

- Produce a versioned tarball artifact.
- Let each consumer choose when to upgrade.
- Keep rollout and rollback simple.

## Prerequisites

1. Version is bumped in `package.json`.
2. Build pipeline passes locally.
3. Consumer projects reference `small-style` via `file:` tarball paths.

## Release Checklist

1. Bump version in `package.json`.
2. Run `npm run build:all`.
3. Run `npm pack`.
4. Copy the tarball to `_artifacts/small-style/`.
5. Commit release-related source changes.
6. Tag the release, for example `v1.1.0`.
7. Push commit and tag.
8. Update only the consumer projects that should move to the new version.
9. Run `npm install` in each updated consumer.
10. Rebuild each updated consumer and verify output.

## Release Steps

### 1. Build and package

```bash
cd /path/to/small-style
npm run build:all
npm pack
```

Expected output file pattern:

- `small-style-<version>.tgz`

Example:

- `small-style-1.1.0.tgz`

### 2. Copy the tarball to the shared artifact path

```bash
cp small-style-1.1.0.tgz ../_artifacts/small-style/
```

### 3. Commit and tag

```bash
git add .
git commit -m "chore: release 1.1.0 tarball"
git tag v1.1.0
git push
git push --tags
```

## Consumer Update Steps

### 1. Update dependency

In each consumer, point `small-style` to the tarball you want:

```json
{
  "dependencies": {
    "small-style": "file:../_artifacts/small-style/small-style-1.1.0.tgz"
  }
}
```

Adjust relative path based on project location.

### 2. Install and build

```bash
npm install
```

Then run that consumer's CSS build.

Examples:

- `lasgo-test`: `npm run build:sass`
- `gardners25/layers/tailwind`: `npm run build:sass-once`

## Version Pinning Policy

Different projects may pin different `small-style` versions at the same time.

Example:

- Project A uses `file:../_artifacts/small-style/small-style-1.0.0.tgz`
- Project B uses `file:../_artifacts/small-style/small-style-1.1.0.tgz`

This allows staged adoption.

## Rollback

1. Change the consumer dependency back to an earlier tarball version.
2. Run `npm install`.
3. Re-run the CSS build.

## CI Considerations

Relative `file:` paths require the tarball to exist in the CI workspace.
If that is not feasible, switch to one of:

1. Shared internal artifact storage.
2. Internal npm registry.
3. Git tag dependency.
