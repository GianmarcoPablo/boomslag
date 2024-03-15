import { MainRoutes, Server } from "./presentation";
import { envs } from "./config";

(async () => {
    main()
})()

function main() {
    const server = new Server({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH,
        routes: MainRoutes.routes
    })

    server.start()
}

