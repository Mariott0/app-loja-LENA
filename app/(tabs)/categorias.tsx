import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { data } from "../../data";
import { Category } from "../../types/category";

export default function ListaCategorias() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const categoriasFiltradas = data.categories.filter((categoria) =>
    categoria.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar categorias..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />

      {categoriasFiltradas.length === 0 ? (
        <Text style={styles.noResult}>Nenhuma categoria encontrada.</Text>
      ) : (
        <FlatList
          data={categoriasFiltradas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push({
                  pathname: "/categorias/[id]",
                  params: { id: item.id.toString() },
                })
              }
            >
              <Image source={{ uri: item.cover }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  searchBar: {
    backgroundColor: "#1E1E1E",
    color: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    padding: 14,
    color: "#FFFFFF",
  },
  noResult: {
    textAlign: "center",
    color: "#FF6F61",
    fontSize: 16,
    marginTop: 20,
  },
});
