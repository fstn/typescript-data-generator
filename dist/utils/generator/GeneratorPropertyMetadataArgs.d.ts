export interface GeneratorPropertyMetadataArgs {
    readonly scope: string;
    readonly target: Function;
    readonly propertyName: string;
    readonly callBack: Function;
    readonly params: any[];
}
