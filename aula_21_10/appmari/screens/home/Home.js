import { View, Text, TextInput, Button, Image, Stylesheet } from 'react-native';

import styles from './Estilo';

export default function Login ({ navigation }) {

    return(

        <View style={styles.container}>



            <Image
                source={{
                    uri: 'https://www.flaticon.com/br/icone-gratis/do-utilizador_1077114'
                }}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>Home</Text>

            <Text style={styles.label}>Site mari</Text>

            {/* <TextInput
                nativeID="email"
                placeholder="xxxxx@email.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>

            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                secureTextEntry={true}
            /> */}

            {/* <View style={styles.botao}>
                <Button
                    title="Entrar"
                    onPress={() => navigation.navigate('Home')}
                    color="#007AFF"
                />
            </View> */}
        </View>
    );
}