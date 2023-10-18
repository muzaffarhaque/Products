import React, { useEffect, useLayoutEffect, useState } from 'react';
import AllShimmer from '../components/AllShimmer';
import Card from '../components/Card';
import { GetApiData } from '../server/Api';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ResponsivePagination from 'react-responsive-pagination';
import { Button } from 'react-bootstrap';

export default function AllProduct() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search,setSearch]=useState("")
  const param = useParams();
  const location = useLocation();
  const queryParams=new URLSearchParams(location.search)
  const navigate = useNavigate();
  console.log(location.search)
  const itemsPerPage = queryParams.get("limit") || 6;
  const itemsPageNo = queryParams.get("page") || 1;
  const itemsSearch = queryParams.get("q") || "";
  
  async function fetchData() {
  
    const newSkip = (itemsPageNo - 1) * itemsPerPage;
    const url = `https://dummyjson.com/products${itemsSearch ? `/search?q=${itemsSearch}&` : '?'}limit=${itemsPerPage}&skip=${itemsSearch?0:newSkip}`;
    const data = await GetApiData(url);
    setAllData(data);
    if (data.products) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [location.search]);

  const handlePageChange = (newPage) => {
    navigate(`/all/products?limit=${itemsPerPage}&page=${newPage}`);
  };
  const searchHandler=()=>{
    console.log("Cll serch")
    navigate(`/all/search?q=${search}&limit=${itemsPerPage}&page=${itemsPageNo}`);
  }
 
  return (
    <div className='bg-blue'>
      <div className="container">
        <div className="all-product-header ">
            <div className="serch-box-wrapper mb-full  d-flex gap-3">
                <input type="text" className='input-box fs-16-13 mb-full' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Serch Product' />
                <Button className={search?"btn-primary":'btn-secondary'} onClick={searchHandler}>Search</Button>
            </div>
            <Button className=' btn-primary mb-full' onClick={()=>navigate("/")}>Show Category Product</Button>
        </div>
        {isLoading ? (
          <div className="product-wrapper-frame">
            <AllShimmer type="card" />
          </div>
        ) : (
          <div className="">
            <h4 className='fs-24-16 fw-semibold'>
              All Products &nbsp;&nbsp;&nbsp;
              <span className='fs-18-14 fw-normal'>{allData?.total}</span>
            </h4>
            <div className="product-wrapper-frame">
              {allData.products?.map((item, i) => (
                <Card data={item}  key={i} />
              ))}
            </div>
            <div className="pagination-wrapper">
              <ResponsivePagination
                current={parseInt(itemsPageNo || "1")}
                total={Math.ceil(allData?.total / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
