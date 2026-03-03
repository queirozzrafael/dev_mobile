import React from 'react';
import { View, Text } from 'react-native'; 

function App(){
  return(
    <View style={{
      flex: 1, padding:30, backgroundColor: 'gray',
    }}>
      <Text style={{
        backgroundColor: 'black', color: 'red', fontSize: 30,
        textAlign: 'center', marginBottom: 30, fontFamily: 'Bernard MT Condensed'
      }}>
        Jesus Chorou
        </Text>
        <Text style={{ fontSize: 30, fontFamily: 'Arial', fontWeight: 'Bold'}}>
          <Text>O que é, o que é? {'\n'}Clara e salgada,{'\n'}</Text>
          <Text>Cabe em um olho e pesa uma tonelada{'\n'}</Text>
          <Text>Tem sabor de mar,{'\n'}</Text>
          <Text>Pode ser discreta{'\n'}</Text>
          <Text>Inquilina da dor,{'\n'}</Text>
          <Text style={{color:'white'}}>Morada predileta{'\n'}</Text>
          <Text>Na calada ela vem,{'\n'}</Text>
          <Text>Refém da vingança,{'\n'}</Text>
          <Text>Irmã do desespero,{'\n'}</Text>
          <Text>Rival da esperança{'\n'}</Text>
        </Text>
              <Text style={{
        backgroundColor: 'black', color: 'red', fontSize: 30,
        textAlign: 'center', marginTop: 30, fontFamily: 'Bernard MT Condensed'
      }}>
        - Racionais MC's, 2002
        </Text>
    </View>
  );
}

export default App;