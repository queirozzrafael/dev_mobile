import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

function App() {
  const textoCabecalho = "Bem-vindo, Josefino. \n\
  ";

  const titulo1 = "Navegar";
  const titulo2 = "Cursos";
  
  const textoParagrafo = "Lorem ipsum dolor sit amet, \n\
consectetuer adipiscing elit, sed \n\
diam nonummy nibh.";

 
  const corFundoAzul = "#4176e1";     
  const corFundoCinzaClaro = "#F5F5F5"; 
  const corTextoBranco = "#FFFFFF";
  const corTextoAzul = "#4191e1"; 
  const corTextoCinza = "#666666";
  
  const corCat1 = "#4191e1"; 
  const corCat2 = "#4184e1"; 
  const corCat3 = "#4176e1"; 
  
  const corFundoBarra = "#E0E0E0"; 
  const corBarra = "#6d8ce8";

  const tamFonteCabecalho = 15;
  const tamFonteTitulos = 20; 
  const tamFonteTexto = 13;
  const alturaDaBarra = 14; 
  const arredondamentoCaixas = 20; 

  return (
    <View style={{ flex: 1, backgroundColor: corFundoCinzaClaro }}>
      
      <View style={{backgroundColor: corFundoAzul, paddingTop: 60, paddingBottom: 35, paddingLeft: 20, paddingRight: 20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <Text style={{ color: corTextoBranco, fontSize: tamFonteCabecalho, textAlign: 'left' }}>
          {textoCabecalho}
        </Text>
        <Image 
          source={{ uri: 'https://img.icons8.com/m_rounded/512w/FFFFFF/bell--v2.png' }} 
          style={{ width: 28, height: 28, tintColor: corTextoBranco }} 
        />
      </View>

      <View style={{ padding: 25 }}>
        

        <Text style={{ color: corTextoAzul, fontSize: tamFonteTitulos, fontWeight: '900', marginBottom: 15 }}>
          {titulo1}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 35 }}>
           <View style={{ width: 75, height: 75, backgroundColor: corCat1, borderRadius: arredondamentoCaixas }} />
           <View style={{ width: 75, height: 75, backgroundColor: corCat2, borderRadius: arredondamentoCaixas }} />
           <View style={{ width: 75, height: 75, backgroundColor: corCat3, borderRadius: arredondamentoCaixas }} />
        </View>

        <Text style={{ color: corTextoAzul, fontSize: tamFonteTitulos, fontWeight: '900', marginBottom: 15 }}>
          {titulo2}
        </Text>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ width: 100, height: 70, backgroundColor: '#D1C4E9', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/181/181569.png' }} 
              style={{ width: 40, height: 40 }} 
            />
          </View>
          <Text style={{ color: corTextoCinza, fontSize: tamFonteTexto, marginLeft: 15, flex: 1 }}>
            {textoParagrafo}
          </Text>
        </View>

        <View style={{ height: alturaDaBarra, backgroundColor: corFundoBarra, borderRadius: 10, marginBottom: 25 }}>
          <View style={{ width: '85%', height: alturaDaBarra, backgroundColor: corBarra, borderRadius: 10 }} />
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ width: 100, height: 70, backgroundColor: '#D1C4E9', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/181/181569.png' }} 
              style={{ width: 40, height: 40 }} 
            />
          </View>
          <Text style={{ color: corTextoCinza, fontSize: tamFonteTexto, marginLeft: 15, flex: 1 }}>
            {textoParagrafo}
          </Text>
        </View>

        <View style={{ height: alturaDaBarra, backgroundColor: corFundoBarra, borderRadius: 10, marginBottom: 25 }}>
          <View style={{ width: '45%', height: alturaDaBarra, backgroundColor: corBarra, borderRadius: 10 }} />
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ width: 100, height: 70, backgroundColor: '#D1C4E9', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/181/181569.png' }} 
              style={{ width: 40, height: 40 }} 
            />
          </View>
          <Text style={{ color: corTextoCinza, fontSize: tamFonteTexto, marginLeft: 15, flex: 1 }}>
            {textoParagrafo}
          </Text>
        </View>

      </View>
    </View>
  );
}
export default App;