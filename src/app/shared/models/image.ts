export class Image {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(
    albumId: string,
    id: string,
    title: string,
    url: string,
    thumbnailUrl: string
  ) {
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }
}
