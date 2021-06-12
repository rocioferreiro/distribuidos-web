import React, {useState} from "react";
import {Button} from "@material-ui/core";

const GeoClient = () => {

  const [ip, setIp] = useState<string>('');
  const [result, setResult] = useState<string>();

  const handleChange = (event: any) => {
    setIp(event.target.value)
  }

  const handleSubmit = () => {
    //TODO: change to grpc
    setResult('result');
  }


  return (
    <div>
      <h1> Find some ip adress geo location! </h1>
      <input type='text' placeholder={'0.0.0.0'} value={ip}
             onChange={handleChange}/>
      <Button onClick={handleSubmit}> Submit </Button>
      {result ? <p> This ip is in {result} </p> : <></>}
    </div>
  )
}

export default GeoClient;
