import { Link, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login() {

  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <Button title='cadastro' onPress={()=>Navigation.navigate("Cadastro")}/>
      <Button title='Home' onPress={()=>Navigation.navigate("HomeTabs")}/>
      <Button title='Recuperar Senha' onPress={()=>Navigation.navigate("Rec Senha")}/>
        
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
