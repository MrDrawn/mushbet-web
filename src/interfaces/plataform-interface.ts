import { IGame } from '.';

export interface IPlataform {
  id: string;
  name: string;
  description: string;
  image: string;
  external_id: string;
  active: boolean;
  games: IGame[];
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
