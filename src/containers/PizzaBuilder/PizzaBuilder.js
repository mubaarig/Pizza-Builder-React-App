import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    mozzarela: 0.4,
    pepperoni: 1.3,
    onion: 0.5,
    FreshTomatoes: 1.7
    }; 

class PizzaBuilder extends Component{
   
    state = {
        ingredients: {
            mozzarela: 0,
            pepperoni:0,
            onion: 0,
            FreshTomatoes: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = priceAddition + this.state.totalPrice;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } ); 
    }



    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } ); 
    }

    render () {
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Auxilliary>
                <Pizza ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                />
            </Auxilliary>
        );
    }

}

export default PizzaBuilder