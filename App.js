import { useState } from 'react';
import { 
  Button,
  FlatList, 
  StyleSheet, 
  Text,
  TextInput,
  View 
} from 'react-native';

import { 
  API_LANGUAGE
} from '@env';

export default function App() {
  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.cidadeView}>
        <TextInput
          style={styles.cidadeTextInput}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={setCidade}
        />        
        <Button 
          title="OK"
        />
      </View>

      <FlatList 
        data={previsoes}
        renderItem={
          p => (
            <Text>{JSON.stringify(p)}</Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  cidadeView: {
    padding: 12,
    marginBottom: 8
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800',
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center',
  }
});
