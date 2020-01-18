"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../model/usuario");
class UsuarioService {
    static listar(query) {
        return usuario_1.UsuarioModel.find(query).exec();
    }
    static async consultar(id) {
        const user = await usuario_1.UsuarioModel.findById(id).exec();
        if (user == null) {
            throw "Usuario não encontrado!";
        }
        return user;
    }
    static criar(usuario) {
        const model = new usuario_1.UsuarioModel(usuario);
        return model.save();
    }
    static async atualizar(id, usuario) {
        const user = await this.consultar(id);
        if (user == null) {
            throw "usuário não encontrado!";
        }
        await user.update(usuario);
        return user;
    }
    static async remover(id) {
        const usuario = await this.consultar(id);
        if (usuario == null) {
            throw "usuario não encontrado!";
        }
        await usuario.remove();
        return usuario;
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuarioService.js.map