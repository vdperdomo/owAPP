import React from "react";
import { ImageBackground, View } from "react-native";
import styled from "styled-components/native";

const MainItem = ({ image }) => {
    const goToDetails = () => {
        props.navigation.navigate("EventDetail", event);
    };

    return (
        <Container onPress={ goToDetails } activeOpacity={ 0.8 } underlayColor="#000">
            <View>
                <Body>
                    <ImageBackground
                        source={ image }
                        style={ { flex: 3, height: 300 } }
                        resizeMode="cover"
                    ></ImageBackground>
                </Body>
            </View>
        </Container>
    );
};

export default MainItem;

const Container = styled.TouchableHighlight`
	margin: 10px;
`;

const Body = styled.View`
	border-radius: 5px;
	overflow: hidden;
	flex-direction: row;
	opacity: ${(props) => (props.enrolled ? 0.8 : 1)};
	background-color: #2b292e;
`;

