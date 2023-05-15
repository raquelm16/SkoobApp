import { React, Component } from 'react';
import {  View, Text, TouchableOpacity, Input, Form, Label} from 'react-native';
import styles from '../styles/StylesCadastro.js'


export class cadastro extends Component {
  render() {
    return (
      <View style={styles.container}>

<View style={styles.forms}>

<View>

        <Text style={styles.title}>
        Crie a sua conta!
      </Text>
      <Text style={styles.paragraph}>
        É rápido, fácil e grátis.
      </Text>

      <label>
      <Text style={styles.titleform}>Dados de acesso  </Text>
      </label>
  <label>
    <Text style={styles.texto}>{'\n'}Email {'\n'}</Text>
    <input type="text" placeholder="Email" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Confirme seu Email{'\n'}</Text>
    <input type="text" placeholder="Email" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Senha{'\n'}</Text>
    <input type="text" placeholder="Senha" style={styles.input}/>
  </label>
  <label>
    <Text style={styles.texto}>{'\n'}Confirme a senha{'\n'}</Text>
    <input type="text" placeholder="Confirme a senha" style={styles.input}/>
  </label>
  <Text>{'\n'}</Text>

  <TouchableOpacity style={styles.buttonSalvar} onPress={() =>
            this.props.navigation.push('biblioteca')}>
            <Text style={styles.textSalvar}>Salvar</Text>
          </TouchableOpacity>
  </View>


          </View>

        
      </View>
    );
  }
}

export default cadastro;