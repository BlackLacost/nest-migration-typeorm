import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { UsersSeed } from '../users/users.seed';

export class SeedUser1650258249700 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      UsersSeed.map((userSeed) =>
        queryRunner.manager.create<UserEntity>(UserEntity, userSeed),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable('users');
  }
}
