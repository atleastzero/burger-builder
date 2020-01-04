import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
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
        if (this.state.ingredients < 0) {
            return;
        }
        const count = this.state.ingredients[type] - 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = count;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const price = this.state.totalPrice - priceSubtraction;

        this.setState({totalPrice: price, ingredients: updatedIngredients});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                />
        </Aux>;
    }
}

export default BurgerBuilder;