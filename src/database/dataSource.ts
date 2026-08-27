import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "mi_app_db.sqlite",
    synchronize: true, // Solo para desarrollo
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});