import { Gender, UserEntity } from './user.entity';

export const UsersSeed: UserEntity[] = [
  { id: 1, email: 'email1@gmail.com', gender: Gender.MALE },
  { id: 2, email: 'email2@yandex.com', gender: Gender.FEMALE },
];
