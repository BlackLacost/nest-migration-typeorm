import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column('enum', { enum: Gender })
  gender: Gender;
}
