import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/app.routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  const server = new Server({
    port:envs.PORT,
    routes:AppRoutes.routes
  });
  server.start();
}
