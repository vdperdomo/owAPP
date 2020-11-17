import React from 'react';
//import loginScreen from '../screens/login.screen';
import i18n from '../locale/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import paymentsScreen from '../screens/payments/payments.screen';
import viewPaymentScreen from '../screens/payments/paymentView.screen';
import editPaymentScreen from '../screens/payments/paymentEdit.screen.';
import confirmationPaymentScreen from '../screens/payments/paymentConfirmation.screen'; */
import MainScreen from '../screens/user/main/main.screen';


const Stack = createStackNavigator();


const UserNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="main"
          component={ MainScreen }
          options={ {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#000',
            },
          } }
        />
        {/*        <Stack.Screen name="loginScreen" component={ loginScreen } /> */ }
        {/*         <Stack.Screen name="paymentsScreen" component={ paymentsScreen } />
        <Stack.Screen name="viewPaymentScreen" component={ viewPaymentScreen } />
        <Stack.Screen name="editPaymentScreen" component={ editPaymentScreen } /> */}
        {/*   <Stack.Screen name="PaymentValidate" component={ PaymentValidate } /> */ }
        {/*   <Stack.Screen name="confirmationPaymentScreen" component={ confirmationPaymentScreen }  />*/ }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default UserNavigator;







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
