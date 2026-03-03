import React from 'react';
import { View, Text } from 'react-native'; 

function App() {
  return(
    <View style={{
      flex: 1, padding:30, backgroundColor: 'white', alignItems: 'center'
    }}>

      <View style={{ backgroundColor: 'blue', flex: 1, padding:30, 
      borderRadius: 5, borderColor: 'orange', borderWidth:3,
      height: 150, width: 250, marginTop: 15
      }}> 

      <Text style={{fontFamily: 'Arial', fontSize: 10, fontWeight: '550', textAlign: 'center'}}>
          A cor azul é uma das três cores primárias no modelo RGB, amplamente associada à calma, tranquilidade, confiança e serenidade. Por ser considerada uma cor fria, evoca paz e estabilidade, sendo muito usada em decoração para ambientes de relaxamento ou trabalho intelectual.
      </Text>
      
      </View>
            <View style={{ backgroundColor: 'orange', flex: 1, padding:30, 
            borderRadius: 5, borderColor: 'red', borderWidth:3,
            height: 150, width: 300, marginTop: 30
      }}> 

      <Text style={{fontFamily: 'Times new roman', fontSize: 15, fontStyle: 'italic', textAlign: 'center' }}>
          Laranja é a cor da saborosa fruta cítrica. É uma cor secundária, resultado da mistura de vermelho e amarelo em partes iguais.
      </Text>

      </View>
            <View style={{ backgroundColor: 'yellow', flex: 1, padding:30, 
            borderRadius: 5, borderColor: 'purple', borderWidth:3,
            height: 150, width: 350, marginTop: 30
      }}> 

      <Text style={{fontFamily: 'Times new roman', fontSize: 20, fontWeight: 700, textAlign: 'center'}}>
          O amarelo é uma cor-pigmento primária e cor-luz secundária, resultado da sobreposição das cores verde e vermelho. É a cor entre verde e laranja no espectro da luz visível.
      </Text>

      </View>

    </View>
  );
}
export default App;