import { Server } from "./presentation/server";
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/app.routes";
import { MongoDatabase } from "./database/mongo/mongo-connection.database";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect(envs.MONGO_URL, envs.MONGO_DB_NAME);
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();  
}
