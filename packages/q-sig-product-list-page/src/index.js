import React, { Component } from 'react'
import Product from './components/Product';
import Title from './components/Title';
import {ProductConsumer} from 'q-sig-context';

export default class ProductList extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Qualogy" title="Stock Cars"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map(product => {
                                       return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
