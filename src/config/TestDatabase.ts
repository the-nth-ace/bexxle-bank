import { DataSource } from "typeorm";
import { Account } from "../account/account.entity";

// const entities = path.join(;
// const migrations = path.join(__dirname, "./../**/*.entity.js");

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "bexxletest",
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [__dirname, "./../**/*.entity.js"],
  migrationsRun: true,
  migrations: ["src/config/migrations/*.ts"],
  migrationsTableName: "migrations_table",
});

dataSource;
