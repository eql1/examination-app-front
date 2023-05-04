import { Role } from '../models/role';
import { User } from '../models/user.model';

export const users: User[] = [
  {
    id: 1,
    institutionInformation: 'Broka vidusskola',
    name: 'Antonio',
    surname: 'Margareti',
    userRole: Role.USER,
    personalCode: '123145-961812',
    userCode: '19021315712',
  },
  {
    id: 2,
    institutionInformation: 'Alunana vidusskola',
    name: 'Janis',
    surname: 'Alnis',
    userRole: Role.USER,
    personalCode: '1323131-421859',
    userCode: '129860459221',
  },
];
