import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { data } from "../../data";
import { Product } from "../../types/product";
import { Ionicons } from "@expo/vector-icons";

export default function ProdutosDaCategoria() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [produtos, setProdutos] = useState<Product[]>([]);

  useEffect(() => {
    const filtrados = data.products.filter((p) => p.idCategory === Number(id));
    setProdutos(filtrados);
  }, [id]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/categorias")}
      >
        <Ionicons name="arrow-back" size={22} color="#FF6F61" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/categorias/produto",
                params: { produtoId: item.id.toString() },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 48) / 2;  // 16 padding + espaço entre os cards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    marginLeft: 6,
    color: "#FF6F61",
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    marginBottom: 16,
    width: cardWidth,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  price: {
    fontSize: 13,
    color: "#FF6F61",
    marginTop: 4,
  },
});
