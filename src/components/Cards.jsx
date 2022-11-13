import React, {useState, useEffect} from 'react'
import Card from './Card'

const Cards = () => {

    const [images, setImages] = useState([])

    const peticion = async () => {
        const res = await fetch ("https://api.unsplash.com/photos/?client_id=87MXqbFUg7AXuHL4M1jkiDHbiikMsMEAvHYU1X56ENE")

        const data = await res.json();        
        
        setImages(data);        
    }

    useEffect(() => {
      
        peticion();

    }, [])

    const [input, setInput] = useState("")
    
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