import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';

export default function Cadastro() {
  const Navigation  = useNavigation();
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  return (
    <View style={styles.container}>
    <View style={styles.headerStyle}>
      <Text style={styles.welcomeBack}>Cadastro</Text>
      <Text style={styles.underMessage}>Cadastre-se para aproveitar</Text>
    </View>


    <TextInput style={styles.email}
      placeholder='Nome'
      keyboardType='email-address'
      onChangeText={value => setEmail(value)}
    />

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


    <TouchableOpacity style={styles.Btn} onPress={() => Navigation.navigate("HomeTabs")}>
      <Text style={{ color: '#fff', fontSize: 20 }}>
        Cadastrar
      </Text>
    </TouchableOpacity>

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