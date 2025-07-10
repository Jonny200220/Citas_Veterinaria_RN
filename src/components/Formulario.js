import { View, Modal, StyleSheet, TextInput, Text } from 'react-native';
import React from 'react';

const Formulario = ({ modalVisible }) => {
    
  return (
    <View>
        <Modal animationType='slide' visible={modalVisible}>
            <View style={styles.container}>
                <Text style={styles.Header}>
                Nueva {''}
                <Text style={styles.BoldHeader}>Cita</Text>
                </Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente</Text>
                    <TextInput
                    style={styles.input}
                    placeholderTextColor={'#666'}
                    placeholder='Nombre Paciente'
                    />
                </View>
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D28D9',
        flex: 1,

    },
    Header: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    BoldHeader:{
        fontWeight: 900,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 28,
        fontWeight: 600,
    },
    campo: {
        marginTop: 40,
        marginHorizontal: 30,
    },
})

export default Formulario