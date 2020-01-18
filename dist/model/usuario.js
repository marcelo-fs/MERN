"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSChema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});
exports.UsuarioModel = mongoose_1.model("usuarios", usuarioSChema);
//# sourceMappingURL=usuario.js.map