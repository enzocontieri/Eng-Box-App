import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Sobre = () => {
  return (
    <ScrollView className="bg-[#F4F7F6] p-6">
      <Text
        style={{ fontFamily: "poppins-semi-bold" }}
        className="text-[#00796B] mb-5 font-bold text-3xl shadow-sm text-center mt-5"
      >
        Sobre
      </Text>

      <View className="bg-white p-6 pt-6 pb-2 rounded-lg shadow-lg mb-5">
        <Text className="text-[#00796B] font-bold mb-3">
          Objetivo do aplicativo:
        </Text>
        <Text className="text-[#455A64] font-medium text-base mb-6">
          - Incentivar a conscientização e educação dos engenheiros sobre
          práticas sustentáveis no dia a dia.{"\n"}- Engajar stakeholders em
          torno de metas de sustentabilidade e redução de impacto ambiental.
          {"\n"}- Adotar tecnologias limpas, como o uso de energia solar, eólica
          e biogás.{"\n"}- Desenhar produtos e sistemas que utilizem menos água
          e emitam menos poluentes.
        </Text>

        <Text className="text-[#00796B] font-bold mb-3">Desenvolvedores:</Text>
        <Text className="text-[#455A64] font-medium text-base mb-6">
          - Gabriel Silva Magalhães{"\n"}- Lucas Costa Leite Santana{"\n"}-
          Arthur Victor Vitoriano{"\n"}- Vitor Vitoriano{"\n"}- Yago Mário
          Cerqueira{"\n"}- Edioelson Júnior Teixeira{"\n"}- Enzo Colombo
          Contieri{"\n"}- Hanspeter Dietiker
        </Text>

        <Text className="text-[#00796B] font-bold mb-3">Professor:</Text>
        <Text className="text-[#455A64] font-medium text-base mb-6">
          - Welligton Lacerda
        </Text>

        <Text className="text-[#00796B] font-bold mb-2">Universidade:</Text>
        <Text className="text-[#455A64] font-medium text-base">- UNIFACS</Text>
      </View>
    </ScrollView>
  );
};

export default Sobre;
