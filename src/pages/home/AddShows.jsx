import React, { useEffect, useState, useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import { usePosts } from '../../context/postContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { AuthContext } from '../../contexts/auth'




const AddShows = () => {

    const {createPost, getPosts, updatePost} = usePosts ()
    const { token } = useContext(AuthContext);
    const navigate = useNavigate ()
    const params = useParams()
    
    const [posts, setPosts] = useState({
        artist: '',
        image: '',
        show: '',
        blog: '',
        imageslider: '',
        state:'No'
    })
    
    useEffect (()=>{
        (async () => { 
            if (params.id){
                const results = await getPosts(params.id)
                
                setPosts({
                   artist:  results.artist,
                    image: results.image,
                    show: results.show,
                    blog: results.blog,
                    imageslider: results.imageslider,
                    state: results.state
                })
            }
         })();
    }, [params.id, getPosts]);
    

  return (
    
  <div>
        <Formik
            initialValues={posts}

            validationSchema={Yup.object({
                artist: Yup.string().required('Añadir texto'),
                image: Yup.string().required('Añadir imagen'),
                show: Yup.string().required('Añadir show'),
                blog: Yup.string().required('Añadir blog'),
                imageslider:Yup.string().required('Añadir imagen portada'),
                state:Yup.string().required('Añadir estado')
            })}

            onSubmit={async (values, actions) => {

                if (params.id){
                    await updatePost(params.id, values, token)
                }else{
                    await createPost(values, token)
                }
                navigate ('/')
            }}

            enableReinitialize
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div className="container">
                            
                        <br /><br /><hr/>
                        <div className="row mt-4">
                            <Field name="artist" className="form-control" placeholder="Artist" />
                            <ErrorMessage component="p"  name="artist" className="font-monospace text-danger" />
                        </div>
                        <div className="row mt-4">
                            <Field name="image" className="form-control" placeholder="image URL" />
                            <ErrorMessage  component="p" name="image" className="font-monospace text-danger" />
                        </div>
                        <div className="row mt-4">
                            <Field component="textarea" name="show" className="form-control" placeholder="show" />
                            <ErrorMessage  component="p" name="show" className="font-monospace text-danger" />
                        </div>
                        <div className="row mt-4">
                            <Field component="textarea" name="blog" className="form-control" placeholder="blog" rows={3} />
                            <ErrorMessage  component="p" name="blog" className="font-monospace text-danger" />
                        </div>
                        <div className="row mt-4">
                            <Field name="imageslider" className="form-control" placeholder="imageslider URL" />
                            <ErrorMessage  component="p" name="imageslider" className="font-monospace text-danger" />
                        </div>
                        <div className='mt-4' id="my-radio-group">Destacar</div>
                        <div className='mt-4' role="group" aria-labelledby="my-radio-group">
                            <label>
                            <Field type="radio" name="state" value="Si" className="mx-4" />
                                Si
                            </label>
                            <label>
                            <Field type="radio" name="state" value="No" className="mx-4"  />
                                No
                            </label>
                        </div>




                        <hr/>
                        <button type='submit' className="btn btn-success mx-3">
                                Guardar
                        </button>
                        <Link to="/" className='btn btn-warning mx-3'>
                            Cancelar
                        </Link>
                    </div>
                    
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default AddShows