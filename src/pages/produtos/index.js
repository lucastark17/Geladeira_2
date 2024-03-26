import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Produtos() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
      <Button title='Comprar' onPress={()=>Navigation.navigate("Carrinho")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});