import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Content, Button, Right } from 'native-base';
import TableComponent from '../../components/table.component';
import variable from '../../assets/native-base-theme/variables/platform';
import i18n from '../../locale/i18n';
import ViewPayment from './paymentView.screen';


const paymentsScreen = (props) => {

    const modalVisible = true;

    const [payments, setPayments] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState({});
    const [modalOpened, toggleModal] = useState(false);

    const closeModal = () => {
        toggleModal(false);
        setSelectedPayment({})
    }

    const getPayments = async () => {
        const response = await fetch('https://owapi-8fb86.firebaseio.com/payments.json');
        const pay = await response.json();
        setPayments(pay);
    }

    useEffect(() => {
        getPayments();
    }, []);

    const newPayment = () => {
        props.navigation.navigate('PaymentEdit');
    }

    const selectPayment = (selected) => {
        toggleModal(true);
        setSelectedPayment(selected)
    }
    const orderBy = () => {
        console.log("order")
    }

    const filterBy = () => {
        console.log("filter")
    } 

    return (
        <View style={ styles.container }>
            <View style={ styles.subtitle }>
                <Text style={ styles.subtitleText }>{ i18n.t('payments_subtitle') } </Text>
            </View>

            <Button primary rounded onPress={ newPayment } style={ styles.button }>
                <Text style={ styles.buttonText }>{ i18n.t('payment_add') } </Text>
            </Button>
            <TableComponent data={ payments } { ...schema } orderBy={ orderBy } filterBy={ filterBy } selectItem={ selectPayment }></TableComponent>

            <ViewPayment visible={ modalOpened } closeModal={ closeModal } payment={ selectedPayment } />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: "center",
        marginTop: "10%",
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
    button: {
        height: 36,
        width: 100,
        alignSelf: "flex-end",
        justifyContent: "center",
        marginBottom: 20
    },
    buttonText: {
        color: "#fff"
    }
});

export default paymentsScreen;


const schema = {
    titles: ['Fecha', 'Monto', 'Medio de Pago'],
    keys: ['date', 'total', 'typeDescription'],
    columnsSize: ['30%', '25%', '35%']
}


const payment = {
    date: new Date(),
    total: '950',
    typeNumber: '2',
    typeDescription: 'Visa',
    number: '1234',
    reason: 'Clases mensuales'
}