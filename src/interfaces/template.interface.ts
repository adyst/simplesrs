export interface Property {
  name: string;
  type: PropertyType;
}

export enum PropertyType {
  TEXT,
  AUDIO,
  IMAGE
}

export interface TemplateCard {
  content: string;
}