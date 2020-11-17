import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { Button, Icon, DatePicker } from 'native-base';
import { format } from 'date-fns'
import Exercise from './exercise.component';
import * as http from '../../../utils/httpRequest';

export const routineScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [preloadExercises, setPreloadExercises] = useState([])


    /*     useEffect(() => {
            http.get('/exercises')
                .then(result => {
                    setPreloadExercises(result.data)
                }).catch(err => {
                    console.log(err)
                })
        }, []) */

    const renderItem = ({ item }) => (
        <TouchableHighlight
            style={ { marginHorizontal: 10, borderRadius: 4 } }>
            <ItemContainer style={ { justifyContent: "space-between" } }>
                <Text>{ item.type.name }</Text>
                <View style={ { flexDirection: "row" } }>
                    <Icon style={ { color: "#ccc", fontSize: 18, marginRight: 10 } } type="FontAwesome" name="pencil" />
                    <Icon style={ { color: "#ccc", fontSize: 18 } } type="FontAwesome" name="trash" />
                </View>
            </ItemContainer>
        </TouchableHighlight>
    );


    return (
        <View style={ { backgroundColor: 'black', flex: 1 } }>
            <View style={ { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 } }>
                <View>
                    <Button
                        dark
                        style={ { height: 30, justifyContent: "flex-start" } }
                    >
                        <Icon style={ { color: "#56e097", marginRight: 0, fontSize: 18 } } type="FontAwesome" name="cloud-upload" />
                        <Text>Cargar Rutina</Text>
                    </Button>
                    <Button
                        dark
                        style={ { height: 30, justifyContent: "flex-start" } }
                        onPress={ () => setModalVisible(true) }
                    >
                        <Icon style={ { color: "#1464f6", marginRight: 0, fontSize: 18 } } type="FontAwesome" name="plus-circle" />
                        <Text>Agregar Ejercicio</Text>
                    </Button>
                </View>
                <View style={ { flexDirection: "row" } }>
                    {/*  <View>
                        <Text>Desde</Text>
                        <DatePicker
                            defaultDate={ new Date() }
                            minimumDate={ new Date() }
                            locale={ "es" }
                            timeZoneOffsetInMinutes={ undefined }
                            modalTransparent={ false }
                            animationType={ "fade" }
                            androidMode={ "default" }
                            placeHolderText="Sel. Fecha"
                            textStyle={ { color: "white" } }
                            placeHolderTextStyle={ { color: "#d3d3d3" } }
                        />
                    </View>
                    <View>
                        <Text>Hasta</Text>
                        <DatePicker
                            defaultDate={ new Date() }
                            minimumDate={ new Date() }
                            locale={ "es" }
                            timeZoneOffsetInMinutes={ undefined }
                            modalTransparent={ true }
                            animationType={ "fade" }
                            androidMode={ "default" }
                            placeHolderText="Sel. Fecha"
                            textStyle={ { color: "white" } }
                            placeHolderTextStyle={ { color: "#d3d3d3" } }
                        />
                    </View> */}
                </View>
            </View>
            <FlatList
                data={ exercisesList }
                renderItem={ renderItem }
                keyExtractor={ item => (item.id).toString() }
            />

            <Exercise
                modalVisible={ modalVisible }
                setModalVisible={ setModalVisible }
                exercises={ preloadExercises }
            ></Exercise>
        </View>
    )
}




const ItemContainer = styled.View`
	background-color: #111;
    height: 60px;
    border-radius: 4px;
    border-color: #1a1a1a;
    border-width: .5px;
    align-items: center;
    flex-direction: row;
    padding: 20px;
`;

const Text = styled.Text`
	color: #fff;
    margin-left: 10px;
`;


const exercisesList = [
    {
        id: 1,
        type: {
            id: 1,
            name: 'Sentadillas'
        },
        weight: 50,
        series: 4,
        repeat: 20
    },
    {
        id: 2,
        type: {
            id: 1,
            name: 'Sentadillas'
        },
        weight: 50,
        series: 4,
        repeat: 20
    },
    {
        id: 3,
        type: {
            id: 1,
            name: 'Sentadillas'
        },
        weight: 50,
        series: 4,
        repeat: 20
    },
    {
        id: 4,
        type: {
            id: 1,
            name: 'Sentadillas'
        },
        weight: 50,
        series: 4,
        repeat: 20
    },
    {
        id: 5,
        type: {
            id: 1,
            name: 'Sentadillas'
        },
        weight: 50,
        series: 4,
        repeat: 20
    }
]