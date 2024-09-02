import express from "express"
import { router } from "./routes/routes"

const app = express()

app.use(express.json())


app.use("/api/users", router)

app.listen(3000, () => {
    console.log("Listening to port 3000!!!!!!")
})
