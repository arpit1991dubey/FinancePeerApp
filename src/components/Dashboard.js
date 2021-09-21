import React, { useState } from "react";
import { Card, Button, Alert, Image, Form ,Container} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Finp from "../assets/Finp.png";
import Datadisp from '../components/DataDisplayScree';
import axios from 'axios';
export default function Dashboard() {
  const [error, setError] = useState("");
  const [files, setFiles] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  const routeChange = () =>{
    let path = `/datadisplay`;
    history.push(path);
  }
  const onButtonPress = async(e) => {
    let formData=new FormData();
    formData.append("file",files);
    let response = await axios.post('localhost:4000/api/upload',formData,
      {
        headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  )
  };
  const handleFile=(e)=>{
    setFiles(e.target.files[0]);
  }

  return (
    <>
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
     <div className="w-100" style={{ maxWidth: "400px" }}>
      <Image src={Finp} fluid />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">File Upload</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Signed in as :</strong> {currentUser.email}
          <div style={{ marginTop: 10 }}>
            <input type="file" onChange={handleFile} />
          </div>
        </Card.Body>
        <Button
         onClick={async() => {
         // await onButtonPress()
            routeChange()
          }}
         variant="link">
           Uplaod File
           </Button>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button 
        variant="link" 
       
        >
          Log Out
        </Button>
        {/* <Button variant="link" Link to="/update-profile">
          Update Profile
        </Button> */}
      </div>
      </div>
      </Container>
    </>
  );
}
