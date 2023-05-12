import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
     justifyContent: 'center',
    backgroundColor: '#ffff',
    padding: 8,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 500,
    },
    dockitem: {
        width: "10%",
        height: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FF0000",
    },
    dock: {
        backgroundColor: "#4f58c4",
        flexDirection: 'row',
        width: "100%",
        height: '9%',
        bottom: 0,
        position: "absolute",
    },
    body: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    skoobicon:{
        width: 150,
        height: 150,
        flexDirection:'row',
        alignSelf:'center'
      },
      skoobtitle: {
        width:160,
        height:60,
        flexDirection:'row',
        alignSelf:'center',
      },
      buttonEntrar: {
        marginTop: 20,
        borderRadius: 20,
        padding:7,
        width:220,
        backgroundColor:'#ffff',
        border: '2px solid #0b86d0',
        flexDirection:'row',
        alignSelf:'center'
      },
      textEntrar: {
        flex:1,
        fontSize:17,
        color:'#0b86d0',
        fontWeight:500,
        textAlign:'center'
      },
      iconsview:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop: 17
  },
  icons: {
    width:45,
    height:40,
    margin:10
  },
  p1: {
    margin: 24,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  p2: {
    fontSize:17,
    textAlign:'center',
    marginTop:-22
  },
  fotoview:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:18
  },
  foto: {
    width:50,
    height:50,
    borderRadius:50/2,
    border:'3px solid #0b86d0',
    margin:8
  },
  p3: {
    textAlign:'center',
    fontSize:17,
    marginTop:15
  }
});