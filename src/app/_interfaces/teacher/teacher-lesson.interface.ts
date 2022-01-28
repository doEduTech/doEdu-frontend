export interface ITeacherLesson {
  id: string;
  cid: string;
  author: string;
  title: string;
  description?: string;
  previewCID?: string;
}

export interface ITeacherLessonForm {
  title: string;
  description?: string;
}
