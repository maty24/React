import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

//viene del componente gifExpertApp
export const GifGrid = ({category}) => {

  const {img} = useFetchGifs(category)//es mas facil entender el codigo
  return (
    <div>
        <h4>{category}</h4>
        <div className='card-grid'>
          {
            img.map((i) =>(
              <GifItem key={i.id}
              {...i}//estoy madando todo la img , esparciendo todas
               />
            )) 
          }
          </div>
    </div>
  )
}
