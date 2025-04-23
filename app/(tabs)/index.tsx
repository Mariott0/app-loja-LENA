import {
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  TextInput,
  RefreshControl,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { data } from "../../data";

export default function Index() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const novidades = data.products.slice(-5);
  const maisVendidos = [...data.products].sort((a, b) => b.price - a.price).slice(0, 5);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000); 
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Bem-vindo ao App ! Explore as ofertas.</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar produtos..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />

      {search.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Resultados da Busca</Text>
          <FlatList
            data={filteredProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() =>
                  router.push({
                    pathname: "/categorias/produto",
                    params: { produtoId: item.id.toString() },
                  })
                }
              >
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}

      <Text style={styles.sectionTitle}>Categorias</Text>
      <FlatList
        data={data.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
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
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Novidades</Text>
      <FlatList
        data={novidades}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: "/categorias/produto",
                params: { produtoId: item.id.toString() },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Mais Vendidos</Text>
      <FlatList
        data={maisVendidos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: "/categorias/produto",
                params: { produtoId: item.id.toString() },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: "#121212",
  },
  banner: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  searchBar: {
    backgroundColor: "#1E1E1E",
    color: "#FFF",
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    marginLeft: 16,
    marginBottom: 12,
    marginTop: 10,
  },
  card: {
    width: 140,
    marginLeft: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 90,
  },
  cardTitle: {
    padding: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  productCard: {
    width: 150,
    marginLeft: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 100,
  },
  productTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
