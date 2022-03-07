export interface ILearnerLesson {
  type: 'audio' | 'video' | 'pdf';
  lessonId: string;
  like_author: string;
  previewCID: string;
  title: string;
  created: string;
}
