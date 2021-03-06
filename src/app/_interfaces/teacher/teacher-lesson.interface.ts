export interface ITeacherLesson {
  id: string;
  cid: string;
  author: string;
  title: string;
  description?: string;
  previewCID?: string;
  type?: TeacherLessonType;
  nft?: string;
  nftStatus?: EnftMintingStatus;
}

export interface ITeacherLessonCreationForm {
  title: string;
  description?: string;
  createNFT: boolean;
}

export interface ITeacherLessonUpdateForm {
  title?: string;
  description?: string;
  previewFile?: File | null;
}

export type TeacherLessonType = 'pdf' | 'video' | 'audio';

export enum EnftMintingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
}
