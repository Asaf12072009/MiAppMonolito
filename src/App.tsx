import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { UserService, User } from './services/userService';

const userService = new UserService();

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  // Función para cargar los usuarios de Firebase
  const fetchUsers = async () => {
    setLoading(true);
    const data = await userService.getUsers();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para agregar un usuario de prueba
  const handleAddUser = async () => {
    try {
      const randomId = Math.floor(Math.random() * 1000);
      await userService.createUser(`Usuario ${randomId}`, `usuario${randomId}@test.com`);
      // Recargar la lista
      fetchUsers();
    } catch (error) {
      console.error("No se pudo crear el usuario");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MiAppMonolito + Firebase 🚀</Text>
        
        <Button title="Agregar Usuario de Prueba" onPress={handleAddUser} />

        <Text style={styles.subtitle}>Usuarios en Firestore:</Text>
        
        {loading ? (
          <Text>Cargando...</Text>
        ) : (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id || Math.random().toString()}
            renderItem={({ item }) => (
              <View style={styles.userCard}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitle: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  userCard: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3 },
  userName: { fontSize: 16, fontWeight: 'bold' }
});