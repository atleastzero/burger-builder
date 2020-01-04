import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    }

    addIngredientHandler = type => {
        const count = this.state.ingredients[type] + 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;
        const priceAddition = INGREDIENT_PRICES[type];
        const price = this.state.totalPrice + priceAddition;

        this.setState({totalPrice: price, ingredients: updatedIngredients})
    }

    removeIngredientHandler = type => {
        const count = this.state.ingredients[type] - 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const price = this.state.totalPrice - priceSubtraction;

        this.setState({totalPrice: price, ingredients: updatedIngredients})
    }

    render() {
        return <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                />
        </Aux>;
    }
}

export default BurgerBuilder;