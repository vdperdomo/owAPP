import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Input, Item, Label, Form, Picker, Textarea, InputGroup } from 'native-base';
import variable from '../../assets/native-base-theme/variables/platform';
import { useFormik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { availableCardType, availableDocumentType } from './../../utils/constants';
import { validateCardNumber, validateExpirationDate } from './../../utils/creditCard.validation';

const editPaymentScreen = (props) => {
    const { values, isValid, setFieldValue, handleSubmit, errors, touched, setTouched } = useFormik({
        initialValues: {
            paymentType: 1,
            cardNumber: '',
            expirationDate: '',
            cardName: '',
            CVV: '',
            documentType: 1,
            documentNumber: '',
            amount: '',
            reason: ''
        },
        onSubmit: values => {
            props.navigation.navigate('PaymentValidate', { payment: values });
        },
        validate: values => {
            const errors = {};
            if (!validateCardNumber(values.paymentType, values.cardNumber))
                errors.cardNumber = "Número de tarjeta inválido";
            if (!validateExpirationDate(values.expirationDate))
                errors.expirationDate = "La fecha debe ser mayor a la actual";
            return errors;
        },
        validationSchema: yup.object().shape({
            cardName: yup.string()
                .required("Requerido"),
            CVV: yup.string()
                .required("Requerido"),
            documentNumber: yup.string()
                .required("Requerido")
                .min(7, "Documento incorrecto"),
            amount: yup.number()
                .required("Requerido")
                .min(0, "El monto debe ser mayor a 0")
                .max(99999, "El monto no puede superar los 99999"),
            reason: yup.string()
                .required("Requerido")
        })
    })

    const cardTypeView = availableCardType.map(card =>
        <Picker.Item
            key={ card.id.toString() }
            value={ card.id }
            label={ card.description }>
        </Picker.Item>);

    const documentTypeView = availableDocumentType.map(document =>
        <Picker.Item
            key={ document.id.toString() }
            value={ document.id }
            label={ document.description }>
        </Picker.Item>);

    return (
        <ScrollView style={ styles.container }>
            <View style={ styles.subtitle }>
                <Text style={ styles.subtitleText }> Nuevo Pago </Text>
            </View>
            <Form>
                <Label style={ styles.label }>Medio de pago</Label>
                <Picker
                    selectedValue={ values.paymentType }
                    style={ { height: 50, width: 250, margin: 0 } }
                    onValueChange={ value => setFieldValue('paymentType', value) }
                >
                    { cardTypeView }
                </Picker>

                <View style={ { flexDirection: "row", justifyContent: "space-between" } }>
                    <View style={ { width: '50%' } }>
                        <Item style={ { marginLeft: 0, marginTop: 0 } } floatingLabel error={ (touched.cardNumber && errors.cardNumber) ? true : false }>
                            <Label style={ styles.label }>Numero de Tarjeta</Label>
                            <Input

                                onChangeText={ value => setFieldValue('cardNumber', value) }
                                value={ values.cardNumber }
                                maxLength={ 19 }
                                onBlur={ () => setTouched({ ...touched, cardNumber: true }) }
                            />
                        </Item>
                        { touched.cardNumber && <Text style={ styles.errors }>{ errors.cardNumber }</Text> }
                    </View>

                    <View style={ { width: '35%' } }>
                        <Item style={ { marginLeft: 0, marginTop: 0 } } floatingLabel error={ (touched.expirationDate && errors.expirationDate) ? true : false }>
                            <Label style={ styles.label }>Fecha Venc.</Label>
                            <Input
                                onChangeText={ value => setFieldValue('expirationDate', value) }
                                value={ values.expirationDate }
                                maxLength={ 7 }
                                onBlur={ () => setTouched({ ...touched, expirationDate: true }) }
                            />
                        </Item>
                        { touched.expirationDate && <Text style={ styles.errors }>{ errors.expirationDate }</Text> }
                    </View>
                </View>

                <View style={ { flexDirection: "row", justifyContent: "space-between" } }>
                    <View style={ { width: '50%' } }>
                        <Item style={ { marginLeft: 0, marginTop: 0 } } floatingLabel error={ (touched.cardName && errors.cardName) ? true : false }>
                            <Label style={ styles.label }>Nombre</Label>
                            <Input
                                onChangeText={ value => setFieldValue('cardName', value) }
                                value={ values.cardName }
                                maxLength={ 30 }
                                onBlur={ () => setTouched({ ...touched, cardName: true }) }
                            />
                        </Item>
                        { touched.cardName && <Text style={ styles.errors }>{ errors.cardName }</Text> }
                    </View>

                    <View style={ { width: '35%' } }>
                        <Item style={ { marginLeft: 0, marginTop: 0 } } floatingLabel error={ touched.CVV && errors.CVV ? true : false }>
                            <Label style={ styles.label }>CVV</Label>
                            <Input
                                onChangeText={ value => setFieldValue('CVV', value) }
                                value={ values.CVV }
                                keyboardType="numeric"
                                maxLength={ 3 }
                                onBlur={ () => setTouched({ ...touched, CVV: true }) }
                            />
                        </Item>
                        { touched.CVV && <Text style={ styles.errors }>{ errors.CVV }</Text> }
                    </View>
                </View>

                <View style={ { flexDirection: "row", justifyContent: "space-between" } }>
                    <View style={ { width: '50%' } }>
                        <Item style={ { marginLeft: 0, marginTop: 0 } } floatingLabel error={ touched.documentNumber && errors.documentNumber ? true : false }>
                            <Label style={ styles.label }>Nro de Documento</Label>
                            <Input
                                onChangeText={ value => setFieldValue('documentNumber', value) }
                                value={ values.documentNumber }
                                keyboardType="numeric"
                                maxLength={ 8 }
                                onBlur={ () => setTouched({ ...touched, documentNumber: true }) }
                            />
                        </Item>
                        { touched.documentNumber && <Text style={ styles.errors }>{ errors.documentNumber }</Text> }
                    </View>

                    <View style={ { width: '35%' } }>
                        <Label style={ styles.label }>Tipo de Doc.</Label>
                        <Picker
                            selectedValue={ values.documentType }
                            style={ { height: 50, width: 150, margin: 0 } }
                            onValueChange={ value => setFieldValue('documentType', value) }
                        >
                            { documentTypeView }
                        </Picker>
                    </View>
                </View>

                <View style={ { width: '50%' } }>
                    <Item style={ { marginLeft: 0, marginTop: 0 } } floatingLabel error={ touched.amount && errors.amount ? true : false }>
                        <Label style={ styles.label }>Monto</Label>
                        <Input
                            onChangeText={ value => setFieldValue('amount', value) }
                            value={ values.amount }
                            keyboardType="numeric"
                            maxLength={ 8 }
                            onBlur={ () => setTouched({ ...touched, amount: true }) }
                        />
                    </Item>
                    { touched.amount && <Text style={ styles.errors }>{ errors.amount }</Text> }
                </View>

                <View style={ { marginVertical: 30, paddingLeft: 0 } }>
                    <Label style={ styles.label }>Motivo</Label>
                    <Textarea
                        onChangeText={ value => setFieldValue('reason', value) }
                        value={ values.reason }
                        rowSpan={ 3 }
                        bordered
                        error={ touched.reason && errors.reason ? true : false }
                        onBlur={ () => setTouched({ ...touched, reason: true }) }
                    />
                    { touched.reason && <Text style={ styles.errors }>{ errors.reason }</Text> }
                </View>

            </Form>

            <Button primary rounded onPress={ handleSubmit } style={ styles.button }>
                <Text style={ styles.buttonText }>Siguiente </Text>
            </Button>

        </ScrollView>

    )
}

export default editPaymentScreen;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: "center",
        marginTop: "10%",
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
    input: {
        paddingBottom: 0,
        marginBottom: 0,
        height: 50
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
    errors: {
        paddingTop: 0,
        marginTop: 0,
        lineHeight: 15,
        color: 'red',

    }
});