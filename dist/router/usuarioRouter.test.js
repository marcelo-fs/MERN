"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mockingoose_1 = __importDefault(require("mockingoose"));
const server_1 = __importDefault(require("../server"));
const usuario_1 = require("../model/usuario");
test("[GET] /usuarios", async () => {
    const mockusuarios = [{
            id: "123",
            username: "marcelo",
            password: "franca"
        }];
    mockingoose_1.default(usuario_1.UsuarioModel)
        .toReturn(mockusuarios, "find");
    const response = await supertest_1.default(server_1.default).get("/usuarios");
    expect(response.text).toBe(JSON.stringify(mockusuarios));
});
//# sourceMappingURL=usuarioRouter.test.js.map