import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


const PaymentViewerComponent = (props) => {

    return (
        <View>
            <View style={ { flexDirection: "row" } }>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Fecha</Text>
                    <Text style={ styles.value }>{ props.payment.date }</Text>
                </View>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Total</Text>
                    <Text style={ styles.value }>{ props.payment.total }</Text>
                </View>
            </View>
            <View style={ { flexDirection: "row" } }>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Medio de Pago</Text>
                    <Text style={ styles.value }>{ props.payment.typeDescription }</Text>
                </View>
                <View style={ { width: '50%' } }>
                    <Text style={ styles.label }>Tarjeta N°</Text>
                    <Text style={ styles.value }>{ props.payment.number }</Text>
                </View>
            </View>
            <View>
                <Text style={ styles.label }>Motivo</Text>
                <Text style={ styles.value }>{ props.payment.reason }</Text>
            </View>
        </View>
    )
}

export default PaymentViewerComponent;


const styles = StyleSheet.create({
    value: {
        fontSize: 16,
        paddingVertical: 5
    },
    label: {
        fontSize: 14,
        color: '#aaa'
    },
})