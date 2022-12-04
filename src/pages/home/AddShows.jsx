import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { usePosts } from "../../context/postContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const AddShows = () => {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          artist: "",
          image: "",
          show: "",
          blog: "",
          imageslider: "",
        }}
        validationSchema={Yup.object({
          artist: Yup.string().required("add text"),
          image: Yup.string().required("add text"),
          show: Yup.string().required("add text"),
          blog: Yup.string().required("add text"),
          imageslider: Yup.string().required("add text"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div class="container">
              <br />
              <br />
              <hr />
              <div class="row mt-4">
                <Field
                  name="artist"
                  className="form-control"
                  placeholder="Artist"
                />
                <ErrorMessage
                  component="p"
                  name="artist"
                  className="font-monospace text-danger"
                />
              </div>
              <div class="row mt-4">
                <Field
                  name="image"
                  className="form-control"
                  placeholder="image URL"
                />
                <ErrorMessage
                  component="p"
                  name="image"
                  className="font-monospace text-danger"
                />
              </div>
              <div class="row mt-4">
                <Field
                  name="show"
                  className="form-control"
                  placeholder="show"
                />
                <ErrorMessage
                  component="p"
                  name="show"
                  className="font-monospace text-danger"
                />
              </div>
              <div class="row mt-4">
                <Field
                  name="blog"
                  className="form-control"
                  placeholder="blog"
                />
                <ErrorMessage
                  component="p"
                  name="blog"
                  className="font-monospace text-danger"
                />
              </div>
              <div class="row mt-4">
                <Field
                  name="imageslider"
                  className="form-control"
                  placeholder="imageslider URL"
                />
                <ErrorMessage
                  component="p"
                  name="imageslider"
                  className="font-monospace text-danger"
                />
              </div>
              <hr />
              <button type="submit" className="btn btn-success">
                Success
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddShows;