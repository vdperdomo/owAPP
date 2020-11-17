import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { Thumbnail } from 'native-base';

import * as http from '../../../utils/httpRequest';

export const UsersScreen = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        Promise.all([
            http.get('https://reqres.in/api/users'),
            http.get('https://reqres.in/api/users?page=2')
        ])
            .then((response) => {
                setUsers([...response[0].data.data, ...response[1].data.data])
                setFilteredUsers([...response[0].data.data, ...response[1].data.data])
            })
            .catch(error => console.log('error', error))
        return () => {
        }
    }, [])

    useEffect(() => {
        if (search === '') {
            setFilteredUsers(users);
            return;
        }
        const filtered = users.filter(user => user.first_name.startsWith(search));
        setFilteredUsers(filtered)
    }, [search])


    const renderItem = ({ item }) => (
        <TouchableHighlight
            onPress={ () => navigation.navigate('user', { user: item, title: `${item.first_name} ${item.last_name}` }) }
            style={ { marginHorizontal: 10, borderRadius: 4 } }>
            <ItemContainer>
                <Thumbnail source={ { uri: `${item.avatar}` } } small />
                <Name>{ `${item.first_name} ${item.last_name}` }</Name>
            </ItemContainer>
        </TouchableHighlight>
    );


    return (
        <View style={ { backgroundColor: 'black', flex: 1 } }>
            <Search placeholder="Buscar por nombre" onChangeText={ (e) => setSearch(e) } />
            <FlatList
                data={ filteredUsers }
                renderItem={ renderItem }
                keyExtractor={ () => Math.random().toString() }
            />
        </View>
    )
}


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
