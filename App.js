import { View, Text, SafeAreaView, StyleSheet, Pressable, Modal} from 'react-native'
import { useState } from 'react';
import Formulario from './src/components/Formulario';


const App = () => {

  // Hooks
  const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>Administrador de 
        Citas {''}
          <Text style={styles.boldHeader}>Veterinaria</Text>
      </Text>

      <Pressable style={styles.btnNewCita} onPress={ () => setModalVisible(true) }>
        <Text style={styles.textBtnNewCita} >Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  Header: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop:40
  },
  boldHeader: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNewCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,

  },
  textBtnNewCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
})

export default App