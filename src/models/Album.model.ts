import Photo from "./Photo.model";

export default class Album {
  public id?: number;
  public photos?: Photo[];
  public title?: string;
}
