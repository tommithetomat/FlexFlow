import { Tree } from '../src';

describe('Tree', () => {
    it('should add a child node', () => {
        const root = new Tree({});
        const child = new Tree({});
        root.addChild(child);

        expect(root.firstChild).toBe(child);
        expect(child.parent).toBe(root);
    });
});
