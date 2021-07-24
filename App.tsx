import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo} >
      <StatusBar backgroundColor='#000'
                 barStyle='light-content' />
      <CalculadoraScreen />


    </SafeAreaView>
  )
}

export default App;


