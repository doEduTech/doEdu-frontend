export interface ITeacherClass {
  id: string;
  title: string;
  membersNumber: number;
  imgSrc?: string;
  materials: ITeacherClassMaterials;
}

export interface ITeacherClassMaterials {
  videos: number;
  homeAssignments: number;
  lessons: number;
  texts: number;
}
