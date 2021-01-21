import React, {Component} from 'react';
import classes from './PizzaTopping.css';
import PropTypes from 'prop-types';

class pizzaTopping extends Component{
    render(){
        let pizzaToppings = null;
        switch (this.props.type){
            case ('crust'):
                pizzaToppings = (
                    <div className={classes.Crust}>
                        <div className={classes.sauce}></div>
                        <div className={classes.cheese}></div>
                    </div>
                );
            break;
            case ('mozzarela'):
                pizzaToppings = <div className={classes.Mozzarela}></div>;
            break;
            case ('pepperoni'):
                pizzaToppings = <div className={classes.Pepperoni}></div>;
            break;
            case ('onion'):
                pizzaToppings = <div className={classes.Onion}></div>;
            break;
            case ('FreshTomatoes'):
                pizzaToppings = <div className={classes.FreshTomatoes}></div>;
            default:
                pizzaToppings = null;
            
        }

        return pizzaToppings;

    }
}

pizzaTopping.propTypes = {
    type: PropTypes.string.isRequired
};



export default pizzaTopping;