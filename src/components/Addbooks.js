import React, { useEffect } from "react";
import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { useFormik } from "formik";
import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './Addbooks.css'

export default function Addbooks() {
    const navigate = useNavigate();
    let formik = useFormik({
      initialValues: {
        bookid:"",
        name: "",
        author:"",
        release:''
        
      },
      validate: (values) => {
        let errors = {};
        if (values.bookid === "") {
          errors.bookid = "please enter a Book_Id";
        }
        if (values.name === "") {
          errors.name = "please enter a Book_Name ";
        }
        if (values.author === "") {
          errors.author = "please enter a  Author_Name ";
        }
        if (values.release === "") {
          errors.release = "please enter a  Release_Date";
        }
       
        return errors;
      },
      // update the values
      onSubmit: async (values) => {
        await axios.post(
          `https://63ff3f15571200b7b7d92b4b.mockapi.io/books`,
          values
        );
        alert("successfully Book Created");
        navigate("/allbooks");
      },
    });
  
    
  return (
    <Base>
    <Grid container className="container">
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12}>
          <Box>
            <Card>
              <CardContent>
                <label>Book_Id</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.bookid}
                  onChange={formik.handleChange}
                  name="bookid"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.bookid}</span>
                <br></br>
                <label>Book_Name</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.name}</span>
                <br></br>
                <label>Author_Name</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.author}
                  onChange={formik.handleChange}
                  name="author"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.author}</span>
                <br></br>
                <label>Release_Date</label>
                <br></br>
                <input
                  type={"text"}
                  className="input"
                  value={formik.values.release}
                  onChange={formik.handleChange}
                  name="release"
                ></input>
                <br></br>
                <span style={{ color: "red" }}>{formik.errors.release}</span>
                <br></br>
                <div>
                  <Button
                    variant="contained"
                    className="btn"
                    type="submit"
                    value="submit"
                    disabled={!formik.isValid}
                  >
                    Create Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </form>
    </Grid>
  </Base>
  )
}
