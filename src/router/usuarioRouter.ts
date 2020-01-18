import { UsuarioService } from "../service/usuarioService";
import {Request, Response, Router } from "express";
import { Usuario } from "../model/usuario";

export const usuarioRouter = Router();

usuarioRouter.get("/:id", async(req: Request, res: Response) => {
        try {
            const usuario: Usuario | null =
                await UsuarioService.consultar(req.params.id);
            res.json(usuario)
        }catch (e) {
            res.status(400).json({message: "não encontrado!"})
        }
});
usuarioRouter.get("/", async (req: Request, res: Response) => {
        const usuarios: Usuario[] =
            await UsuarioService.listar(req.query);
        res.json(usuarios)
});
