import "reflect-metadata";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { AppDataSource } from "./database/dataSource";

export default function App() {
  useEffect(() => {
    // Inicializar la conexión de TypeORM al arrancar la App
    if (!AppDataSource.isInitialized) {
      AppDataSource.initialize()
        .then(() => console.log("Base de datos conectada con éxito 🚀"))
        .catch((error) => console.error("Error al conectar la BD:", error));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});