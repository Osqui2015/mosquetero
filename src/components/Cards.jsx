import React, {useState, useEffect, useCallback} from 'react'
import { Router } from 'workbox-routing'
import Card from './Card'

const Cards = () => {

    const [images, setImages] = useState([])

    const [input, setInput] = useState("")

    const peticion = useCallback (async () => {
        const key = "client_id=87MXqbFUg7AXuHL4M1jkiDHbiikMsMEAvHYU1X56ENE"

        let route = `https://api.unsplash.com/photos/?${key}`

        if (input !== ""){
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }
        
        const res = await fetch (route)

        const data = await res.json();
        
        if (data.results) {
            setImages(data.results);
        }else{
            setImages(data);
        }                      
    }, [input])

     

    useEffect(() => {
        peticion();
    }, [peticion])

    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const text = e.target[0].value;

        setInput(text)
    }

  return (
    <>

        <form className='mt-4' onSubmit={handleSubmit}>
            <label> {" "} Buscar : <input type="text"  name='inputText'/> {" "} </label>
            <button type='submit' className='btn btn-warning mx-2'><i class="bi bi-search"></i></button>
        </form>
        <hr/><br/>
        <div className='row'>
            {
                images.map((img) => {
                    return <div key={img.id} className='col'>
                        <Card  img={ img.urls.regular } />
                    </div>                                
                })
            }
        </div>
        
       
    </>
  )
}

export default Cards