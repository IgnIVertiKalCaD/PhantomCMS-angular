export class NewsDto {
  id: number;

  title: string;

  content: string;

  comments: {
    username: string | null,
    content: string | null,
    createdAt: string | null,
  }[];

  image: string | null;

  tags: string[];

  createdAt: Date;
}
