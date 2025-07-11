import { View, Modal, StyleSheet, TextInput, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';


const Formulario = ({ modalVisible }) => {
    
    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefonoPropietario, setTelefonoPropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');
    const [sitnomas, setSitnomas] = useState('');
    const [fecha, setFecha] = useState(new Date());

  return (

        <Modal animationType='slide' visible={modalVisible}>
            
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.Header}>
                    Nueva {''}
                    <Text style={styles.BoldHeader}>Cita</Text>
                    </Text>

                    <Pressable style={styles.btnCancel}>
                        <Text style={styles.btnCancelText}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                        style={styles.input}
                        placeholderTextColor={'#666'}
                        placeholder='Nombre Paciente'
                        value={paciente}
                        onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                        style={styles.input}
                        placeholderTextColor={'#666'}
                        placeholder='Nombre Propietario'
                        value={propietario}
                        onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono Propietario</Text>
                        <TextInput
                        style={styles.input}
                        placeholderTextColor={'#666'}
                        placeholder='Telefono Propietario'
                        keyboardType='phone-pad'
                        value={telefonoPropietario}
                        onChangeText={setTelefonoPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                        style={styles.input}
                        placeholderTextColor={'#666'}
                        placeholder='Email Propietario'
                        keyboardType='email-address'
                        value={emailPropietario}
                        onChangeText={setEmailPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput
                        style={[styles.input, styles.inputSintomas]}
                        placeholderTextColor={'#666'}
                        placeholder='Sintomas del Paciente'
                        multiline={true}
                        numberOfLines={4}
                        value={sitnomas}
                        onChangeText={setSitnomas}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        <View style={styles.picker}>
                            <DatePicker date={fecha} onDateChange={ (date) => { date } } locale='es'/>    

                        </View>
                    </View>

                </ScrollView>
            </View>
        </Modal>
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
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 28,
        fontWeight: 600,
    },
    inputSintomas:{
        height: 100,
    },
    picker:{
        backgroundColor: '#374151',
        borderRadius: 10,
        marginBottom: 40
    },
    btnCancel: {

    },
    btnCancelText: {
        
    }
});

export default Formulario