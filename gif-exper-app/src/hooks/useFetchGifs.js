import {useEffect, useState} from 'react'
import {getGifs} from '../helpers/getGifs';


//traigo la category desde gifGrid
export const useFetchGifs = (category) => {
    const [img, setimg] = useState([])

    useEffect( () =>{
      getGifs(category)//le envio la category 
         .then(newImagenes =>setimg(newImagenes));//asi pongo los datos en ek state
    },[])
  
  return {
      img
  }
  
}
