import { createConnection } from "typeorm";
import { Digimon } from "./entity/digimon";

export const connection = createConnection({
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "digimon",
  password: "digimon",
  database: "digimon",
  entities: [Digimon],
  synchronize: true,
  logging: false,
});

export const getConnection = () => connection;
