import { createConnection } from "typeorm";
import { Digimon } from "./entity/digimon";
import { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE } from "./settings";

export const connection = createConnection({
  name: "default",
  type: "postgres",
  host: POSTGRES_HOST,
  port: 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: [Digimon],
  synchronize: true,
  logging: false,
});

export const getConnection = () => connection;
