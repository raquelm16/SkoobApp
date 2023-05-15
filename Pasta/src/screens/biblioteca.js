import { React, Component } from 'react';
import {  View, Text, TouchableOpacity, Image, Divider} from 'react-native';
import styles from '../styles/StylesBiblioteca.js'


export class biblioteca extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* ------ NAV BAR ------ */}
    <View style={styles.nav1}>
    <TouchableOpacity style={styles.buttonSalvar} onPress={() =>
            this.props.navigation.push('inicio')}>
            <Image style={styles.seta1} source={require('../../assets/seta1.png')} />
          </TouchableOpacity>
      

    <View style={styles.cinza}>
      <Image style={styles.search} source={require('../../assets/search.png')} />
      <Image style={styles.points} source={require('../../assets/points.png')} />
      </View>

    </View>

<View style={styles.nav2}>
{/* ------ MEUS LIVROS SECTION ------ */}
    <View style={styles.meuslivros}>
      <Text style={styles.meus}>Meus </Text>
      <Text style={styles.livros}>Livros </Text>
      <Image style={styles.seta2} source={require('../../assets/seta2.png')}/>
    </View>

{/* ------ PERFIL ------ */}
<View style={styles.perfiltodo}>

    <View style={styles.ladoperfil}>
      <Text style={styles.n}>728</Text>
      <Text style={styles.pages}>PÁGINAS LIDAS</Text>
    </View>  
      <Image style={styles.user} source={require('../../assets/user.jpg')}/>

</View>

</View>

     <View style={styles.linha}></View> {/* Linha */}


{/* ------ BOOKMARKS ------ */}
<View style={styles.todosbookmark}>
      <Image style={styles.bookmark} source={require('../../assets/broxo.png')}/>
      <Image style={styles.bookmark} source={require('../../assets/bverde.png')}/>
      <Image style={styles.bookmark} source={require('../../assets/bamarelo.png')}/>
      <Image style={styles.bookmark} source={require('../../assets/bazul.png')}/>
      <Image style={styles.bookmark} source={require('../../assets/blaranja.png')}/>
      <Image style={styles.bookmark} source={require('../../assets/bpreto.png')}/>
</View>

      <View style={styles.linha}></View> {/* Linha */}


<View style={styles.areacinza}> {/* area cinza */}
      <Text style={styles.todos}>TODOS 6</Text>


{/* ------ LIVROS ------ */}
<View style={styles.div}>

<View style={styles.todoslivro}>
      <Image style={styles.livro} source={require('../../assets/book1.jpg')}/>
      <Image style={styles.livro} source={require('../../assets/book2.jpg')}/>
      <Image style={styles.livro} source={require('../../assets/book3.jpg')}/>
      <Image style={styles.livro} source={require('../../assets/book4.jpg')}/>
      <Image style={styles.livro} source={require('../../assets/book5.jpg')}/>
      <Image style={styles.livro} source={require('../../assets/book6.jpg')}/>
</View>

{/*------ BOOKMARKS ON BOOKS ------*/}
<View style={styles.todosmark}>            
<Image style={styles.mark} source={require('../../assets/markazul.png')}/>
<Image style={styles.mark} source={require('../../assets/markazul.png')}/>
<Image style={styles.mark} source={require('../../assets/markverde.png')}/>  
<Image style={styles.mark} source={require('../../assets/markverde.png')}/>
<Image style={styles.mark} source={require('../../assets/markamarelo.png')}/>
<Image style={styles.mark} source={require('../../assets/marklaranja.png')}/>
</View>

</View>


</View> {/*area cinza*/}


      </View>
    );
  }
}

export default biblioteca;