import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Content, Item, Label, Form, Container, Text } from 'native-base';
import variable from './../assets/native-base-theme/variables/platform';
import i18n from '../locale/i18n';

const loginScreen = (props) => {
    const [username, setusarname] = useState('');
    const [password, setpassword] = useState('');

    const updateUsername = (enteredText) => {
        setusarname(enteredText);
    };

    const updatePassword = (enteredText) => {
        setpassword(enteredText);
    };

    const login = () => {
        // props.navigation.navigate('Main');
        props.navigation.navigate('Payments');
    };

    return (
        <Container style={ styles.container }>

            <View style={ styles.page }>
                <Text style={ styles.titletyle }>{ i18n.t("login_title") }</Text>
                <Text style={ styles.textStyle }>{ i18n.t("login_subtitle") }</Text>

                <Form>
                    <Item floatingLabel>
                        <Label style={ styles.label }>{ i18n.t('username') }</Label>
                        <Input onChangeText={ updateUsername } value={ username } />
                    </Item>
                    <Item floatingLabel>
                        <Label style={ styles.label }>{ i18n.t('password') }</Label>
                        <Input onChangeText={ updatePassword } value={ password } />
                    </Item>
                    <Button primary rounded onPress={ login } style={ styles.button }>
                        <Text style={ styles.buttonText }>{ i18n.t('login_button') } </Text>
                    </Button>
                </Form>
            </View>
            <View style={ styles.footerText }>
                <Text style={ styles.linkStyle }>{ i18n.t("recovert_password") }</Text>
                <Text style={ styles.linkStyle, styles.primaryColor }>{ i18n.t("new_account") }</Text>
            </View>

        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: "column",
        justifyContent: "space-between"
    },
    page: {
        paddingHorizontal: 50,
        width: '100%',
        flex: 10,
        alignSelf: "center",
        justifyContent: 'center',
    },
    titletyle: {
        fontSize: 25,
        paddingVertical: 5
    },
    textStyle: {
        fontSize: 18,
        color: '#aaa'
    },
    inputStyle: {
        paddingTop: 20,
        borderColor: '#000',
        borderBottomWidth: 2,
        width: 150
    },
    button: {
        borderRadius: 2,
        marginTop: 15
    },
    buttonText: {
        textAlign: 'center',
        width: '100%'
    },
    footerText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    primaryColor: { 
        color: variable.brandPrimary
    },
    label: { 
        color: variable.brandPrimary,
        opacity: .9
    }
});

export default loginScreen;
