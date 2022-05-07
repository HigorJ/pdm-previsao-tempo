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
  API_PROTOCOL,
  API_BASE_URL,
  API_UNITS,
  API_CNT,
  API_LANGUAGE,
  API_APPID
} from '@env';

export default function App() {
  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);

  const obterPrevisoes = () => {
    const url = encodeURI(`${API_PROTOCOL}://${API_BASE_URL}?units=${API_UNITS}&cnt=${API_CNT}&lang=${API_LANGUAGE}&appid=${API_APPID}&q=${cidade}`);
    console.log(url);
  }

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
          onPress={obterPrevisoes}
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
