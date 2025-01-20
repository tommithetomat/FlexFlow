export type ViewStyle = {
    width?: number | `${number}%`;
    height?: number | `${number}%`;
    flexDirection?: 'row' | 'column';
    justifyContent?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    alignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    flex?: number;
    position?: 'absolute' | 'relative';
    gap?: number;
    zIndex?: number;
    display?: 'flex' | 'none';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    padding?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    margin?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    backgroundColor?: string;
};

export type TextStyle = {
    text: string;
    fontSize: number;
    color: string;
};

export type LayoutNode = {
    input: ViewStyle | TextStyle;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
    backgroundColor: string;
};
