import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { data } from "../../data";
import { Ionicons } from "@expo/vector-icons";

export default function Produto() {
  const { produtoId } = useLocalSearchParams();
  const router = useRouter();

  const produto = data.products.find(
    (p) => p.id.toString() === produtoId?.toString()
  );

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#FF6F61" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Image source={{ uri: produto.image }} style={styles.image} />
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#121212",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: "#FF6F61",
    marginLeft: 6,
    fontWeight: "500",
  },
  errorText: {
    color: "#FF6F61",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 16,
    marginBottom: 24,
    backgroundColor: "#1E1E1E",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: "#FFFFFF",
  },
  price: {
    fontSize: 18,
    color: "#FF6F61",
  },
});
