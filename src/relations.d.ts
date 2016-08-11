/**
 * Map to specify type for the passed relations
 */
export interface RelationTypeMap {
  [relationName: string]: string;
}

/**
 * Function to pass directly as the typeForAttributes option to the serializer
 */
export type RelationTypeFunction = (attribute: string) => string;

export type RelationTypeOpt = RelationTypeMap | RelationTypeFunction;
