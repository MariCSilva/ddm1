import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#17527c',
    },

    imagem: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#e9ff22',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#ffffff',
    },

    texto: {
        fontSize: 16,
        // fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#ffffff',
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },

    botao: {
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
    },
});
export default styles;