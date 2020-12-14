import { IAddress } from "./address";

export interface IUser {
  name: string;
  email: string;
  favoritesJobs?: string[],
  cpf?: number;
  dateBirth?: Date;
  imgSrc?: string;
  address?: IAddress;
}
