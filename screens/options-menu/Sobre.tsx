import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import GoBackButton from "../../Components/GoBackButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Sobre = () => {
  return (
    <SafeAreaView>

      <ScrollView className="bg-[#F4F7F6]  ">
        <GoBackButton
          title="Sobre"

        />
        <View className="bg-white p-6 pt-6 pb-2 rounded-lg shadow-lg mb-5">
          <Text
            style={{ fontFamily: 'poppins-semi-bold' }}
            className="text-[#1F3B4D]  mb-3">
            Objetivo do aplicativo:

          </Text>
          <Text className="text-[#455A64]  text-base mb-6">
            - Incentivar a conscientização e educação dos engenheiros sobre
            práticas sustentáveis no dia a dia.{"\n"}- Engajar stakeholders em
            torno de metas de sustentabilidade e redução de impacto ambiental.
            {"\n"}- Adotar tecnologias limpas, como o uso de energia solar, eólica
            e biogás.{"\n"}- Desenhar produtos e sistemas que utilizem menos água
            e emitam menos poluentes.
          </Text>

          <Text
            style={{ fontFamily: 'poppins-semi-bold' }}
            className="text-[#1F3B4D]  mb-3">Desenvolvedores:</Text>
          <Text className="text-[#455A64]  text-base mb-6">
            - Gabriel Silva Magalhães{"\n"}- Lucas Costa Leite Santana{"\n"}-
            Arthur Victor Vitoriano{"\n"}- Vitor Vitoriano{"\n"}- Yago Mário
            Cerqueira{"\n"}- Edioelson Júnior Teixeira{"\n"}- Enzo Colombo
            Contieri{"\n"}- Hanspeter Dietiker
          </Text>

          <Text
            style={{ fontFamily: 'poppins-semi-bold' }}
            className="text-[#1F3B4D]  mb-3">Professor:</Text>
          <Text className="text-[#455A64]  text-base mb-6">
            - Welligton Lacerda
          </Text>

          <Text
            style={{ fontFamily: 'poppins-semi-bold' }}
            className="text-[#1F3B4D] mb-3">Universidade:</Text>
          <Text className="text-[#455A64]  text-base">- UNIFACS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sobre;