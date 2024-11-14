import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Sobre = () => {
  return (
    <View className="mt-12" style={styles.container}>
      <Text style={styles.title}>Sobre</Text>

      <Text style={styles.subtitle}>Objetivo do aplicativo:</Text>
      <Text style={styles.text}>
        - Incentivar a conscientização e educação dos engenheiros sobre práticas
        sustentáveis no dia a dia.{"\n"} - Engajar stakeholders em torno de metas de
        sustentabilidade e redução de impacto ambiental.{"\n"} - Adotar tecnologias
        limpas, como o uso de energia solar, eólica e biogás.{"\n"} - Desenhar produtos
        e sistemas que utilizem menos água e emitam menos poluentes.
      </Text>

      <Text style={styles.subtitle}>Desenvolvedores:</Text>
      <Text style={styles.text}>
        - Gabriel Silva Magalhães{"\n"}- Lucas Costa Leite Santana{"\n"}- Arthur
        Victor Vitoriano{"\n"}- Yago Mário Cerqueira{"\n"}- Edioelson Júnior
        Teixeira{"\n"}- Enzo Colombo Contieri{"\n"}- Hanspeter Dietiker
      </Text>

      <Text style={styles.subtitle}>Professor:</Text>
      <Text style={styles.text}>- Welligton Lacerda</Text>

      <Text style={styles.subtitle}>Universidade:</Text>
      <Text style={styles.text}> - UNIFACS </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 17,
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    marginTop: 5,
  },
});
export default Sobre;
