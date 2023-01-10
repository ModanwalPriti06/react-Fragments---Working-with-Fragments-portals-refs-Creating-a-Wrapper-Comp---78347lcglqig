import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
   const numbers=listx;

  return(
    <>
    {numbers.map((number) =>
      <ListItems key={number.toString()}
                valuex={number} />
    )}
  </> 
    
  )
}

export default List;
