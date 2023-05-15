import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
    width:'100%',
    height:'100%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop:17
  },
  paragraph: {
    fontSize:14,
    marginTop: 3,
    marginBottom: 14,
  },
  forms: {
    flex:1,
    flexDirection:'row',
    alignSelf: 'center',
    marginLeft:25
  },
  titleform: {
    fontWeight: 'bold',
    paddingTop: 10
  },
  texto:{
    padding: 0,
    fontWeight:'600'
  },
  input: {
    padding: 5,
    width: 270,
    marginBottom: -10,
    marginTop:5,
    borderRadius: 6,
    border: '1.5px solid #c1c2c1',
    color: '#c1c2c1',
    flexDirection:'row',
    alignSelf:'center'
  },
  buttonSalvar: {
    marginTop: 15,
    alignSelf: 'center',
    width: 270,
    backgroundColor:'#0b86d0',
    borderRadius: 20,
    border:'none',
    padding:6,
  },
  textSalvar: {
    textAlign:'center',
    color:'#fff'
  }
})