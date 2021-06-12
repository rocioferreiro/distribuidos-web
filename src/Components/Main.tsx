import React from "react";
import {Link} from "@material-ui/core";

const MainPage = () => {
  return (
    <div>
      <br/>
      <Link href={'/geo'}> Use Geo Service</Link>
      <br/>
      <br/>
      <br/>
      <Link href={'/products'}> Use Product Service</Link>
    </div>
  )
}

export default MainPage;
