import React,{useState} from 'react'
import {useFetch} from '../hooks/useFetch'

export const UseFetch = () => {
  const [counter, setcounter] = useState(1)
    const {data, hasError, isLoading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author, quote} = !!data && data[0];

    const incremet = (value = 1) =>{
      setcounter(value + value)
    }

  return (
    <>
    <h1>Breakinbad Quotes</h1>
    <hr />
    {
      isLoading
        ?(
         <div className='alert alert-info  text-center'>
         Loading...
          </div>
        )
        :(
          <blockquote className='blockquote text-end'>
          <p className='mb-1'> {author}</p>
          <footer className='blockquote-footer'> {quote}</footer>
        </blockquote>
        )
    }
    <button
    className='btn btn-primary'
    onClick={() =>incremet()}
    >
      Next quote
    </button>
    </>
  )
}
