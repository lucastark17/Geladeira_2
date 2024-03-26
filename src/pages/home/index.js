import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {

  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Button title='Comprar' onPress={()=>Navigation.navigate("Produtos")} />
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