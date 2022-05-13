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

import PrevisaoItem from './components/previsaoItem';

export default function App() {
  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);

  const obterPrevisoes = () => {
    const url = encodeURI(`${API_PROTOCOL}://${API_BASE_URL}?units=${API_UNITS}&cnt=${API_CNT}&lang=${API_LANGUAGE}&appid=${API_APPID}&q=${cidade}`);
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(dados => setPrevisoes(dados['list']))
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

      <View style={{ alignItems: 'center' }}>
        <FlatList 
          data={previsoes}
          renderItem={
            p => (
              <PrevisaoItem previsao={p.item} />
            )
          }
        />
      </View>
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
