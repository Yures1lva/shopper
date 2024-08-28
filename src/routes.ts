import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"; 

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/upload", async (request: FastifyRequest, reply: FastifyReply) => {

    }) 

    fastify.patch("/confirm", async  (request: FastifyRequest, reply: FastifyReply) => {

    })

    fastify.get("/:customer_code/list", async  (request: FastifyRequest, reply: FastifyReply) => {
        return {ok : "return"}
    })
}