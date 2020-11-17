import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { Thumbnail } from 'native-base';
import { format } from 'date-fns'
import { Button } from 'react-native';

export const routinesScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");

    const renderItem = ({ item }) => (
        <TouchableHighlight
            onPress={ () => navigation.navigate('routine', { routine: item }) }
            style={ { marginHorizontal: 10, borderRadius: 4 } }>
            <ItemContainer>
                <Name>{ item.date }</Name>
            </ItemContainer>
        </TouchableHighlight>
    );

    return (
        <View style={ { backgroundColor: 'black', flex: 1 } }>
            <View style={ { flexDirection: "row", justifyContent: "flex-end", marginRight: 10 } }>
                <Button
                    title="Agregar Rutina"
                    color="#1464f6"
                    onPress={ () => navigation.navigate('routine') }
                ></Button>
            </View>
            <Search placeholder="Buscar por fecha" onChangeText={ (e) => setSearch(e) } />
            <FlatList
                data={ routines }
                renderItem={ renderItem }
                keyExtractor={ item => (item.id).toString() }
            />
        </View>
    )
}


const routines = [
    {
        id: 1, date: format(new Date(2020, 10, 5), 'dd/MM/yyyy')
    },
    {
        id: 2, date: format(new Date(2020, 10, 12), 'dd/MM/yyyy')
    },
    {
        id: 3, date: format(new Date(2020, 10, 19), 'dd/MM/yyyy')
    },
    {
        id: 4, date: format(new Date(2020, 10, 26), 'dd/MM/yyyy')
    },
    {
        id: 5, date: format(new Date(2020, 11, 2), 'dd/MM/yyyy')
    }
]




const Search = styled.TextInput`
    margin: 10px;
    padding: 0 20px;
    height: 30px;
    background-color: #555;
    color: white;
    border-radius: 5px;
`;

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

const Name = styled.Text`
	color: #fff;
    margin-left: 10px;
`;
