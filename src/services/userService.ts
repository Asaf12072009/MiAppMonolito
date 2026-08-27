import { AppDataSource } from "../database/dataSource";
import { User } from "../database/entities/User";

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    // Crear un nuevo usuario
    async createUser(name: string, email: string): Promise<User> {
        const user = this.userRepository.create({ name, email });
        return await this.userRepository.save(user);
    }

    // Obtener todos los usuarios
    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    // Eliminar un usuario por su ID
    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}