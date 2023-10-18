import React from 'react'
import {Button} from 'react-bootstrap'
import {Outlet, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function RootElement() {
    const caarProduct = useSelector(state => state.caart);
    const navigate=useNavigate();
    return (
        <div className='outlate-wrapper'>
            <header
                className=' p-3  bg-white position-fixed vw-100 top-0 start-0 z-3 '>
                <div className="container w-100  d-flex justify-content-end">
                    <Button className=' btn-primary' onClick={()=>navigate('/cart')}>
                        Cart {caarProduct.length}
                    </Button>
                </div>
            </header>
            <Outlet/>
        </div>
    )
}
