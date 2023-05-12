import { React, Component } from 'react';
import {  View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/StylesInicio.js'


export class biblioteca extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela C</Text>

        <TouchableOpacity style={styles.buttonEntrar} onPress={() =>
            this.props.navigation.push('login')}>
            <Text style={styles.textEntrar}>Entrar</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default biblioteca;