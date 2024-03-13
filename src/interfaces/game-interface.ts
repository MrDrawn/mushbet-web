import { IPlataform } from '.';

export interface IGame {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  external_id: string;
  game_plataform_id: string;
  plataform: IPlataform;
  active: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
