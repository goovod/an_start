import DateTimeFormat = Intl.DateTimeFormat;
import {GoogleMapInterface} from './GoogleMapInterface';

export class User implements GoogleMapInterface {
  public id: number;
  public name: string;
  public lastName: string;
  public email: string;
  public gender: string;
  public birthday: DateTimeFormat;
  public latitude: number;
  public longitude: number;
  public address: string;
  constructor () {}
}
