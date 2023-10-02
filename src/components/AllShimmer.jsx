import React from 'react'
import { Button } from 'react-bootstrap'

export default function AllShimmer({ type }) {
    switch (type) {
        case "details":
            return (
                <>
                    <div className='details-heading d-flex'>
                        <div className='imge-box shimmer mw-60 h-60 rounded-5'>
                            &nbsp;
                        </div>
                        <div className='content-box w-100'>
                            <h4 className='fs-28-18 fw-bold text-start w-75 shimmer'>&nbsp;</h4>
                            <div className='d-flex align-items-center gap-4 justify-content-start'>
                                <span className='fs-16-13 shimmer mw-150 fw-medium'>
                                    &nbsp;
                                </span>
                                <span className='fs-16-13 shimmer mw-150 fw-medium'>
                                    &nbsp;
                                </span>
                                <span className='fs-16-13 shimmer mw-150 fw-medium'>
                                    &nbsp;
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className=' fs-24-16 shimmer mw-100 fw-medium mb-4 mt-3'>&nbsp; </p>
                    <h5 className='fs-18-14 fw-semibold shimmer w-25'>&nbsp;</h5>
                    <div className='porduct-image-gallary'>
                        {[...Array(5)].map((item, i) => {
                            return <div key={i} className='product-img shimmer ' ></div>;
                        })}
                    </div>
                </>
            )
        case "card":
            return (
                [...Array(3)].map((item, i) => {
                    return (
                        <div className="card-wrapper">
                            <div className='prod-img pointer shimmer'  ></div>
                            <div className="description-box">
                                <h6 className='fs-14-12 fw-medium mt-1 shimmer mw-150  text-start black-2'>&nbsp; </h6>
                                <h4 className='fs-24-16 fw-bold eclipes-1 pointer shimmer' >{" "}</h4>

                                <h5 className='fs-16-13 mt-3 shimmer mw-150  fw-medium'> &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                                <div className="basic-product d-flex align-items-center justify-content-between my-2 gap-3">
                                    <span className='fs-16-13 mw-101 shimmer  fw-medium'> &nbsp;</span>
                                    <span className='fs-16-13 mw-101 shimmer fw-medium'> &nbsp;</span>
                                </div>
                                <div className="product-price-details d-flex align-items-center flex-wrap justify-content-between mt-4 gap-3">
                                    <h3 className='fs-24-16 primary fw-bold mb-0 shimmer mw-101'> &nbsp;</h3>
                                    <Button variant=" fw-bold rounded-5 mw-101 shimmer ">&nbsp;&nbsp;&nbsp;</Button>
                                </div>
                            </div>
                        </div>
                    )
                })

            )
        default:
            return (
                <div>AllShimmer</div>
            )

    }

}
