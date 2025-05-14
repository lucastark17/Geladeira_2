import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import Card_Prod from '../../componentes/card_produtos';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = [
    {
        descriacao: "Pepsi 300ml",
        Id: 1,
        preco: "10,00",
        src: require('../../../assets/imagens/refri.png'),
    },
    {
        descriacao: "Suco de laranja ",
        Id: 2,
        preco: "02,55",
        src: require('../../../assets/imagens/suco.png'),
    },
    {
        descriacao: "Suco de uva ",
        Id: 3,
        preco: "15,55",
        src: require('../../../assets/imagens/refri.png'),
    },
    {
        descriacao: "Suco de laranja",
        Id: 4,
        preco: "11,74",
        src: require('../../../assets/imagens/suco.png'),
    },
    {
        descriacao: "Suco de laranja",
        Id: 4,
        preco: "09,99",
        src: require('../../../assets/imagens/refri.png'),
    },

];

export default function Home() {

    const Navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}
            edges={['top', 'left',]}
        >
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 30, marginVertical: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }} >
                        selecione os Produtos
                    </Text>
                </View>


                <View style={{ height: 200, marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 15, fontSize: 15 }}>
                        Sucos e refrigerantes
                    </Text>
                    <FlashList
                        contentContainerStyle={{
                            backgroundColor: '#fff'
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        estimatedItemSize={200}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{
                                marginEnd: 10
                            }}
                                onPress={() => Navigation.navigate("Produtos")}
                            >
                                <Card_Prod
                                    preco={item.preco}
                                    descriacao={item.descriacao}
                                    imgSrc={item.src}
                                />
                            </TouchableOpacity>
                        )}
                    />

                </View>

                <View style={{ height: 200, marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 15, fontSize: 15 }}>
                        Cervejas e destilados
                    </Text>
                    <FlashList
                        contentContainerStyle={{
                            backgroundColor: '#fff'
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        estimatedItemSize={200}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{
                                marginEnd: 10
                            }}
                                onPress={() => Navigation.navigate("Produtos")}
                            >
                                <Card_Prod
                                    preco={item.preco}
                                    descriacao={item.descriacao}
                                    imgSrc={item.src}
                                />
                            </TouchableOpacity>
                        )}
                    />

                </View>

                <View style={{ height: 200, marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 15, fontSize: 15 }}>
                        Cervejas e destilados
                    </Text>
                    <FlashList
                        contentContainerStyle={{
                            backgroundColor: '#fff'
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        estimatedItemSize={200}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{
                                marginEnd: 10
                            }}
                                onPress={() => Navigation.navigate("Produtos")}
                            >
                                <Card_Prod
                                    preco={item.preco}
                                    descriacao={item.descriacao}
                                    imgSrc={item.src}
                                />
                            </TouchableOpacity>
                        )}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingStart: 15
    },
});