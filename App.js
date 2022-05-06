import { StyleSheet, Text, View } from 'react-native';
import { 
  API_LANGUAGE
} from '@env';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{API_LANGUAGE}</Text>
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
