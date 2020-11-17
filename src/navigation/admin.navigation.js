//import loginScreen from '../screens/login.screen';
import i18n from '../locale/i18n';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/admin/main/main.admin.screen';
import { UsersScreen } from '../screens/admin/users/users.screen';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';
import { userScreen } from '../screens/admin/users/user.screen';
import { routinesScreen } from '../screens/admin/routine/routines.screen';
import { routineScreen } from '../screens/admin/routine/routine.screen';

const Stack = createStackNavigator();


const AdminNavigator = () => {
  return (
    <View style={ { flex: 1, backgroundColor: 'black', alignItems: "center" } }>
      <View style={ { flex: 1, width: '95%' } }>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="routine">
            <Stack.Screen
              name="main"
              component={ MainScreen }
              options={ { header: () => null } }
            />
            <Stack.Screen name="users"
              component={ UsersScreen }
              options={ { header: (props) => <Header { ...props } title="Alumnos" /> } } />
            <Stack.Screen name="user"
              component={ userScreen }
              options={ { header: (props) => <Header { ...props } title={ props.scene.route.params.title } /> } } />
            <Stack.Screen name="routines"
              component={ routinesScreen }
              options={ { header: (props) => <Header { ...props } title="Rutinas" /> } } />
            <Stack.Screen name="routine"
              component={ routineScreen }
              options={ { header: (props) => <Header { ...props } title="Rutina" /> } } />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  )
}


function Header({ title, navigation }) {
  return (
    <>
      <StatusBar hidden={ false } translucent={ true } />
      <View
        style={ {
          height: 150,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: 'black'
        } }
      >
        <View style={ { justifyContent: "flex-start", alignItems: "flex-start", width: '95%' } }>
          <FontAwesomeIcon onPress={ () => navigation.goBack() } icon={ faLongArrowAltLeft } size={ 20 } style={ { color: 'white', marginBottom: 15 } } />
          <Title>{ title }</Title>
        </View>
        <Line />
        <Subline />
      </View>
    </>
  );
}

export default AdminNavigator;






const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  padding-bottom: 20px;
`;

const Line = styled.View`
  border-Bottom-Width: 4px;
  border-Bottom-Color: #222;
  border-Bottom-Start-Radius: 2px;
  border-Bottom-End-Radius: 2px;
  border-Bottom-Left-Radius: 2px;
  border-Bottom-Right-Radius: 2px;
  margin-bottom: 20px;
  width: 95%;
`;

const Subline = styled.View`
  border-Bottom-Width: 4px;
  border-Bottom-Color: #666;
  border-Bottom-Start-Radius: 2px;
  border-Bottom-End-Radius: 2px;
  border-Bottom-Left-Radius: 2px;
  border-Bottom-Right-Radius: 2px;
  position: absolute;
  top: 126px;
  width: 40%;
  right: 2.5%;
`;



/* const Navigator = createStackNavigator({
     Login: {
          screen: loginScreen,
          navigationOptions: { headerShown: false  },
        },
      Payments: {
        screen: paymentsScreen,
        navigationOptions: { title: i18n.t('payments_title') }
      },
      PaymentView: {
        screen: viewPaymentScreen,
        navigationOptions: { title: i18n.t('payment_view_title') }
      },
      PaymentEdit: {
        screen: editPaymentScreen,
        navigationOptions: { title: i18n.t('payment_view_title') }
      },
      PaymentValidate: {
        screen: confirmationPaymentScreen,
        navigationOptions: { title: i18n.t('payment_view_title') }
      },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: i18n.t('payment_view_title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2b292e',
      },
      headerMode: 'none'
    }
  }
},
  {
    initialRouteName: 'Main',
  }
); */
