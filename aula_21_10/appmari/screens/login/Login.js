import { View, Text, TextInput, Button, Image, Stylesheet } from 'react-native';

import styles from './Estilo';

export default fuction Login ({ navigation }) {

    return(

        <View style={styles.container}>



            <Image
                source={{
                    uri: 'https://reactive.dev/docs/assets/p_cat1.pgn'
                }}
                style={styles.imagem}
            />

            <Text style={styles.titulo}>Login</Text>

            <Text style={styles.label}>Digite o e-mail</Text>

            <TextInput
                nativeID="email"
                placeholder="fulano@gmail.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>

            <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                secureTextEntry={true}
            />

            <View style={styles.botao}>
                <Button
                    title="Entrar"
                    onPress={() => navigation.navigate('Home')}
                    color="#007AFF"
                />
            </View>
        </View>
    );
}