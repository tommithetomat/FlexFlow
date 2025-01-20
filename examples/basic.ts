import { Tree, calculateLayout } from '../src';
import { createViewNode } from '../src/utils/createNode';

// Создаем корневой узел
const root = new Tree(createViewNode({ width: 100, height: 100 }));

// Создаем дочерний узел
const child = root.addChild(
    new Tree(createViewNode({ width: 50, height: 50 })),
);

// Выполняем расчет верстки
calculateLayout(root);

// Выводим результат
console.log(root);
