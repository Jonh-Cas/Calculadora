import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',

    },

    calculadoraConatiner: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
    },

    resultado: {
        
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequenio: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 30,
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D', // #9B9B9B
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
    },

    botonTexto: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    }
});