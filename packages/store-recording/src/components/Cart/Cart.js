import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from 'q-sig-context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
            <section className="back-white">
                <ProductConsumer>
                    {value => {
                        const {cart}  = value;
                        return (cart.length > 0) ? (
                            <React.Fragment>
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <CartList value={value} />
                                <CartTotals
                                value={value}
                                history={this.props.history}
                                />
                            </React.Fragment>
                        ) : <EmptyCart/>;
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
