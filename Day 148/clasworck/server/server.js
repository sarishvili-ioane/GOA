import express from "express"
import dotevn from "dotenv"
import cors from "cors"

dotevn.config()
const app = express
app.use(corse())

const USER = {
    name: "ioane",
    surname: "sarishvili",
    age: 50,
    email: 'fakemail@gmail.com',
}
app.get("/user", (req,res) => {
    try {
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    app.listen(process.env.PORT, () => 
})