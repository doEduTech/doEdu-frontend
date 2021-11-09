export interface ICourse {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  author: string;
  price: number;
}

export interface ICourseComment {
  id: string;
  courseId: string;
  created: string;
  author: string;
  text: string;
}
