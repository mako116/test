import React,{ useState} from 'react'
import "../SearchPages/searchBar.css"
import ProductList from '../ProductCards/ProductList'
 import productss from '../../assets/data/workers'
 
 
const SearchBar = () => {
 
    const [MenuProducts]=useState(productss)
   
    // const filter = (type)=>{
    // setMenuProducts(productss.filter((product)=>product.type === type))    
    // }
  return (
    <>
      <div className="search__bar">
        <form>
               <div className='  form__group form__group-fast'>
            <span><i className='ri-map-pin-line'></i></span>
           <div className="form">
           {/* onChange={hanlesearch} */}
            <input type="text" placeholder='find jobs' />
                <button className="" type='submit'>search</button>
           </div>
        </div>
          <div className='d-flex gap-3 form__groups form__group-fast'>
            <span><i className='ri-map-pin-line'></i></span>
           <div>
           {/* onChange={handlefilter} */}
           {/* <ul className='menu'>
           <select >
           <option>Filter Latest</option>
          <option onClick={()=> setMenuProducts(productss)}>All</option>
          <option onClick={()=> filter ("mechanical")}>Mechanical</option>
          <option onClick={()=> filter ("computer")}>Computer</option>
          <option onClick={()=> filter ("digital")}>Digital</option>
          <option onClick={()=> filter ("business")}>Business</option>
          <option onClick={()=> filter ("agricultural")}>Agricultural</option>
          <option onClick={()=> filter ("graphics")}>Graphics</option>
          <option onClick={()=> filter ("webDeveloper")}>WebDeveloper</option>
          <option onClick={()=> filter ("full")}>Full</option>
          </select>
        </ul> */}
           
            {/* <h6>Location</h6>
            <input type="text" placeholder='where are you going?' ref={locationRef}/> */}
           </div>
        </div>
        
        </form>
        <div className="">
        {
            MenuProducts.length === 0?(
               <h1 className='text-center'>No products are found!</h1>) :(

             <ProductList data={productss}/>
          )}
        </div>
     </div>
     </>
  )
}

export default SearchBar
