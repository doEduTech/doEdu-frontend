export interface IMarketLesson {
  id: string;
  title: string;
  description: string;
  previewCID: string;
  author: {
    id: string;
    email: string;
  };
  price: number;
  cid: string;
}
