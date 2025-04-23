import { View, Text, StyleSheet, Image } from "react-native";

export default function Conta() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Admin</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>📧 E-mail</Text>
        <Text style={styles.info}>Admin@teste.com</Text>

        <Text style={styles.label}>📞 Telefone</Text>
        <Text style={styles.info}>(45) 99999-9999</Text>

        <Text style={styles.label}>📍 Endereço</Text>
        <Text style={styles.info}>Rua Teste, 123 - Toledo/PR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    paddingTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#FF6F61",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 30,
  },
  infoBox: {
    width: "90%",
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    padding: 20,
  },
  label: {
    color: "#888",
    fontSize: 14,
    marginTop: 12,
  },
  info: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
