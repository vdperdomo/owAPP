import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { Label, Input, Picker, Item } from "native-base";


const Exercise = ({ modalVisible, setModalVisible, exercise }) => {
    const [values, setValues] = useState({
        weight: null,
        series: null,
        exerciseId: null,
        id: null
    })

    return (
        <View style={ styles.centeredView }>
            <Modal
                animationType="fade"
                transparent={ true }
                visible={ modalVisible }
            >
                <View style={ styles.centeredView }>

                    <View style={ styles.modalView }>
                        <Text style={ styles.modalText }>{ (exercise) ? 'Editar' : 'Agregar' } Ejercicio</Text>
                        <View style={ { width: '100%' } }>
                            <View >
                                <Picker
                                    selectedValue={ values.exerciseId }
                                    onValueChange={ (selected) => setValues({ ...values, exerciseId: selected }) }
                                    mode="dropdown"
                                    placeholder="Seleccionar"
                                >
                                    { exercises.map(item => <Picker.Item key={ item.id } label={ item.name } value={ item.id } />) }
                                </Picker>
                            </View>
                            <Item floatingLabel style={ { width: '40%' } }>
                                <Label>Peso</Label>
                                <Input keyboardType='decimal-pad' maxLength={ 3 } /><Text>Kg.</Text>
                            </Item>
                            <View style={ { flexDirection: 'row', justifyContent: "space-between" } }>
                                <Item floatingLabel style={ { width: '40%' } }>
                                    <Label>Series</Label>
                                    <Input keyboardType='decimal-pad' maxLength={ 2 } />
                                </Item>
                                <Item floatingLabel style={ { width: '40%' } }>
                                    <Label>Repeticiones</Label>
                                    <Input keyboardType='decimal-pad' maxLength={ 3 } />
                                </Item>
                            </View>

                        </View>
                        <View style={ { flexDirection: "row", justifyContent: "space-between" } }>
                            <TouchableHighlight
                                style={ { ...styles.openButton, backgroundColor: '#888' } }
                                onPress={ () => {
                                    setModalVisible(false);
                                } }
                            >
                                <Text style={ styles.textStyle }>Cancelar</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={ styles.openButton }
                                onPress={ () => {
                                    setModalVisible(false);
                                } }
                            >
                                <Text style={ styles.textStyle }>Guardar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Exercise;



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "#ddd",
        borderRadius: 3,
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%'
    },
    openButton: {
        backgroundColor: "#2196F3",
        borderRadius: 2,
        marginTop: 20,
        padding: 10,
        width: '45%',
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 25,
        fontSize: 24
    }
});



const exercises = [
    {
        createdAt: "2020-11-16T02:00:04.000Z",
        description: "Press de banca.",
        id: 4,
        name: "Bench Press",
        updatedAt: "2020-11-16T02:00:04.000Z",
        video: "https://www.youtube.com/watch?v=SCVCLChPQFY",
    },
    {
        createdAt: "2020-11-16T02:03:15.000Z",
        description: "Ejercicios breves y de alta intensidad",
        id: 5,
        name: "Burpee",
        updatedAt: "2020-11-16T02:03:15.000Z",
        video: "https://www.youtube.com/watch?v=auBLPXO8Fww",
    },
    {
        createdAt: "2020-11-16T02:17:37.000Z",
        description: "Salto al cajon",
        id: 6,
        name: "Box Jump",
        updatedAt: "2020-11-16T02:17:37.000Z",
        video: "https://www.youtube.com/watch?v=52r_Ul5k03g",
    },
    {
        createdAt: "2020-11-16T02:17:55.000Z",
        description: "Sentadilla trasera con peso detras de la nuca.",
        id: 7,
        name: "Back Squat",
        updatedAt: "2020-11-16T02:17:55.000Z",
        video: "https://www.youtube.com/watch?v=ultWZbUMPL8",
    }
]