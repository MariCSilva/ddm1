import { View, Text, TextInput, Button, Image, Stylesheet } from 'react-native';

import styles from './Estilo';

export default function Login ({ navigation }) {

    return(

        <View style={styles.container}>            

            <Text style={styles.titulo}>Home</Text>

            <Text style={styles.label}>Leia sobre os jogos</Text>

            <Image
                source={{
                    uri: 'https://gamehall.com.br/wp-content/uploads/2022/07/klonoa_capa.jpg'
                }}
                style={styles.imagem}
            />

            {/* <Text style={styles.texto}>Veja informações sobre os personagens, sobre os jogos e um quiz!</Text> */}

            <View style={styles.botao}>
                <Button
                    title="Jogos"
                    onPress={() => navigation.navigate('Jogos')}
                    color="#992bf3"
                />
            </View>

            <Text style={styles.label}>Conheça os presonagens</Text>

            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSGjrbHWzc5FEsiVp5J_dcefGiG3nHU2U-Dp-0ZpAlkex3xx8o143tBaF&s=10'
                }}
                style={styles.imagem}
            />

            {/* <Text style={styles.texto}>Veja informações sobre os personagens, sobre os jogos e um quiz!</Text> */}

            <View style={styles.botao}>
                <Button
                    title="Personagens"
                    onPress={() => navigation.navigate('Personagens')}
                    color="#992bf3"
                />
            </View>

        </View>
    );
}