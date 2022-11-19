import React from 'react'
import { useParams } from 'react-router-dom'
import Rate from './rate';

function Trailer({movies}) {
    const params=useParams();
    const movie= movies.filter((el)=> el.id== params.id)[0];
    
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img src={movie.image}/>
        <h1>{movie.name}</h1>
        <h1>{movie.description}</h1>
        <Rate rating={movie.rating} />
    </div>
  )
}

export default Trailer