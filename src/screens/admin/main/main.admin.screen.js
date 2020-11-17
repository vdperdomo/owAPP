import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Image, FlatList, TouchableHighlight, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faUsers,
    faDumbbell,
    faUtensils,
    faDollarSign,
    faChevronRight,
    faFileInvoiceDollar,
    faBalanceScaleLeft,
    faChild
} from '@fortawesome/free-solid-svg-icons';
import images from '../../../assets/backgrounds/images';

library.add(fab, faUsers, faUtensils, faDumbbell, faDollarSign, faFileInvoiceDollar, faBalanceScaleLeft, faChild)


const MainScreen = ({ navigation }) => {
    let count = 6;
    const [img, setImg] = useState(images[count])


    useEffect(() => {
        const interval = setInterval(() => {
            if (count === 7) count = 0;
            setImg(images[count])
            count++;
        }, 5000)
        return () => clearInterval(interval);
    }, [])


    const renderItem = ({ item }) => (
        <TouchableHighlight
            onPress={ () => navigation.navigate(item.goTo) }
            style={ { marginHorizontal: 10, borderRadius: 4 } }>
            <ItemContainer>
                <FontAwesomeIcon icon={ item.icon } style={ styles.icons } size={ 20 } />
                <Title>{ item.title }</Title>
                <FontAwesomeIcon icon={ faChevronRight } style={ styles.goto } size={ 14 } />
            </ItemContainer>
        </TouchableHighlight>
    );

    return (
        <Container>
            <Image
                source={ img }
                style={ { width: '100%', height: 400 } }
                resizeMode="cover"
            >
            </Image>
            <List>
                <FlatList
                    data={ FirstMenu }
                    renderItem={ renderItem }
                    keyExtractor={ () => Math.random().toString() }
                />
                <FlatList
                    data={ SecondMenu }
                    renderItem={ renderItem }
                    keyExtractor={ () => Math.random().toString() }
                    style={ styles.flatList }
                />
            </List>
        </Container>
    );

};

export default MainScreen;




const Container = styled.View`
	background-color: #000;
	flex: 1; 
`;

const List = styled.View`
    /* margin-top: -300px; */
    position: absolute;
    bottom: 0;
    width: 100%; 
    padding: 5px;
`;

const ItemContainer = styled.View`
	background-color: #111;
    height: 60px;
    border-radius: 4px;
    border-color: #1a1a1a;
    border-width: .5px;
    align-items: center;
    flex-direction: row;
    padding-left: 10px;
`;

const Title = styled.Text`
	color: #fff;
`;

const styles = StyleSheet.create({
    icons: {
        paddingRight: 50,
        color: '#fff'
    },
    goto: {
        color: '#777',
        position: "absolute",
        right: 20
    },
    flatList: {
        paddingTop: 10
    }
})


const FirstMenu = [
    {
        title: 'Alumnos',
        icon: 'users',
        goTo: 'users'
    },
    {
        title: 'Clases',
        icon: 'child',
        goTo: 'main'
    },
    {
        title: 'Rutinas',
        icon: 'dumbbell',
        goTo: 'main'
    },
    {
        title: 'Plan Alimentario',
        icon: 'utensils',
        goTo: 'main'
    },

];

const SecondMenu = [
    {
        title: 'Pagos',
        icon: 'dollar-sign',
        goTo: 'main'
    },
    {
        title: 'Gastos',
        icon: 'file-invoice-dollar',
        goTo: 'main'
    },
    {
        title: 'Balance',
        icon: 'balance-scale-left',
        goTo: 'main'
    },
];