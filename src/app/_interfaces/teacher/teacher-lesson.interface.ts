export interface ITeacherLesson {
  id: string;
  cid: string;
  author: string;
  title: string;
  description?: string;
  previewCID?: string;
  type?: TeacherLessonType;
}

export interface ITeacherLessonCreationForm {
  title: string;
  description?: string;
}

export interface ITeacherLessonUpdateForm {
  title?: string;
  description?: string;
  previewFile?: File | null;
}

export type TeacherLessonType = 'pdf' | 'video' | 'audio';
