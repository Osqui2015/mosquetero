import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import { usePosts } from '../../context/postContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'


const AddShows = () => {

    const {createPost, getPosts, updatePost} = usePosts ()
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
                console.log (results)
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
                artist: Yup.string().required('add text'),
                image: Yup.string().required('add text'),
                show: Yup.string().required('add text'),
                blog: Yup.string().required('add text'),
                imageslider:Yup.string().required('add text'),
                state:Yup.string().required('add text')
            })}

            onSubmit={async (values, actions) => {

                if (params.id){
                    await updatePost(params.id, values)
                }else{
                    await createPost(values)
                }
                navigate ('/')
            }}

            enableReinitialize
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div class="container">
                            
                        <br /><br /><hr/>
                        <div class="row mt-4">
                            <Field name="artist" className="form-control" placeholder="Artist" />
                            <ErrorMessage component="p"  name="artist" className="font-monospace text-danger" />
                        </div>
                        <div class="row mt-4">
                            <Field name="image" className="form-control" placeholder="image URL" />
                            <ErrorMessage  component="p" name="image" className="font-monospace text-danger" />
                        </div>
                        <div class="row mt-4">
                            <Field component="textarea" name="show" className="form-control" placeholder="show" />
                            <ErrorMessage  component="p" name="show" className="font-monospace text-danger" />
                        </div>
                        <div class="row mt-4">
                            <Field component="textarea" name="blog" className="form-control" placeholder="blog" rows={3} />
                            <ErrorMessage  component="p" name="blog" className="font-monospace text-danger" />
                        </div>
                        <div class="row mt-4">
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
                            CANCELAR
                        </Link>
                    </div>
                    
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default AddShows