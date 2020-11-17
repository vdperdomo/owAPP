import React from 'react'
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Button, Input, Content, Item, Label, Form, Container } from 'native-base';
import variable from './../../assets/native-base-theme/variables/platform';
import PaymentViewerComponent from '../../components/paymentViewer.component'


const ViewPayment = (props) => {
    //const payment = props.navigation.state.params;

    return (

        <Container style={ styles.container } >
            <Modal visible={ props.visible } animationType="fade" transparent={ true } >

                <View style={ styles.page } >
                    <View style={ styles.modalContent } >
                        <Text style={ styles.modalHeader }>Ver Pago</Text>
                        <View style={ styles.modalBody }>
                            <PaymentViewerComponent { ...props } />
                            <Button primary rounded onPress={ props.closeModal } style={ styles.button }>
                                <Text style={ styles.buttonText }>Cerrar</Text>
                            </Button>
                        </View>
                    </View>
                </View>


            </Modal>
        </Container>

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

export default ViewPayment;


const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        alignSelf: "center",
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.39)',
    },
    modalContent: {
        width: '90%',
        alignSelf: "center",
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    modalHeader: {
        fontSize: 20,
        paddingVertical: 15,
        backgroundColor: variable.brandPrimary,
        color: '#fff',
        paddingLeft: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    modalBody: {
        padding: 15,
    },
    button: {
        borderRadius: 2,
        width: 80,
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center"
    },
    value: {
        fontSize: 16,
        paddingVertical: 5
    },
    label: {
        fontSize: 14,
        color: '#aaa'
    },
})