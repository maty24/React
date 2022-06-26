import {useState} from 'react'
import { AddCategory , GifGrid} from './components'//archivo de barril


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Rengoku'])

    const onAddCategory = (e) => {
        //le digo si exite el nombre que le traigo en el array y por eso le pongo includes, 
        if(categories.includes(e)) return;
        setcategories([e,...categories ])//estoy sumando el argumento mas todo los objetos del state
    }

    //estoy mando setcategories al componente onAddCategory
    return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory
     //el onNewCategory me invente este nombre el argumento no
     onNewCategory={(e) => onAddCategory(e)}//me traigo el nombre del input 
     />
        {
            categories.map(i =>
            (
                <GifGrid
                //estoy enviando los argumentos a un componente 
                 key={i}
                 category={i}
                />
            ))
        }
    </>
  )
}
