import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        alignSelf:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 8,
        width:'100%',
        height:'100%'
    },
    seta1: {
        width:25,
        height:25,
        flexDirection:'row',
        marginLeft:5
      },
      search:{
        width:25,
        height:25,
        flexDirection:'row',
      },
      points: {
        width:25,
        height:25,    
        flexDirection:'row',
        marginRight:10
      },
      cinza: {
        flexDirection:'row',
        gap:20
      },
      nav1:{
        flexDirection:'row',
        gap:20,
        marginTop:-120,
        justifyContent:'space-between',
      },
    
      meus:{
        fontSize:20,
        color:'#595a5b'
      },
      livros:{
        fontSize:20
      },
      seta2:{
        width:20,
        height:20,
        marginTop:5
      },
      meuslivros:{
        flexDirection:'row',
        selfAlign:'flex-start',
        margin:15,
        marginLeft:10
      },
    
      n: {
        fontSize:16,
        flexDirection:'row',
        alignSelf:'flex-end',
        fontWeight:'bold'
      },
      pages:{
        fontSize:12,
        flexDirection:'row',
        alignSelf:'flex-end'
      },
      user:{
        width:60,
        height:60,
        borderRadius:60/2,
        flexDirection:'column',
        alignSelf:'center',
        marginTop:-14,
        marginLeft:10,
        marginRight:10
      },
      ladoperfil: {
        flexDirection:'column'
      },
      perfiltodo: {
        flexDirection:'row',
        alignSelf:'flex-end',
      },
      nav2: {
        flexDirection:'row',
        justifyContent:'space-between',
        gap:0,
        marginTop:20,
        marginBottom:12
      },
    
      linha: {
        border:'1px solid #c1c2c1',
      },
    
      bookmark: {
        width:35,
        height:35
      },
      todosbookmark:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:8,
        marginBottom:8,
        marginRight:5,
        marginLeft:5
      },
      
      todos:{
        margin:13,
        marginLeft:15,
        color:'#595a5b'
      },
    
    
    
      livro: {
        width:90,
        height:130,
        marginBottom:5,
        borderRadius:5,
      },
      todoslivro: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        gap:15
      },
    
      mark: {
        width:90,
        height:130,
        marginBottom:5,
        borderRadius:5,
      },
    
      todosmark:{
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap',
        zIndex:2,
        marginTop:-285,
        gap:15
      }
})