export interface ITeacherClass {
  id: string;
  title: string;
  membersNumber: number;
  imgSrc?: string;
  materialsCount: ITeacherClassMaterialsCount;
  materials?: ITeacherClassMaterials;
}

export interface ITeacherClassMaterialsCount {
  videos: number;
  homeAssignments: number;
  lessons: number;
  texts: number;
}

export interface ITeacherClassMaterials {}
