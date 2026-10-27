import { View, Text, TextInput, Button, Image, Stylesheet } from 'react-native';

import styles from './Estilo';

export default function Login ({ navigation }) {

    return(

        <View style={styles.container}>            

            <Text style={styles.titulo}>Jogos</Text>

            <Text style={styles.label}>Klonoa: Door to Phantomile</Text>

            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/klonoa/images/7/75/Klonoa_front.png/revision/latest?cb=20200512013217'
                }}
                style={styles.imagem}
            />

            <Text style={styles.texto}>Jogo eletrônico produzido pela Namco estrelando Klonoa para PlayStation e Wii. A história se passa em Phantomile. Um gato chamado Klonoa descobre um anel na floresta e liberta Huepow que ajuda Klonoa e leva esse anel para casa.</Text>


            <Text style={styles.label}>Klonoa 2: Lunatea's Veil</Text>

            <Image
                source={{
                    uri: 'https://i.scdn.co/image/ab67616d0000b273845af1b80e5f16ad12a96904'
                }}
                style={styles.imagem}
            />

            <Text style={styles.texto}>Video game da Namco para PlayStation 2 lançado em 2000. Nele, Klonoa e seus novos amigos se envolvem em uma nova jornada para salvar Lunatea e desvendar os segredos do mundo encantado. Há dezenas de áreas neste jogo.</Text>

            <View style={styles.botao}>
                <Button
                    title="Voltar"
                    onPress={() => navigation.navigate('Home')}
                    color="#992bf3"
                />
            </View>

        </View>
    );
}