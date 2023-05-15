import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    padding: 8,
    },
    logo: {
        width:120,
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
        fontSize:14,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:50
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
})