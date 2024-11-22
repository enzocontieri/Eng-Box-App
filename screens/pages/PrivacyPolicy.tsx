import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export default function PrivacyPolicy() {
    return (
        <ScrollView className='bg-[#F4F7F6]'>
            <View className='flex-1 items-center mt-10 mb-20 p-5'>

                <Text
                    style={{ fontFamily: 'poppins-semi-bold' }}
                    className="text-[#1F3B4D] mb-5 font-bold text-3xl shadow-sm text-center mt-5 ml-1"
                >
                    Política de Privacidade
                </Text>

           
                <View className='bg-white shadow-lg rounded-xl p-5 w-full mb-5'>
                    <View className='flex-row items-center mb-3'>
                        <FontAwesome name="info-circle" size={24} color="#1F3B4D" />
                        <Text
                            style={{ fontFamily: 'poppins-semi-bold' }}
                            className="text-[#1F3B4D] text-xl font-bold ml-2"
                        >
                            Informações que Coletamos
                        </Text>
                    </View>
                    <Text className='text-[#455A64] font-medium text-base'>
                        O Eng Box App pode coletar as seguintes informações dos usuários:
                        {"\n\n"}• <Text className='text-[#1F3B4D] font-bold'>Informações de Identificação Pessoal</Text>: Nome, endereço de e-mail, e outras informações que você fornece ao registrar-se no app.
                        {"\n\n"}• <Text className='text-[#1F3B4D] font-bold'>Informações de Uso</Text>: Dados sobre o uso do app, como páginas visitadas, funcionalidades acessadas e configurações ajustadas.
                        {"\n\n"}• <Text className='text-[#1F3B4D] font-bold'>Informações Técnicas</Text>: Tipo de dispositivo, sistema operacional, e identificadores exclusivos (como IDs de dispositivo) para melhorar a experiência e solucionar problemas técnicos.
                    </Text>
                </View>

                
                <View className='bg-white shadow-lg rounded-xl p-5 w-full mb-5'>
                    <View className='flex-row items-center mb-3'>
                        <FontAwesome name="cogs" size={24} color="#1F3B4D" />
                        <Text
                            style={{ fontFamily: 'poppins-semi-bold' }}
                            className="text-[#1F3B4D] text-xl font-bold ml-2"
                        >
                            Como Usamos Suas Informações
                        </Text>
                    </View>
                    <Text className='text-[#455A64] font-medium text-base'>
                        Utilizamos as informações coletadas para:
                        {"\n\n"}• Melhorar e personalizar a experiência dos usuários no app;
                        {"\n\n"}• Gerenciar o acesso às funcionalidades do app;
                        {"\n\n"}• Resolver problemas técnicos e monitorar o desempenho do app.
                    </Text>
                </View>

               
                <View className='bg-white shadow-lg rounded-xl p-5 w-full mb-5'>
                    <View className='flex-row items-center mb-3'>
                        <FontAwesome name="share-alt" size={24} color="#1F3B4D" />
                        <Text
                            style={{ fontFamily: 'poppins-semi-bold' }}
                            className="text-[#1F3B4D] text-xl font-bold ml-2"
                        >
                            Compartilhamento de Informações
                        </Text>
                    </View>
                    <Text className='text-[#455A64] font-medium text-base'>
                        Não compartilhamos, vendemos ou alugamos suas informações pessoais para terceiros, exceto nos seguintes casos:
                        {"\n\n"}• <Text className='text-[#1F3B4D] font-bold'>Conformidade Legal</Text>: Podemos compartilhar informações para cumprir com uma obrigação legal, ordem judicial ou outro processo judicial;
                        {"\n\n"}• <Text className='text-[#1F3B4D] font-bold'>Proteção de Direitos</Text>: Podemos divulgar informações para proteger nossos direitos ou a segurança de nossos usuários;
                        {"\n\n"}• <Text className='text-[#1F3B4D] font-bold'>Serviços Terceirizados</Text>: Compartilhamos informações com provedores de serviços de terceiros que nos ajudam a operar o app.
                    </Text>
                </View>

               
                <View className='bg-white shadow-lg rounded-xl p-5 w-full mb-5'>
                    <View className='flex-row items-center mb-3'>
                        <FontAwesome name="lock" size={24} color="#1F3B4D" />
                        <Text
                            style={{ fontFamily: 'poppins-semi-bold' }}
                            className="text-[#1F3B4D] text-xl font-bold ml-2"
                        >
                            Segurança das Informações
                        </Text>
                    </View>
                    <Text className='text-[#455A64] font-medium text-base'>
                        Adotamos medidas razoáveis para proteger suas informações contra acesso, uso ou divulgação não autorizados.
                        {"\n\n"}<Text className='text-[#1F3B4D] font-bold'>Seus direitos</Text>:
                        {"\n\n"}• Acessar suas informações pessoais mantidas por nós;
                        {"\n\n"}• Solicitar Correções de informações incorretas ou incompletas;
                        {"\n\n"}• Solicitar a Exclusão de suas informações pessoais, salvo em casos em que a retenção é exigida por lei.
                    </Text>
                </View>

                
                <View className='bg-white shadow-lg rounded-xl p-5 w-full'>
                    <View className='flex-row items-center mb-3'>
                        <FontAwesome name="file-text" size={24} color="#1F3B4D" />
                        <Text
                            style={{ fontFamily: 'poppins-semi-bold' }}
                            className="text-[#1F3B4D] text-xl font-bold ml-2"
                        >
                            Alterações na Política
                        </Text>
                    </View>
                    <Text className='text-[#455A64] font-medium text-base'>
                    •Podemos atualizar esta Política de Privacidade de tempos em tempos. 
                    {"\n\n"} •Recomendamos que revise periodicamente esta página para estar ciente de quaisquer alterações.
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}
