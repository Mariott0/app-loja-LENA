import { Stack } from "expo-router";

export default function CategoriasLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E1E1E",
        },
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 18,
          color: "#FFFFFF",
        },
        headerTintColor: "#FF6F61",
      }}
    >
      <Stack.Screen name="categorias" options={{ title: "Categorias" }} />
      <Stack.Screen name="[id]" options={{ title: "Produtos da Categoria" }} />
      <Stack.Screen name="produto" options={{ title: "Detalhes do Produto" }} />
    </Stack>
  );
}
