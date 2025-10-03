import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

const authRouter = express.Router();
const SECRET = "palavra-super-hiper-mega-secreta";

authRouter.post("/", async (req, res) => {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "Este e-mail não está cadastro"
        });
    }

    const compare = await bcrypt.compare(senha, user.senha);

    if (!compare) {
        return res.status(401).json({
            message: "A senha está incorreta"
        });
    }

    const payload = {
        id: user._id,
        nome: user.nome,
        email: user.email
    };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
});

export default authRouter;