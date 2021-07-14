import mongoose from 'mongoose'
import 'dotenv/config'

const connection = {}

async function dbConnect() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState
    console.log('Database Connection: ' + connection.isConnected);
}

export default dbConnect