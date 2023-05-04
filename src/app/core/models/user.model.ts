import { Role } from './role';

export interface User {
  id: number;
  institutionInformation: string;
  name: string;
  surname: string;
  userRole: Role;
  personalCode: string;
  userCode: string;
}
