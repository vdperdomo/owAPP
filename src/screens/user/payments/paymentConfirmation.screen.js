import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button} from 'native-base';
import variable from '../../assets/native-base-theme/variables/platform';

const confirmationPaymentScreen = (props) => {
    /* const {payment} = props.navigation.state.params; */
    const payment = {
        paymentType: 1,
        paymentDescription:'Visa',
        cardNumber: '4123123412341234',
        expirationDate: '',
        cardName: '', 
        CVV: '',
        documentType: 1,
        documentNumber: '',
        amount: '900',
        reason: 'Clases de gimnasia'
    };

    const confirm = ()=>{
        alert("el pago se ha realizado con exito");
        props.navigation.navigate('Payments');
    }
    const back = ()=>{
        props.navigation.goBack()
    }
 
    return (
        <View style={ styles.container }>
           <View style={{height: 250}}>
           <View style={ styles.subtitle }>
                <Text style={ styles.subtitleText }>Confirmar Pago </Text>
            </View>
            <Text>Revisa y Confirmá tu pago</Text>
            <View style={ { flexDirection: "row" } }>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Total a pagar</Text>
                    <Text style={ styles.value }>$ { payment.amount }</Text>
                </View>
            </View>
            <View style={ { flexDirection: "row" } }>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Medio de Pago</Text>
                    <Text style={ styles.value }>{ payment.paymentDescription  }</Text>
                </View>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Tarjeta N°</Text>
                    <Text style={ styles.value }>*** { (payment.cardNumber).substring(0,4) }</Text>
                </View>
            </View>
            <View>
                <Text style={ styles.label }>Motivo</Text>
                <Text style={ styles.value }>{ payment.reason }</Text>
            </View>
           </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", height: 60}}>
                <Button primary rounded onPress={ back } style={ styles.button }>
                        <Text style={ styles.buttonText }>atras </Text>
                </Button>

                <Button primary rounded onPress={ confirm } style={ styles.button }>
                        <Text style={ styles.buttonText }>Confirmar </Text>
                </Button>
            </View>
        </View>

    )


    /*   date: "2/4/2018"
      id: 0
      number: 1234
      reason: "Clases mensuales"
      total: 950
      typeDescription: "Visa"
      typeNumber: 2
   */
}

export default confirmationPaymentScreen;


const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: "center",
        marginTop: "10%",
        justifyContent: "space-between",
        height: '90%'
    },
    subtitle: {
        borderBottomWidth: 4,
        borderBottomColor: "#ddd",
        borderBottomStartRadius: 2,
        borderBottomEndRadius: 2,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        marginBottom: 50,
        justifyContent: "flex-end"
    },
    subtitleText: {
        borderBottomStartRadius: 2,
        borderBottomEndRadius: 2,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderBottomWidth: 4,
        borderColor: variable.brandPrimary,
        alignSelf: "flex-end",
        textAlign: "right",
        marginBottom: -4,
        paddingBottom: 5,
        paddingLeft: 5
    },
    label: {
        color: variable.brandPrimary,
    },
    button: {
        height: 36,
        width: 100,
        alignSelf: "flex-end",
        justifyContent: "center",
        marginBottom: 20
    },
    buttonText: {
        color: "#fff"
    },
    value: {
        fontSize: 16,
        paddingVertical: 5
    },
    label: {
        fontSize: 14,
        color: '#aaa'
    }
})