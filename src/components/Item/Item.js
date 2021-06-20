import React,{Component,useState} from 'react';
import Card from '@material-ui/core/Card';
import styles from './itemStyle'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Item =(props)=>
{
    const classes = styles();
    // const state = {
    //     inCart: props.inCart
    // };
    const[inCart,setState]=useState(props.inCart);

   const AddToCart = (e) => {
        e.preventDefault();
        props.addToCart(props.product)
        setState({
          inCart:true
        })
    }
    
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item[0]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        {
                            inCart?(
                                <span >Added to cart</span>
                            ) : (
                              <Button  color="primary" className={classes.button} onClick={AddToCart}>
                              ADD
                            </Button>
                                
                            )
                        }
        </CardActions>
      </Card>
    );
}

export default Item;