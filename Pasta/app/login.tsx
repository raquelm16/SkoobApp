import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Link} from "expo-router"
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>

    <img style={styles.logo} src={'../assets/skoobicon.PNG'} alt="Image" />


    <input type='text' placeholder='Email' style={styles.caixa}/>
    <input type='text' placeholder='Senha' style={styles.caixa}/>

    <Text style={styles.esquecisenha}> Esqueci minha senha</Text>

        {/* 
        <TouchableOpacity style={styles.buttonEntrar} onPress={() =>
           this.props.navigation.push('biblioteca')}
         >
           <Text style={styles.textEntrar}>Entrar</Text>
        </TouchableOpacity> 
        */}

     <Link href="/cadastro" style={styles.buttonEntrar}>Entrar</Link>


         <Text style={styles.ou}>ou</Text>

<Text style={styles.facebook}>Entrar com o Facebook</Text>

<View>
<Text style={styles.cadastro}> Não tem cadastro? </Text>
<Text style={styles.arraste}> Arraste pro lado para se cadastrar!</Text>
</View>
         

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    padding: 8,
    },
    logo: {
        width:130,
        height:120,
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:26
      },
      caixa: {
        padding:12,
        borderRadius:20,
        border:'2px solid #c1c2c1',
        margin:6,
        width:230,
        flexDirection:'row',
        alignSelf:'center',
        fontSize:15
      },
      esquecisenha: {
        color:'#0b86d0',
        fontSize: 15,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:9,
        fontWeight:'bold'
      },
      buttonEntrar: {
        borderRadius:22,
        padding:10,
        width:245,
        border:'none',
        backgroundColor:'#0b86d0',
        fontSize:17,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:50,
    
        fontWeight:'500',
        textAlign:'center',
        color:'#ffff'
      },
      textEntrar: {
        flex:1,
        fontSize:17,
        fontWeight:500,
        textAlign:'center',
        color:'#ffff',
      },
      ou:{
        felxDirection:'row',
        alignSelf:'center',
        marginTop:11,
        fontWeight:'bold'
      },
      facebook: {
        felxDirection:'row',
        alignSelf:'center',
        marginTop:5,
        fontWeight:'bold',
        color:'#0b86d0'
      },
      cadastro: {
        flexDirection:'column',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:60
      },
      arraste: {
        textAlign:'center'
      },
      botao2:{
        backgroundColor:'#ffff',
        borderRadius:20,
        width:110,
        padding:7,
        border:'2px solid #0b86d0',
        color:'#0b86d0',
        fontWeight:'bold'
      },
});
