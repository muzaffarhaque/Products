import React from 'react'
import {useSelector} from 'react-redux'
import Card from './Card';
import {Button} from 'react-bootstrap';

export default function AddToCartData() {
    const selectedProduct = useSelector(state => state.caart);
    return (
        <section>
            <div className='container py-3'>
                <Button variant="outline-info" onClick={() => window.history.back()}>Back</Button>

                <div className="product-wrapper-frame">
                    {selectedProduct.length !== 0
                        ? selectedProduct
                            ?.map((item, i) => (<Card data={item} buy={true} key={i}/>))
                            : <h1 className='text-center py-4'>No any Product</h1>
}
                </div>
            </div>
        </section>
    )
}
