import { Image } from 'expo-image';
import { StyleSheet, View, Text} from 'react-native';

export default function Card_Prod({ preco, descriacao, imgSrc }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={{
                        height: 75,
                        width: 30
                    }}
                    source={imgSrc}
                />
            </View>
            <View style={styles.infos} >
                <Text style={styles.preco} >
                    R${preco}
                </Text>
                <Text style={styles.nomeProd}>
                    {descriacao}
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginEnd: 10
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        borderWidth:1,
        borderColor:'#afb5ae',
        justifyContent:'center',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    infos: {
        marginTop: 10,
        alignItems: 'flex-start',
    },
    preco: {
        color: '#2ec40e',
        fontSize:20,
        fontWeight: 'bold',

    },
    nomeProd: {
        fontSize: 12
    }
});