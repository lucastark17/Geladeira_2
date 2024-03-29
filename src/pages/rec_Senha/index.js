import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {

  const Navigation = useNavigation();
  const [senhaTrocada, setSenhaTrocada] = useState(null)
  const [senhaConfirmada, setSenhaConfirmada] = useState(null)
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.welcomeBack}>Recuperação de Senha</Text>
        <Text style={styles.underMessage}>Cadastre uma nova senha</Text>
      </View>

      <TextInput style={styles.email}
        placeholder='Nova senha'
        secureTextEntry={true}
        onChangeText={value => setEmail(value)}
      />

      <TextInput style={styles.senha}
        placeholder='Confirme a senha'
        secureTextEntry={true}
        onChangeText={value => setSenha(value)}
      />

      <TouchableOpacity style={styles.Btn} onPress={() => Navigation.navigate("Login")}>
        <Text style={{ color: '#fff', fontSize: 20 }}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    marginBottom: 50,
    alignItems: 'center',

  },
  welcomeBack: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  underMessage: {
    fontSize: 15,
  },
  email: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    height: 50,
    width: 300,
    marginBottom: 15
  },
  senha: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    height: 50,
    width: 300,
    marginBottom:5
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  Btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderWidth: 5,
    height: 50,
    width: 300,
    marginTop: 30,
    borderRadius: 10,
    marginBottom:5
  }
});
