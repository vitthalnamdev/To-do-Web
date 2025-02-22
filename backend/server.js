require('dotenv').config();
const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();

_path = path.join(__dirname, '../', './frontend' , './build');

//app.use(express.static(_path));

app.use(cors()); // Allow frontend to access backend
app.use(express.json()); // Parse JSON requests


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const dbName = "Todo's"; // Your database name
const collectionName = 'TodoList'; // Your collection name


async function connectDB() {
    const client = new MongoClient(mongoURI);
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
}

app.get('/', async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection(collectionName);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/data', async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection(collectionName);

        const newItem = {
            Title: req.body.Title,
            desc: req.body.desc,
            createdAt: new Date(),
        };

        const result = await collection.insertOne(newItem);
        res.status(201).send(newItem);
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.delete('/data/:id', async (req, res) => {
    const itemId = req.params.id;

    if (!ObjectId.isValid(itemId)) {
        return res.status(400).json({ message: "Invalid item ID" });
    }

    try {
        const db = await connectDB();
        const collection = db.collection(collectionName);

        const result = await collection.deleteOne({ _id: new ObjectId(itemId) });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Item successfully deleted' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

console.log(process.env.PORT);
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



 

 