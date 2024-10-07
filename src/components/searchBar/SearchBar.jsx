import { useState } from 'react'
import './searchBar.scss'

let types=["Buy","Rent"];
function SearchBar(){
  const [query,setQuery]=useState({
    type:"Buy",
    location:"",
    minPrice:"",
    maxPrice:""
  });
  const switchType=(val)=>{
    setQuery((prev)=>({...prev,type:val}));
  }
  return (
    <div className='searchBar'>
        <div className="type">
            {types.map((it)=>(
              <button key={it} onClick={()=>switchType(it)} className={query.type==it?"active":""}>{it}</button>
            ))}
        </div>
        <form action="">
            <input type="text" name="location" id="" placeholder='City Location' />
            <input type="text" name="minPrice" id="" placeholder='Min Price' min={0} max={100000000} />
            <input type="text" name="minPrice" id="" placeholder='Max Price' min={0} max={100000000}/>
            <button className='search'>
                <img src="/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar