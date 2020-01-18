import {Usuario, UsuarioModel} from "../model/usuario";

export class UsuarioService {
    static listar(query: any): Promise<Usuario[]> {
        return UsuarioModel.find(query).exec()
    }
    static async consultar(id: string): Promise<Usuario> {
        const user = await UsuarioModel.findById(id).exec();
        if (user == null) {
            throw "Usuario não encontrado!"
        }
        
        return user
    }
    static criar(usuario: Usuario): Promise<Usuario | null> {
        const model = new UsuarioModel(usuario)
        return model.save()
    }
    static async atualizar(id: string, usuario: Usuario): Promise<Usuario | null> {
        const user = await this.consultar(id)

        if (user == null){
            throw "usuário não encontrado!"
        }
        await user.update(usuario)
        return user
    }
    static async remover(id: string) : Promise<Usuario | null> {
        const usuario = await this.consultar(id)
        if (usuario == null) {
            throw "usuario não encontrado!"
        }
        await usuario.remove()
        return usuario
    }

}