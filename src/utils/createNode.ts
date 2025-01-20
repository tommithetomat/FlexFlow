import { LayoutNode, ViewStyle, TextStyle } from '../types';

export function createViewNode(style: ViewStyle): LayoutNode {
    return {
        input: style,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        zIndex: 0,
        backgroundColor: '#ffffff',
    };
}

export function createTextNode(style: TextStyle): LayoutNode {
    return {
        input: style,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        zIndex: 0,
        backgroundColor: '#ffffff',
    };
}
