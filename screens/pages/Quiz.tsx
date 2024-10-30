import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../utils/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

// Define o tipo de navegação para o componente
type NavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

// Componente principal do Quiz
const Quiz = () => {
    // Array de questões com id, question, options e correctOption para armazenar opções e resposta correta
    const questions = [
        {
            id: "1",
            question: "Qual dos seguintes materiais é mais comumente utilizado na construção de pontes devido à sua alta resistência à tração e compressão?",
            option: ["Concreto", "Alumínio", "Aço", "Madeira"],
            correctOption: 2,
        },
        // Demais questões aqui...
    ];

    // Estado para armazenar a questão atual, a opção selecionada e a pontuação do usuário
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);

    const navigation = useNavigation<NavigationProp>();

    // Função que avança para a próxima questão ou exibe o resultado final
    const handleNextQuestion = () => {
        if (selectedOption === null) {
            alert("Por favor, selecione uma opção antes de continuar.");
            return;
        }

        // Incrementa a pontuação se a resposta estiver correta
        if (selectedOption === questions[currentQuestion].correctOption) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        // Verifica se há mais perguntas ou exibe o total de acertos
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
        } else {
            Alert.alert(
                `Você acertou ${score} de ${questions.length} perguntas.`
            );
            // Navega para a tela de resultado com pontuação final
            navigation.navigate('QuizzResult', { score: score, total: questions.length });
        }
    };

    return (
        <SafeAreaView className="h-full">
            {/* FlatList para exibir apenas a questão atual */}
            <FlatList
                data={[questions[currentQuestion]]} // Exibe apenas a questão atual
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center', padding: 20 }}>

                        <Text className="text-[#00796B] font-bold text-2xl">Quiz</Text>

                        {/* Exibe a pergunta */}
                        <Text className="text-gray-600 font-bold text-lg mt-10 ml-[3.25%]">
                            {item.question}
                        </Text>

                        {/* Mapeia as opções da questão atual */}
                        {item.option.map((option, index) => {
                            const optionLabel = String.fromCharCode(65 + index); // Letras (A, B, C, D)

                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        backgroundColor: selectedOption === index ? "#C9C4C4" : "#00796B",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        top: 50,
                                        padding: 16,
                                        borderRadius: 16,
                                        marginVertical: 5,
                                        width: 340,
                                        alignSelf: "center",
                                    }}
                                    onPress={() => setSelectedOption(index)} // Define a opção selecionada
                                >
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
                                            {optionLabel}
                                        </Text>
                                    </View>

                                    <View style={{
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        flex: 1,
                                        right: 25,
                                    }}>
                                        <Text style={{
                                            color: selectedOption === index ? '#767676' : '#fff', // Trocar a cor do texto ao ser selecionado
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}>
                                            {option}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}

                        {/* Botão para enviar a resposta e ir para a próxima pergunta */}
                        <TouchableOpacity
                            onPress={handleNextQuestion}
                            disabled={selectedOption === null} // Desabilita o botão se nenhuma opção foi selecionada
                            style={{
                                marginTop: 20,
                                top: 100,
                                padding: 25,
                                borderRadius: 18,
                                backgroundColor: selectedOption !== null ? "#00796B" : "gray",
                                width: 340,
                                alignSelf: "center",
                            }}
                        >
                            <Text className="text-center text-white font-bold">Enviar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default Quiz;
