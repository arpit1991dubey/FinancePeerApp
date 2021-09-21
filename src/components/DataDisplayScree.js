import React, { useState,useEffect } from "react";
import { Card, Button, Alert, Image, Form } from "react-bootstrap";

import Finp from "../assets/Finp.png";
import axios from "axios";
import DataCard from "./DataCard";

const DataDisplay = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(async () => {
    const users = await axios.get("http://localhost:4000/api/users");
    setUserList(users.data);
    console.log(users)
  }, []);

  return (
    <div style={{display:"flex", flexDirection:'row',flexWrap:'wrap',height:"100%",width:'100%'}}>
      {userList.map((user) => {
        return <DataCard user={user} />;
      })}
    </div>
  );
};

export default DataDisplay;
