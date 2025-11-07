import { Status } from './status.enum';

export interface Bird {
  id: string;
  nameNl: string;
  nameDE: string;
  nameSC: string;
  image: string;
  size: string;
  continent: string;
  status: Status;
}
