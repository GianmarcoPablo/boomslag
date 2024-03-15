import express, { Router, Request, Response } from "express"
import cors from "cors"
import path from "path"

interface Props {
    port: number
    publicPath: string
    routes: Router
}

export class Server {
    private app = express()
    private readonly port: number
    private readonly publicPath: string
    private readonly routes: Router

    constructor(props: Props) {
        this.port = props.port
        this.publicPath = props.publicPath
        this.routes = props.routes
    }

    public async start() {

        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        this.app.use(express.static(this.publicPath));
        this.app.use(this.routes);

        this.app.get('*', (req: Request, res: Response) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath)
        })

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}