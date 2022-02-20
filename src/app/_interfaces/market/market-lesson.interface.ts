export interface IMarketLesson {
  id: string;
  title: string;
  description: string;
  previewCID: string;
  type: MarketLessonType;
  author: {
    id: string;
    email: string;
  };
  price: number;
  cid: string;
  liked?: boolean;
}

export interface IMarketLessonsQueryParams {
  page: number;
  pageSize: number;
  video: boolean;
  audio: boolean;
  pdf: boolean;
}

export type MarketLessonType = 'audio' | 'video' | 'pdf';

export interface IMarketLessonFilters {
  video: boolean;
  audio: boolean;
  pdf: boolean;
}
