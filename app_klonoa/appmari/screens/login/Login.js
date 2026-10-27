import { View, Text, TextInput, Button, Image, Stylesheet } from 'react-native';

import styles from './Estilo';

export default function Login ({ navigation }) {

    return(

        <View style={styles.container}>



            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/nacional-fortitude/images/5/5f/Klonoa.png/revision/latest/scale-to-width-down/580?cb=20250704233856&path-prefix=pt-br'
                }}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>Klonoa</Text>

            <Text style={styles.label}>Saiba mais sobre Klonoa!!!</Text>

            <Text style={styles.texto}>Veja informações sobre os personagens e sobre os jogos!</Text>

            {/* <TextInput
                nativeID="email"
                placeholder="xxxx@gmail.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            /> */}

            {/* <Text style={styles.label}>Senha</Text>

            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                secureTextEntry={true}
            /> */}

            <View style={styles.botao}>
                <Button
                    title="Saber mais"
                    onPress={() => navigation.navigate('Home')}
                    color="#992bf3"
                />
            </View>
        </View>
    );
}