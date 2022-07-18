import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {

        setState({
            ...state,//traeme todo el state 
            isLoading: true,//esta cargando la data y lo pongo en true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,//si es el mismo nombre no es necesario poner data: data
            isLoading: false,
            hasError: null,
        });
    }


    useEffect(() => {
        getFetch();
    }, [url])//cada vez que se cambie el url el useEffect se dispara de lo contrario no 
    


    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
