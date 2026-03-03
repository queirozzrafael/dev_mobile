import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#484D50', margin: 10 }}>
      <View style={{
        alignItems: 'center', backgroundColor: '#484D50',
        flexDirection: 'column', paddingVertical: 20
      }}>
        <Text style={{ fontSize: 30, color: "white", marginBottom: 20 }}>Eventos históricos</Text>
        <Image
          source={require('./img/historia.png')}
          style={{ width: 90, height: 65, borderColor: 'white', borderWidth: 3 }}
        />
      </View>
      <View style={{
        alignItems: 'center', backgroundColor: '#654321',
        flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10,
        justifyContent: "space-around"
      }}>
        <Text style={{
          fontSize: 20, color: "white", marginBottom: 20, width: '60%',
          textAlign: "justify"
        }}>
          Esse é venom pronto para acertar um balasso num meliante</Text>
        <Image
          source={require('./img/img1.png')}
          style={{ width: 100, height: 100, borderColor: 'white', borderWidth: 5, borderRadius: 50 }}
        />
      </View>
      <View style={{
        alignItems: 'center', backgroundColor: '#484D50',
        flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10,
        justifyContent: "space-around"
      }}>
        <Image
          source={require('./img/img2.png')}
          style={{
            width: 100, height: 100, borderColor: 'white', borderWidth: 2, borderTopLeftRadius: 50,
            marginHorizontal: 20
          }}
        />
        <Text style={{
          fontSize: 15, color: "white", marginBottom: 20, width: '70%',
          textAlign: "justify"
        }}>
          - Lutou na segunda guerra mundial {'\n'}
          - Jogou a copa do mundo de 94 pela macedônia do norte{'\n'}
          </Text>
      </View>
  <View style={{ width: '100%', position: 'absolute',
    bottom: 15, alignItems: 'center', backgroundColor: 'white', padding: 20
    }}>
    <Image source={{ uri: 'https://cdn.gazetasp.com.br/img/social/1200/1200/dn_arquivo/2025/04/novo-projeto-2025-04-22t145259341.jpg' }} 
    style={{ width: 200, height: 100 }}/>
  <View style={{ flexDirection: 'row' }}>
    <Text> Vencedor do nobel da paz 2k26 </Text>
  </View>
</View>
</View>
  );
}
export default App;