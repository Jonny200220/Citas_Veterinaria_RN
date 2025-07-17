import { View, Text, SafeAreaView, StyleSheet, Pressable, Modal, FlatList} from 'react-native'
import { useState } from 'react';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {

  // Hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Funciones
  const handleEditPaciente = (id) => {
    /**
     * Lo que hace exactamente esta función es filtrar el array de pacientes
     * y obtener el paciente que se quiere editar para luego
     * mostrarlo en el formulario de edición.
     */
    const pacienteEditar = pacientes.filter( paciente => paciente.id === id );
    setPaciente(pacienteEditar[0]);
    
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>Administrador de 
        Citas {''}
          <Text style={styles.boldHeader}>Veterinaria</Text>
      </Text>

      <Pressable style={styles.btnNewCita} onPress={ () => setModalVisible(true) }>
        <Text style={styles.textBtnNewCita} >Nueva Cita</Text>
      </Pressable>
      {pacientes.length === 0 ? 
      <Text style={styles.noPacientes}>No hay Pacientes Aún</Text> : 
      /* FlatList esta optimizada para listas largas 
         ya que solo renderiza los elementos visibles en pantalla
         y no todos los elementos del array de pacientes.
      */
      <FlatList
      style={{marginTop: 50, marginHorizontal: 50}}
      data={pacientes}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>{
        return(
          // Aquí se renderiza el componente Paciente
          <Paciente
          item={item}
          setModalVisible={setModalVisible}
          handleEditPaciente ={handleEditPaciente}
          />

        )
        
      }}
      />}
      <Formulario 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible} 
      setPacientes={setPacientes}
      pacientes={pacientes}
      paciente={paciente}
      />

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
  },
  noPacientes: {
    textAlign: 'center',
    marginVertical: 40,
    fontSize: 25,
    fontWeight: '600',
  }

})

export default App