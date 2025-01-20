# FlexFlow

Легковесный и гибкий движок для верстки пользовательских интерфейсов с использованием Flexbox на TypeScript.

## Документация
- [English](docs/README.md)
- [Русский](docs/README.ru.md)

## Установка
```bash
npm install flexflow
```

## Возможности
- Расчет верстки на основе Flexbox.
- Поддержка `flexDirection`, `justifyContent`, `alignItems` и других свойств.
- Легкая интеграция с любым движком рендеринга.

## Использование
```typescript
import { Tree, calculateLayout } from 'flexflow';
import { createViewNode } from 'flexflow/utils/createNode';

const root = new Tree(createViewNode({ width: 100, height: 100 }));
const child = root.addChild(new Tree(createViewNode({ width: 50, height: 50 })));

calculateLayout(root);

console.log(root);
```

## Примеры
- [Basic Usage](examples/basic.ts)
