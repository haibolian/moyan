export type Journal = {
  id: string | number;
  title: string;
  content: string,
  createdAt: string,
  updatedAt: string,
  isDraft: number,
  categoryId: string | number,
  categoryName: string,
  [key: string]: any
}

