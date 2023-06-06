import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("urls")
class Url {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 10, unique: true })
  code: string;

  @Column({ type: "varchar" })
  link: string;

  @Column()
  hits: number;

  @CreateDateColumn()
  createdAt?: string | Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: string | Date | null | undefined;
}

export { Url };
