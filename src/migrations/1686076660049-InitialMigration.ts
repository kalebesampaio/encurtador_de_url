import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1686076660049 implements MigrationInterface {
    name = 'InitialMigration1686076660049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "urls" ("id" SERIAL NOT NULL, "code" character varying(10) NOT NULL, "link" character varying NOT NULL, "hits" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_a7b51de2dd9fc9fddb1e2453b98" UNIQUE ("code"), CONSTRAINT "PK_eaf7bec915960b26aa4988d73b0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "urls"`);
    }

}
