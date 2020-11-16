export interface User {
  id: number;
  name: string;
  deckIds: number[]
}

export interface UserRole {
  userId: number;
  role: Role;
}

export enum Role {
  OWNER,
  EDITOR,
  VIEWER
}