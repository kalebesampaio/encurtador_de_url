import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1686016385204 implements MigrationInterface {
    name = 'CreateTables1686016385204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "urls" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "urls" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
