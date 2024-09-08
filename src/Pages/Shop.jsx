import React from 'react'
import Home from '../Pages/Home';
import Popular from '../Components/Popular/Popular';
import Browse from '../Components/Browse/Browse';
// import NewCollections from '../Components/NewCollections/NewCollections';

const Shop = () => {
  return (
    <div> 
        <Home />
        <Popular />
        <Browse/>
        {/* <NewCollections/> */}
    </div>
  )
}

export default Shop