import { View, Modal, StyleSheet, TextInput, Text, ScrollView, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';

                                                                                // se renombra el paciente para evitar confusiones
                                                                                // pacienteObj es el paciente que se está editando
const Formulario = ({ modalVisible, setModalVisible, setPacientes, pacientes, paciente: pacienteObj }) => {
    
    
    const [paciente, setPaciente] = useState('');
    const [id, setId] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState(new Date());

    useEffect( () => {
        // Si pacienteObj tiene datos, significa que se está editando un paciente
        // se asignan los valores del paciente a los estados
        if(Object.keys(pacienteObj).length > 0){
        setId(pacienteObj.id);
        setPaciente(pacienteObj.paciente);
        setPropietario(pacienteObj.propietario);
        setTelefono(pacienteObj.telefono);
        setEmail(pacienteObj.email);
        setSintomas(pacienteObj.sintomas);
        setFecha(new Date(pacienteObj.fecha));
       }
    }, []);

    const handleCita = () => {
        // Validar con .inlcudes(recorre todos los elementos y revisa que cumplan la condicion())
        if( [paciente, propietario, telefono, email, sintomas, fecha].includes('') ){
            
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios.',
                [{text: 'Ok'}]
            );
            return;
        };

        // Revisar si es un registro nuevo o una edición

        /*
            La variable id es un identificador único para cada cita
            Se puede usar Date.now() para obtener un timestamp único
            o usar un contador que se incremente con cada nueva cita
        */
       const nuevoPaciente = {
        id: Date.now(),
        paciente,
        propietario,
        telefono,
        email,
        sintomas,
        fecha
        };

        if(id){
            // Editando
            nuevoPaciente.id = id;
            const pacientesActualizados = pacientes.map( pacienteState => 
                pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState );
            setPacientes(pacientesActualizados);
                
        }else{
            nuevoPaciente.id = Date.now();
            setPacientes([...pacientes, nuevoPaciente]);
        }

        // Toma una copia del array de pacientes y agrega el nuevo paciente
        // setPacientes([...pacientes, nuevoPaciente]);
        
        setModalVisible(!modalVisible);
        // Reiniciar el formulario
        setPaciente('');
        setPropietario('');
        setTelefono('');
        setEmail('');
        setSintomas('');
        setFecha(new Date());
    }

  return (

        <Modal animationType='slide' visible={modalVisible} >
            
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.Header}>
                    Nueva {''}
                    <Text style={styles.BoldHeader}>Cita</Text>
                    </Text>

                    <Pressable style={styles.btnCancel} onPressOut={ () => setModalVisible(false) }>
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
                        value={telefono}
                        onChangeText={setTelefono}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                        style={styles.input}
                        placeholderTextColor={'#666'}
                        placeholder='Email Propietario'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        <View style={styles.picker}>
                            <DatePicker date={fecha} locale='es' onDateChange={ (date) => setFecha(date) }/>    
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput
                        style={[styles.input, styles.inputSintomas]}
                        placeholderTextColor={'#666'}
                        multiline={true}
                        numberOfLines={3}
                        value={sintomas}
                        onChangeText={setSintomas}
                        />
                    </View>

                    <Pressable style={styles.btnAdd} onPress={handleCita}>
                        <Text style={styles.btnAddText}>Agregar Paciente</Text>
                    </Pressable>

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
        padding: 15 ,
        borderRadius: 10,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: 600,
    },
    inputSintomas:{
        height: 100,
    },
    picker:{
        backgroundColor: '#666',
        borderRadius: 10,
        marginBottom: 10,
    },
    btnCancel: {
        marginVertical: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    btnCancelText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 16,
        textTransform: 'uppercase',
    },
    btnAdd:{
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnAddText:{
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    }
});

export default Formulario