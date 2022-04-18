# Миграция TypeORM (0.2) в NestJS

## Шаги

```shell
npm i @nestjs/typeorm typeorm@0.2 pg
```

```json
"scripts" {
	"migration:create": "npm run build && npm run typeorm migration:create -- -n",
	"migration:generate": "npm run build && npm run typeorm migration:generate -- -n",
	"migration:run": "npm run build && npm run typeorm migration:run",
	"migration:down": "npm run typeorm migration:revert"
}
```

Создаем первую миграцию и выполняем ее

```shell
npm run migration:create init
npm run migration:run
```

После этого появятся таблицы migrations и typeorm_metadata. Чтобы посмотреть их можно в psql `psql -U root -d db_migration` выполнить команду `\dt`.

Создадим сущность User

```ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
}
```

И сгенерируем для нее миграцию и сразу ее накатим

```shell
npm run migration:generate User
npm run migration:run
```

Добавим в сущность User пол с типом enum.

```ts
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
```

```shell
npm run migration:generate User-add_gender_column
npm run migration:run
```

## Источники

- [NestJS TypeORM миграции](https://www.youtube.com/watch?v=LqGJOiRRKF4)
- [Using TypeORM migrations for simple database seeding](https://medium.com/@emfelipe/using-typeorm-migrations-for-simple-database-seeding-nestjs-example-1f1acbc0ef24)
