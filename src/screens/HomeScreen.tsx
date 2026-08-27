import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { UserService } from "../services/userService";
import { User } from "../database/entities/User";

const userService = new UserService();

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadUsers = async () => {
    try {
      const allUsers = await userService.getUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async () => {
    if (!name || !email) return;
    try {
      await userService.createUser(name, email);
      setName("");
      setEmail("");
      loadUsers();
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Monolito - SQLite</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Button title="Guardar Usuario" onPress={handleAddUser} />

      <Text style={styles.subtitle}>Lista de Usuarios:</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
  userCard: { padding: 10, backgroundColor: "#f9f9f9", marginBottom: 10, borderRadius: 5, borderWidth: 1, borderColor: "#eee" },
  userName: { fontWeight: "bold" },
});