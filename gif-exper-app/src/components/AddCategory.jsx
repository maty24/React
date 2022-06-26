import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) =>{
        setinputValue(target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        onNewCategory(inputValue.trim()) 
        setinputValue('')
    } 
  return (
    <form onSubmit={onSubmit}>
        <input
         type="text"
         placeholder='Buscar gifs'
         value={inputValue}
         onChange={onInputChange}
          />
    </form>
  )
}
