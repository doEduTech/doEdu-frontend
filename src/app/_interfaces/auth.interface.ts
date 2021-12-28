export interface IDecodedToken {
  exp: number;
  iat: number;
  sub: number;
  username?: string;
  email: string;
  id?: string; // user id
  role: ERole;
}

export type ERole = 'teacher' | 'learner' | 'admin';
