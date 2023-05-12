import { React, Component } from 'react';
import {  View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/StylesInicio.js'


export class inicio extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.skoobicon} source={require('../../assets/skoobicon.PNG')} />
        <Image style={styles.skoobtitle} source={require('../../assets/skoobtitle.PNG')}/>

          <TouchableOpacity style={styles.buttonEntrar} onPress={() =>
            this.props.navigation.push('login')}>
            <Text style={styles.textEntrar}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.iconsview}>
    <Image style={styles.icons} source={require('../../assets/bookmark.png')} />
    <Image style={styles.icons} source={require('../../assets/star.png')} />
    <Image style={styles.icons} source={require('../../assets/pen.png')} />
</View>
      <Text style={styles.p1}>
        Organize suas leituras
      </Text>

      <Text style={styles.p2}>
      O melhor app. Completo e grátis!
      </Text>

<View style={styles.fotoview}>
    <Image style={styles.foto} source={require('../../assets/pessoa2.jpeg')} />
    <Image style={styles.foto} source={require('../../assets/pessoa1.png')} />
    <Image style={styles.foto} source={require('../../assets/pessoa3.jpg')} />
</View>

    <Text style={styles.p3}>
    <b>A maior comunidade</b> {'\n'} Mais de 7 milhões de leitores {'\n'}{'\n'}
    </Text>



      </View>
    );
  }
}

export default inicio;