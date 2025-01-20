# FlexFlow

A lightweight and flexible layout engine for building user interfaces with Flexbox in TypeScript.

## Documentation
- [English](README.md)
- [Русский](README.ru.md)

## Installation
```bash
npm install flexflow
```

## Features
- Flexbox-based layout calculation.
- Support for `flexDirection`, `justifyContent`, `alignItems`, and more.
- Easy to integrate with any rendering engine.

## Usage
```typescript
import { Tree, calculateLayout } from 'flexflow';

const root = new Tree({ width: 100, height: 100 });
const child = root.addChild(new Tree({ width: 50, height: 50 }));

calculateLayout(root);
```

## Examples
- [Basic Usage](../examples/basic.ts)
