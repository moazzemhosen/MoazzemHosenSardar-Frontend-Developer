import React, { useState } from 'react'

const Search = ({data,setData}) => {
    let [searchData,setSearchData]=useState({});

    let handleChange=(e)=>{
      let {name,value}=e.target;
      setSearchData({...searchData,[name]:value})
    }
    const handleSearch=()=>{
       console.log(searchData);
       let {searchType,searchValue}=searchData;
       let updatedData=data.filter((e)=>e[searchType] === searchValue);
       setData(updatedData)
    }
  return (
    <div className='m-8'>
        <h2 className='font-bold'>Search</h2>
        <select className='border-double border-4 border-indigo-300' name="searchType" id="" onChange={(e)=>{handleChange(e)}}>
            <option> Select Search Type</option>
            <option value="status">status</option>
            <option value="original_launch">original_launch</option>
            <option value="type">type</option>
        </select>
        <input className='border-double border-4 border-indigo-300' name='searchValue' type="text"  onChange={(e)=>{handleChange(e)}}/>
        <button className='border-double border-4 border-indigo-300 font-bold bg-slate-900 text-white' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search