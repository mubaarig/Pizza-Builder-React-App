import React from 'react';
import classes from './PizzaTopping.css';
import PropTypes from 'prop-types';

class PizzaTopping extends Component{
    render(){
        let pizzatopping = null;

        switch (this.props.type){
            case ('pizza-bottom'):
                PizzaTopping = <div className={classes.PizzaBottom}> </div>;
            break;
            case ('pepperoni'):
                pizzatopping = <div className={classes.Pepperoni}></div>
            break;
            case ('mozzarella'):
                pizzatopping = <div className={classes.Pepperoni}></div>
        }

    }
}