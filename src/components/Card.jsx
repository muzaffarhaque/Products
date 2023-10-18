import React from 'react'
import { Button, Image } from "react-bootstrap";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { add } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
export default function Card({data,buy=false}) {
    const navigat=useNavigate();
    const dispatch=useDispatch();
    function addTOCart(e){
      dispatch(add(e));
    }
  return (
    <div className="card-wrapper">
    <Image className='prod-img pointer' onClick={()=>navigat(`/details/${data.id}`)} src={data.thumbnail} alt="image" />
    <div className="description-box">
      <h6 className='fs-14-12 fw-medium mt-1  text-start black-2'><MdOutlineLocationOn className='location' />&nbsp;  987456 pac </h6>
      <h4 className='fs-24-16 fw-bold eclipes-1 pointer' onClick={()=>navigat(`/details/${data.id}`)} title={data.title}>{data.title}</h4>

      <h5 className='fs-16-13 mt-3  fw-medium'><span className=' fw-bold'>Category :</span> &nbsp; {data.category}</h5>
      <div className="basic-product d-flex align-items-center justify-content-between my-2 gap-3">
        <span className='fs-16-13  fw-medium'><span className=' fw-bold'> Brand: </span> &nbsp;{data.brand}</span>
        <span className='fs-16-13  fw-medium'><span className=' fw-bold'> Rating:</span> &nbsp;{data.rating}</span>
      </div>
      <div className="product-price-details d-flex align-items-center flex-wrap justify-content-between mt-4 gap-3">
         <h3 className='fs-24-16 primary fw-bold mb-0'> $ {data.price || 404}/-</h3>
         <Button variant="outline-primary  fw-bold rounded-1 " onClick={()=>addTOCart(data)}>{buy?"Buy Now":"Add to Cart"} </Button>
      </div>
    </div>
  </div>
  )
}
