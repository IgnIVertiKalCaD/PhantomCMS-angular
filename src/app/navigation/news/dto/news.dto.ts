export class NewsDto {
  id: number;

  title: string;

  content: string;

  comments: {
    username: string | null,
    content: string | null,
    createdAt: string | null,
  }[];

  attachments: {
    filename: string;
    description: string
  }[];

  tags: string[];

  createdAt: Date;
}
