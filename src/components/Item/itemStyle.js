import { fade,makeStyles } from '@material-ui/core/styles';


const itemStyle = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },

   root:{
    marginTop:4
   },
   button:{
    backgroundColor: '#e91e63',
    width:"100%",
    color:"white",
    '&:hover': {
        backgroundColor:'#f73378' ,
        color:"white"
      },
   },
   media:{
    height:100,
    width:210,
    marginTop:3
   }
   
    
  }));
  


export default itemStyle;