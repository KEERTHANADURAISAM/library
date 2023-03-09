import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Base from "../Base/Base";
import { Card, CardContent, Typography } from "@mui/material";

export default function View() {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);
  let loaddata = async () => {
    try {
      let student = await axios.get(
        `https://63ff3f15571200b7b7d92b4b.mockapi.io/books/${params.id}`
      );
      setUser(student.data);
    } catch (err) {}
  };
  return (
    <Base>
      <Card
        sx={{
          maxWidth: 545,
          marginLeft: 80,
          marginTop: 10,
          padding: 5,
          textAlign: "justify",
          fontFamily: "monospace",
        }}
      >
        <CardContent>
          <Typography>
            <b>book_Id:</b>
            {user.bookid}
          </Typography>
          <Typography>
            <b>Book Name:</b>
            {user.name}
          </Typography>
          <Typography>
            <b>Author_Name:</b>
            {user.author}
          </Typography>
          <Typography>
            <b>Release_Date:</b>
            {user.release}
          </Typography>
         
        </CardContent>
      </Card>
    </Base>
  );
}

