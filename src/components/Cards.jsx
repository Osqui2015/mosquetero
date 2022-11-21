import React, {useState, useEffect, useCallback} from 'react'
//import { Router } from 'workbox-routing'
import Card from './Card'
import Loading from './Loading'

const Cards = () => {

    const [images, setImages] = useState([])

    const [input, setInput] = useState("")

    const [loading, setLoading] = useState(true)

    const peticion = useCallback (async () => {
        const key = "client_id=87MXqbFUg7AXuHL4M1jkiDHbiikMsMEAvHYU1X56ENE"

        let route = `https://api.unsplash.com/photos/?${key}`

        if (input !== ""){
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }
        
        setLoading (true)

        const res = await fetch (route)

        const data = await res.json();
        
        if (data.results) {
            setImages(data.results);
        }else{
            setImages(data);
        }
        setLoading (false)
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

        <div className="card">
            <hr/>
            
            <hr/>
                {loading && <Loading/>} 
                
                <div className="card-body text-white"  style={{ backgroundColor: "#FE6848" }} >
            { /*} <form className='mt-4' onSubmit={handleSubmit}>
                    <label> {" "} Buscar : <input type="text"  name='inputText'/> {" "} </label>
                    <button type='submit' className='btn btn-warning mx-2'><i class="bi bi-search"></i></button>
                </form> { */}                
                <p className="fs-3 fw-bold">MAS EVENTO </p>                
                </div>
            <br/>
                    <div className='row row-cols-2 row-cols-lg-5'>
                        {
                            images.map((img) => {
                                return <div key={img.id} className='col'>
                                    <Card  img={ img.urls.regular } />
                                </div>                                
                            })
                        }
                    </div>
               
            


        <form className='mt-4' onSubmit={handleSubmit}>
            <label> {" "} Buscar : <input type="text"  name='inputText'/> {" "} </label>
            <button type='submit' className='btn btn-warning mx-2'><i className="bi bi-search"></i></button>
        </form>
        <hr/><br/>

        {loading && <Loading/>} 

        <div className='row'>
            {
                images.map((img) => {
                    return <div key={img.id} className='col'>
                        <Card  img={ img.urls.regular } />
                    </div>                                
                })
            }

        </div>
       </div>
    </>
  )
}

export default Cards