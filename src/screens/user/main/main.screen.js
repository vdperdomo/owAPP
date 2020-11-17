import React from "react";
import MainItem from "./main-item.component";
import styled from "styled-components/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const MainScreen = (props) => {
    return (

        <Tab.Navigator
            tabBarOptions={ {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                style: { backgroundColor: '#000' },
            } }
        >
            {/* <Tab.Screen name="Clases" component={ Classes } /> */ }
            <Tab.Screen name="Rutinas" component={ Routines } />
            <Tab.Screen name="Alimentación" component={ Nutrition } />
            <Tab.Screen name="Seguimiento" component={ Tracking } />
        </Tab.Navigator>

    );
};



const Classes = () => {
    return (
        <Container>
            <ScrollView>
                <MainItem image={ require('../../../assets/backgrounds/background1.jpeg') } />
            </ScrollView>
        </Container>
    )
}

const Routines = () => {
    return (
        <Container>
            <ScrollView>
                <MainItem image={ require('../../../assets/backgrounds/background1.jpeg') } />
            </ScrollView>
        </Container>
    )
}
const Nutrition = () => {
    return (
        <Container>
            <ScrollView>
                <MainItem image={ require('../../../assets/backgrounds/background1.jpeg') } />
            </ScrollView>
        </Container>
    )
}
const Tracking = () => {
    return (
        <Container>
            <ScrollView>
                <MainItem image={ require('../../../assets/backgrounds/background1.jpeg') } />
            </ScrollView>
        </Container>
    )
}

const Container = styled.View`
	background-color: #000;
	flex: 1;
`;

const ScrollView = styled.ScrollView`
	width: 100%;
`;

export default MainScreen;