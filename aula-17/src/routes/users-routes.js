import express from "express";
import User from "../models/user-model.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    console.log(nome, idade);
    res.status(200).json({ message: "Lista de usuários." });
});

userRouter.post("/", async (req, res) => {
    const data = req.body;
    const user = new User(data);
    const doc = await user.save();
    const userCreated = doc.toObject();
    res.status(200).json(userCreated);
});

userRouter.put("/:id", (req, res) => {
    const user = req.body;
    const id = req.params.id;
    console.log(user, id);
    res.status(200).json({ message: "Usuário atualizado." });
});

userRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.status(200).json({ message: "Usuário excluído." });
});

export default userRouter;
