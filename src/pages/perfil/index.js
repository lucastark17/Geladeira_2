import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function Perfl() {

  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Perfl</Text>
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
