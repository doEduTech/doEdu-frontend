export interface ILearnerLesson {
  type: ILearnerLessonType;
  lessonId: string;
  like_author: string;
  previewCID: string;
  title: string;
  created: string;
}

export type ILearnerLessonType = 'audio' | 'video' | 'pdf';
