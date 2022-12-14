import path = require("path");
import { DataSource } from "typeorm";

const entities = path.join(__dirname, "./../**/*.entity.js");
export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "bexxlebank",
  logging: true,
  entities: [entities],
  migrationsRun: true,
  migrations: ["src/config/migrations/*.ts"],
  migrationsTableName: "migrations_table",
});
