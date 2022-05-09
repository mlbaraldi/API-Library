import mongoose from "mongoose"

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://mlbaraldi:Stellinh4@Testes-Mongo.nfelt.mongodb.net/AluraAbril")
  }

let db = mongoose.connection

export default db

