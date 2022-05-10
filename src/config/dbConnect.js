import mongoose from "mongoose"

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://")
  }

let db = mongoose.connection

export default db

