import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {getWithBody} from "../http"
const GeoClient = () => {

  const [ip, setIp] = useState<string>('');
  const [result, setResult] = useState<string>();

  const handleChange = (event: any) => {
    setIp(event.target.value)
  }

  const handleSubmit = () => {
    getWithBody('geoService/', ip).then(res => {
      setResult(res)
    })
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
