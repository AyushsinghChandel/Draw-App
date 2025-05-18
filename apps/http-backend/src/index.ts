import express  from "express";
import { middleware } from "./middleware";
import {CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types"
const app = express();
app.use(express.json());

app.post("/signup", (req,res) => {

})

app.post("/signin", (req,res) => {
    
})

app.post("/room",middleware, (req,res) => {
    
})

app.listen(3001);
