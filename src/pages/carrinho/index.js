import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Carrinho() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <Button title='Comprar' onPress={() => Navigation.navigate("Checkout")} />
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