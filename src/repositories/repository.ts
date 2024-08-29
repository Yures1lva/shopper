import { MongoClient, Db } from "mongodb"


class Repository {

    private db: Db | null = null;
    private client: MongoClient;

    constructor() {
        this.client = new MongoClient("mongodb://localhost:27017") //process.env.MONGO_URL
         
    }

    async initializeDatabase() {
        await this.client.connect()
        this.db = this.client.db("")
    }
}
