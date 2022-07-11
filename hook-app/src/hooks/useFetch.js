 import {useEffect, useState} from 'react'

export const useFetch = (url) => {

  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

    const getFetch = async() =>{
      setstate({//traeme todo el state 
        ...state,
        isLoading:true,//esta cargando la data y lo pongo en true
      })
      const resp = await fetch(url);
      const data = await resp.json();

      setstate({
        data,//si es el mismo nombre no es necesario poner data: data
        isLoading: false,
        hasError:null
      })
      console.log(data);
    }

    useEffect(() =>{
        getFetch()

    },[url])//cada vez que se cambie el url el useEffect se dispara de lo contrario no 

    return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError
    }; 
}
