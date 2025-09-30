import mongoose from "mongoose";

async function connection() {
    try {
        await mongoose.connect("mongodb+srv://db_user:Xt0h9ApmtHZwo5Ob@clusteraulassoulcode.0nvm3rv.mongodb.net/sistema_db?retryWrites=true&w=majority&appName=ClusterAulasSoulCode");
        console.log("Database conected.");
    } catch (error) {
        console.log("Database connection error.");
    }
}

export { connection };
