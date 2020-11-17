import React from 'react'
import { View, Image, Button } from 'react-native'
import { Thumbnail } from 'native-base'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faBirthdayCake, faUser, faAt
} from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns'


export const userScreen = ({ route, navigation }) => {
    const { user } = route.params;

    return (
        <View style={ { backgroundColor: 'black', flex: 1 } }>
            <View style={ { flex: 1, flexDirection: "row", marginTop: 20 } }>
                <View style={ { flex: 3, alignItems: "flex-end", justifyContent: "center" } }>
                    <Thumbnail source={ { uri: `${user.avatar}` } } style={ { width: 100, height: 100, borderRadius: 50 } }></Thumbnail>
                </View>
                <View style={ { flex: 5, paddingLeft: 30, justifyContent: "center" } }>
                    <Info>
                        <FontAwesomeIcon icon={ faUser } style={ { color: '#ccc' } } />
                        <InfoText>{ user.genre || 'Hombre' }</InfoText>
                    </Info>
                    <Info>
                        <FontAwesomeIcon icon={ faBirthdayCake } style={ { color: '#ccc' } } />
                        <InfoText>{ user.birthday || format(new Date(1985, 1, 11), 'MM/dd/yyyy') }</InfoText>
                    </Info>
                    <Info>
                        <FontAwesomeIcon icon={ faAt } style={ { color: '#ccc' } } />
                        <InfoText>{ `${user.email}` }</InfoText>
                    </Info>
                </View>
            </View>
            <View style={ { flex: 1, width: '90%', alignSelf: "center", justifyContent: "space-around", paddingTop: 20 } }>
                <Button
                    title="Ver Rutinas"
                    color="#56e097"
                    onPress={ () => navigation.navigate('routines') }
                ></Button>
                <Button
                    title="Ver Planes Alimenticios"
                    color="#1464f6"
                ></Button>
            </View>
            <View style={ { flex: 4 } }>
                <InfoText style={ { flex: 1, marginTop: 20, marginLeft: 10, fontSize: 24 } }>Progresos</InfoText>
                <Image source={ require('../../../assets/wheelgraph.png') }
                    style={ { flex: 3, width: '70%', alignSelf: "center" } }
                    resizeMode="contain" />
                <Image source={ require('../../../assets/graph.png') }
                    style={ { flex: 3, width: '100%', marginBottom: 20 } }
                    resizeMode="stretch" />
            </View>
        </View>
    )
}

const Info = styled.View`
    flex-direction: row;
    align-items: center;
`;

const InfoText = styled.Text`
	color: #fff;
    font-size: 20px;
    padding-left: 10px;
`;

