import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {

  const Navigation = useNavigation();
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.welcomeBack}>Bem vindo de volta</Text>
        <Text style={styles.underMessage}>Faça login para continuar</Text>
      </View>

      <TextInput style={styles.email}
        placeholder='E-mail'
        keyboardType='email-address'
        onChangeText={value => setEmail(value)}
      />

      <TextInput style={styles.senha}
        placeholder='Senha'
        secureTextEntry={true}
        onChangeText={value => setSenha(value)}
      />


      <Text style={styles.text}>
        Esqueceu a senha?
        {' '}
        <TouchableOpacity onPress={() => Navigation.navigate("Rec Senha")}>
          <Text style={styles.link}>Recuperar senha</Text>
        </TouchableOpacity>
      </Text>

      <TouchableOpacity style={styles.Btn} onPress={() => Navigation.navigate("HomeTabs")}>
        <Text style={{ color: '#fff', fontSize: 20 }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Não tem uma conta?
        {' '}
        <TouchableOpacity onPress={() => Navigation.navigate("Cadastro")}>
          <Text style={styles.link}>Cadastre-se aqui</Text>
        </TouchableOpacity>
      </Text>
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
