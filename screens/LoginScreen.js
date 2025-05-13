import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function LoginScreen(){
    const [Nome, setNome] = React.useState('')
    const [Senha, setSenha] =  React.useState('')

    const enviar = () =>{
        console.log(Nome)
        console.log(Senha)
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Login</Text>
            <TextInput placeholder='Usuário'/>
            <TextInput placeholder='Senha'/>
            <TouchableOpacity onPress={'oi'}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: 'black',
    },

    title:{

    }
})