import { React, Component } from 'react';
import {  View, Text, TouchableOpacity, Image, Input} from 'react-native';
import styles from '../styles/StylesLogin.js'


export class login extends Component {
  render() {
    return (
      <View style={styles.container}>

     <Image style={styles.logo} source={require('../../assets/skoobicon.PNG')} />

     <input type='text' placeholder='Email' style={styles.caixa}/>
     <input type='text' placeholder='Senha' style={styles.caixa}/>

     <Text style={styles.esquecisenha}> Esqueci minha senha</Text>

          <TouchableOpacity style={styles.buttonEntrar} onPress={() =>
            this.props.navigation.push('cadastro')}
          >
            <Text style={styles.textEntrar}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.ou}>ou</Text>

<Text style={styles.facebook}>Entrar com o Facebook</Text>

<View style={styles.dupla}>
<Text style={styles.cadastro}> Não tem cadastro? </Text>
<Text style={styles.arraste}> Arraste pro lado para se cadastrar!</Text>
</View>
          


      </View>
    );
  }
}

export default login;