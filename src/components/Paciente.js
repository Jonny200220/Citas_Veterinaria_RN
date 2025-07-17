import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const Paciente = ({ item, setModalVisible, handleEditPaciente }) => {

  const { paciente, fecha, id } = item;
  
  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);

    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  };

  return (

    <View style={styles.container}>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.text}>{ paciente }</Text>
      <Text style={styles.date}>{ formatearFecha(fecha) }</Text>

      <View style={styles.buttonContainer} >
        <Pressable style={[styles.button, styles.btnEdit]} 
        onLongPress={() => {
          setModalVisible(true);
          handleEditPaciente(id);
        }} >
          <Text style={styles.btnText} >Editar</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.btnDelete]}>
          <Text style={styles.btnText} >Eliminar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
    
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,

  },
  date: {
    color: '#374151',

  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button:{
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  btnEdit:{
    backgroundColor: '#F59E0B'

  },
  btnDelete:{
    backgroundColor: '#EF4444'
  },
  btnText:{
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#fff'
  }
});

export default Paciente;