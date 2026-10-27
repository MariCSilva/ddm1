import { View, Text, TextInput, Button, Image, Stylesheet } from 'react-native';

import styles from './Estilo';

export default function Login ({ navigation }) {

    return(

        <View style={styles.container}>            

            <Text style={styles.titulo}>Personagens</Text>

            <Text style={styles.label}>Klonoa</Text>

            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/omniversal-battlefield/images/f/f4/Klonoa2.webp/revision/latest?cb=20250318005830'
                }}
                style={styles.imagem}
            />

            {/* <Text style={styles.texto}>Jogo eletrônico produzido pela Namco estrelando Klonoa para PlayStation e Wii. A história se passa em Phantomile. Um gato chamado Klonoa descobre um anel na floresta e liberta Huepow que ajuda Klonoa e leva esse anel para casa.</Text> */}


            <Text style={styles.label}>Lolo</Text>

            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/klonoa/images/4/48/KlonoaPhantasy_LoloModel-1.jpg/revision/latest/scale-to-width-down/250?cb=20220307225516'
                }}
                style={styles.imagem}
            />

            {/* <Text style={styles.texto}>Video game da Namco para PlayStation 2 lançado em 2000. Nele, Klonoa e seus novos amigos se envolvem em uma nova jornada para salvar Lunatea e desvendar os segredos do mundo encantado. Há dezenas de áreas neste jogo.</Text> */}

            <Text style={styles.label}>Guntz</Text>

            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/klonoa/images/4/4f/Fix_nm_gt.jpg/revision/latest?cb=20090113211841'
                }}
                style={styles.imagem}
            />

            <Text style={styles.label}>Leorina</Text>

            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25rkeRgosCtaviE6fupzL9qXUR1p16Lhmg_bQaTgUkw&s=10'
                }}
                style={styles.imagem}
            />

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