import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { GetApiData } from '../server/Api';
import AllShimmer from '../components/AllShimmer';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const tabTitle = ["smartphones", "laptops", "skincare", "groceries"]
export default function Home() {
  const navigate=useNavigate()
  const [categories, setCategories] = useState([]);
  const [categorieslist, setCategorieslist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData(category = "smartphones") {
    let categoryStorage=JSON.parse(localStorage.getItem("categorylist"));
    console.log(categoryStorage)
    if(!categoryStorage){
      const response = await GetApiData(`https://dummyjson.com/products/categories`);
      localStorage.setItem("categorylist",JSON.stringify(response));
      setCategorieslist(response);
    }else{
      setCategorieslist(categoryStorage);
    }
    const response = await GetApiData(`https://dummyjson.com/products/category/${category}`);
    setCategories(response?.products);
    if (response?.products) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='main-home-section'>
 

      <div className="container bg-blue position-relative">
      <Button className='view-all-btn btn-primary  fw-bold'onClick={()=>navigate('/all/products?limit=6&page=0')}>View All</Button>
        <div className="text-center home-heading">
          <h4 className='fs-34-28 fw-bold text-center'>Featured Listed Products</h4>
          <p className='fs-16-13 fw-normal text-center mw-520 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam dolor similique, fugiat, molestiae amet magnam hic autem necsitatibus culpa!
          </p>
        </div>
        <div className="tabe-main-wrapper">
          <Tabs
            defaultActiveKey="smartphones"
            id="uncontrolled-tab-example"
            className="mb-3 tabs-wrapper"
            onSelect={(active) => fetchData(active)}
          >
            {categorieslist?.map((item, i) => {
              return (
                <Tab eventKey={item} title={item?.replace(/\b\w/g, match => match.toUpperCase())}>
                  <div className="product-wrapper-frame">
                    {isLoading ? (
                      <AllShimmer type="card" />
                    ) : (

                      categories?.map((item, i) => (
                        <Card data={item} key={i} />
                      ))

                    )}
                  </div>
                </Tab>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
