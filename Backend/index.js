const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();


const PORT = process.env.PORT || 8080;
const uri = process.env.DB_CONNECTION_STRING;
const client = new MongoClient(uri);

const app = express();
app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("WELCOME!");
});

app.get("/users", async (req, res) => {
    try {
        const con = await client.connect();
        console.log('Connected');
        const response = await con.db('organisation_app').collection('users').find().toArray();
        await client.close();
        res.send(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("zajebal");
    }
});

app.post("/users", async (req, res) => {
    try {
        const user = req.body;
        const con = await client.connect();
        console.log('Connected');
        const response = await con.db('organisation_app').collection('users').insertOne(user);
        await client.close();
        res.send(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.delete("/users/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const con = await client.connect();
        const data = await con.db('organisation_app').collection('users').deleteOne({_id: new ObjectId(id)})

        await new Promise((resolve) => setTimeout(resolve,1000));
        await con.close()
        res.send(data);
    }
    catch(error) {
        res.status(400).send(error);
    }
    }
)

app.put("/users/:id", async (req,res)=> {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const con = await client.connect();

        const response = await con.db('organisation_app')
        .collection('users')
        .findOneAndUpdate(
            {_id: new ObjectId(id) },
            {$set: updateUser },
            {returnDocument: 'after' }
        )
        await con.close();
        res.send(response.value);
    } catch (error)
    { console.error('Error', error);
    res.status(500).send('Internal Server Error');
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
