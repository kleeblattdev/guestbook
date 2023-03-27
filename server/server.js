import express from 'express'
import cors from 'cors'
import { appendFile, readFile, writeFile } from './helper.js'

const PORT = 9898
const app = express()

//Middleware zum Parsen von JSON und zur Behandlung von CORS
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

app.get('/api/getPosts', (req,res)=>{
    readFile()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

app.post('/api/addPost', (req,res)=>{
    const data = req.body
    appendFile(data)
    .then(newData => res.json(newData))
    .catch(err => console.log(err))
})

app.listen(PORT, () => console.log("Sever läuft auf PORT " + PORT))