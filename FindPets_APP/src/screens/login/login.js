import React from 'react';
import { Text, View, StatusBar } from 'react-native';


const Login = () => {
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");

    // const handleLogin = () => {
    //     console.log(email, password);
    // };

    return (
        <View>
            <Text>Login</Text>
            {/* <View> */}
            {/* <TextInputContainer>
                <TextInputStyled
                value={username}
                onChangeText={text => setUsername(text)}
                />
            </TextInputContainer> */}
        <StatusBar barStyle="dark-content" backgroundColor="#ffff"/>
        </View>
    );
};

export default Login;
