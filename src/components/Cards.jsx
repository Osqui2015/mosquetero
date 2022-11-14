import React, {useState, useEffect} from 'react'
import { Router } from 'workbox-routing'
import Card from './Card'

const Cards = () => {

    const [images, setImages] = useState([])

    const [input, setInput] = useState("")

    const peticion = async (endpoint = "") => {
        const key = "client_id=87MXqbFUg7AXuHL4M1jkiDHbiikMsMEAvHYU1X56ENE"

        let route = `https://api.unsplash.com/photos/?${key}`

        if (endpoint !== ""){
            route = `https://api.unsplash.com/search/photos/?query=${input}&${key}`
        }
        
        const res = await fetch (route)

        const data = await res.json();        
        
        setImages(data);        
    }

    useEffect(() => {
      
        peticion();

    }, [input])

    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const text = e.target[0].value;

        setInput(text)
    }

  return (
    <>

        <form onSubmit={handleSubmit}>
            <label> Buscar : <input type="text" name='inputText'/> {""} </label>
        </form>
        <hr/><br/>
        {
            images.map((img) => {
                return <Card key={img.id} img={ img.urls.regular } />          
            })
        }
       
    </>
  )
}

export default Cards