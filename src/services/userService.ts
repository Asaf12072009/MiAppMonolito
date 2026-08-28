import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface User {
  id?: string;
  name: string;
  email: string;
}

export class UserService {
  private collectionName = 'users';

  async createUser(name: string, email: string): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, this.collectionName), {
        name,
        email,
        createdAt: Date.now(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      const querySnapshot = await getDocs(collection(db, this.collectionName));
      const users: User[] = [];
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...(doc.data() as Omit<User, 'id'>),
        });
      });
      return users;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }
  }
}