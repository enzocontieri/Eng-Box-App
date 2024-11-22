import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackButton from '../../Components/GoBackButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AboutDevsBox, AboutTextBox } from '../../Components/AboutTextBox';


const Sobre = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <GoBackButton title='Sobre' />

        <View className='flex items-center mt-10'>

          <AboutTextBox
            iconName='information-circle'
            iconSize={30}
            boxTitle='Sobre o aplicativo'
            boxTextContent='O EngBox é uma ferramenta voltada para promover o consumo sustentável através de práticas e dicas específicas da área de Engenharia.
              Ele faz parte de uma família de aplicativos que exploram a sustentabilidade em diferentes campos, como Gastronomia, Moda, Farmácia
              e Engenharia.'
          />

          <AboutTextBox
            iconName='flag'
            iconSize={30}
            boxTitle='Objetivo'
            boxTextContent='Nosso objetivo é oferecer soluções práticas e acessíveis para ajudar as pessoas a adotarem hábitos mais sustentáveis,
            aplicando conhecimentos técnicos da área de Engenharia. Com isso, buscamos contribuir para um impacto positivo no meio ambiente e 
            na sociedade.'
          />

          <AboutDevsBox />

          <AboutTextBox
            iconName='school'
            iconSize={30}
            boxTitle='Orientadores'
            boxTextContent='• Wellington Lacerda'
          />

          <AboutTextBox
            iconName='library'
            iconSize={30}
            boxTitle='Universidade'
            boxTextContent='Este projeto foi desenvolvido por estudantes da UNIFACS, que integra o grupo Grupo Anima Educação. A iniciativa reflete o compromisso 
            da instituição com a inovação e a sustentabilidade.'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Sobre;