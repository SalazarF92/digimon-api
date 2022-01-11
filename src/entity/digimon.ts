import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "digimons" })
export class Digimon {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ default: "" })
  public name: string;

  @Column({ default: "" })
  public img: string;

  @Column({ default: "" })
  public level: string;
}
