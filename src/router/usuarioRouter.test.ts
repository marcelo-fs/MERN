import supertest from "supertest"
import mockingoose from "mockingoose";
import app from "../server";
import { UsuarioModel } from "../model/usuario";

test("[GET] /usuarios", async () => {
    const mockusuarios = [{
        _id: "5e23534b78649726a9021964",
        username: "marcelo",
        password: "franca"
    }];
    mockingoose(UsuarioModel)
        .toReturn(mockusuarios, "find");
    const response = await supertest(app).get ("/usuarios");
    expect(response.text).toBe(JSON.stringify(mockusuarios))
})