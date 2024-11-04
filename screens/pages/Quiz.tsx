// Importa componentes do React Native necessários para criar a interface
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";

// Importa o React e a função useState para gerenciar estados no componente
import React, { useState } from "react";

// Importa a navegação para redirecionar o usuário para outras telas
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../utils/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

// Define o tipo Question para organizar a estrutura de perguntas
type Question = {
    question: string; // Texto da pergunta
    options: string[]; // Opções de resposta
    correctOption: number; // Índice da resposta correta
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

// Componente principal do Quiz
const Quiz = () => {
    // Inicializa a navegação para redirecionar à tela de resultados
    const navigation = useNavigation<NavigationProp> ();

    // Array com as perguntas e opções do quiz, incluindo qual opção é a correta
    const questions: Question[] = [
        {
            question: "Qual dos seguintes materiais é mais comumente utilizado na construção de pontes devido à sua alta resistência à tração e compressão?",
            options: ["Concreto", "Alumínio", "Aço", "Madeira"],
            correctOption: 2, // A opção correta é a terceira (índice 2)
        },
        {
            question: "Qual é a unidade de medida de tensão no Sistema Internacional (SI)?",
            options: ["Newton (N)", "Pascal (Pa)", "Joule (J)", "Watt (W)"],
            correctOption: 1,
        },
        {
            question: "Qual é o principal gás que causa o efeito estufa e está diretamente relacionado às atividades humanas?",
            options: ["Oxigênio", "Metano", "Dióxido de enxofre", "Dióxido de carbono"],
            correctOption: 3,
        },
        {
            question: "Qual é a unidade de medida de resistência elétrica?",
            options: ["Volt", "Ampère", "Ohm", "Watt"],
            correctOption: 2,
        },
        {
            question: "Em um sistema hidráulico, qual componente é utilizado para armazenar energia sob a forma de pressão?",
            options: ["Válvula de controle", "Cilindro hidráulico", "Bomba hidráulica", "Acumulador hidráulico"],
            correctOption: 3,
        },
    ];

    // Estado para armazenar as opções selecionadas pelo usuário
    const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(
        Array(questions.length).fill(null) // Inicializa com null para cada pergunta
    );

    // Estado para armazenar a pontuação do usuário
    const [score, setScore] = useState(0);

    // Função chamada ao selecionar uma opção em uma pergunta
    const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
        const updatedSelectedOptions = [...selectedOptions]; // Copia as opções selecionadas
        updatedSelectedOptions[questionIndex] = optionIndex; // Atualiza a opção selecionada
        setSelectedOptions(updatedSelectedOptions); // Atualiza o estado com as novas opções selecionadas
    };
    
    // Função chamada ao enviar o quiz
    const handleSubmit = () => {
        let calculatedScore = 0; // Inicializa a pontuação

        // Calcula a pontuação comparando as respostas corretas com as selecionadas
        selectedOptions.forEach((selectedOption, index) => {
            if (selectedOption === questions[index].correctOption) {
                calculatedScore += 1; // Adiciona 1 ponto para cada resposta correta
            }
        });

        // Navega para a tela de resultados, passando a pontuação e o total de perguntas
        navigation.navigate('QuizzResult', { score: calculatedScore, total: questions.length });

        setScore(calculatedScore); // Atualiza o estado da pontuação (opcional)

        // Exibe alerta com a pontuação (corrige o template string com crase)
        alert(`Você acertou ${calculatedScore} de ${questions.length} perguntas.`);
    };

    return (
        // SafeAreaView para evitar que o conteúdo vá para áreas não-seguras da tela
        <SafeAreaView className="h-full" style={{ flex: 1 }}>
            {/* ScrollView para permitir a rolagem da lista de perguntas */}
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {/* Título do quiz */}
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#00796B" }}>
                        Quiz
                    </Text>
                </View>

                {/* Mapeia as perguntas para renderizá-las na tela */}
                {questions.map((question, questionIndex) => (
                    <View key={questionIndex} style={{ marginBottom: 20 }}>
                        {/* Texto da pergunta */}
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "gray",
                                marginBottom: 10,
                            }}
                        >
                            {question.question}
                        </Text>

                        {/* Mapeia as opções de cada pergunta */}
                        {question.options.map((option, optionIndex) => (
                            <TouchableOpacity
                                key={optionIndex}
                                style={{
                                    backgroundColor:
                                        selectedOptions[questionIndex] === optionIndex
                                            ? "#767676" // Cor diferente para opção selecionada
                                            : "#00796B",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 16,
                                    marginVertical: 5,
                                }}
                                onPress={() => handleOptionSelect(questionIndex, optionIndex)} // Seleciona a opção ao clicar
                            >
                                {/* Ícone com a letra da opção (A, B, C, ...) */}
                                <View
                                    style={{
                                        backgroundColor: "#3EA99F",
                                        borderRadius: 9,
                                        padding: 9,
                                        width: 40,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginRight: 10,
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                                        {String.fromCharCode(65 + optionIndex)} {/* Converte o índice em letra */}
                                    </Text>
                                </View>

                                {/* Texto da opção */}
                                <View style={{
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    flex: 1,
                                    right: 25,
                                }}>
                                    <Text className=" text-white text-center font-bold">
                                        {option}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}

                {/* Botão para enviar o quiz */}
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                        marginTop: 20,
                        backgroundColor: "#00796B",
                        padding: 15,
                        borderRadius: 16,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Enviar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Quiz; // Exporta o componente Quiz para uso em outras partes do app
