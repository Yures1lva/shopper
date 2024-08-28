import Fastify from "fastify";
import { routes } from "./routes";

const app = Fastify({logger: true})

app.register(routes)

const start = async ()=> {
    try {
        await app.listen({port: 80})
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
start()