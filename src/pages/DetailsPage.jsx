import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { GetApiData } from '../server/Api';
import { useParams } from 'react-router-dom';

import AllShimmer from '../components/AllShimmer';

export default function DetailsPage() {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const data = await GetApiData(`https://dummyjson.com/products/${params.id}`);
      setDetails(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <section className='details-page-section'>
      <div className='container'>
        <div className='details-header pt-4 pb-0'>
        <Button variant="outline-info" onClick={() => window.history.back()} >Back</Button>
        </div>
        {loading ? (
          <AllShimmer type="details"/>
        ) : (
          <>
            <div className='details-heading d-flex  '>
              <div className='imge-box'>
                <Image src={details?.thumbnail} alt='Thumbnail' />
              </div>
              <div className='content-box'>
                <h4 className='fs-28-18 fw-bold text-start'>{details?.title || 'Title of Product'}</h4>
                <div className='d-flex align-items-center gap-4 justify-content-start'>
                  <span className='fs-16-13  fw-medium'>
                    <span className=' '>Category :</span> &nbsp; {details?.category}
                  </span>
                  <span className='fs-16-13 fw-medium'>
                    <span className=' '> Brand: </span> &nbsp;{details?.brand}
                  </span>
                  <span className='fs-16-13 fw-medium'>
                    <span className=' '> Rating:</span> &nbsp;{details?.rating}
                  </span>
                </div>
              </div>
            </div>
            <p className='fs-18-14 fw-medium mb-4 mt-3'>
              {details?.description ||
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error saepe repellat nam impedit explicabo suscipit animi. Voluptate, a facilis odit veniam, eveniet illum aperiam nisi est blanditiis tempora in aut?'}
            </p>
            <h5 className='fs-24-16 fw-semibold '>Review more Product Images :</h5>
            <div className='porduct-image-gallary'>
              {details?.images.map((item, i) => {
                return <Image key={i} src={item} alt='image' className='product-img' />;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
