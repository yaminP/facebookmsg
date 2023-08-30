import React from "react";
import StickyBox from "./Stickybox";

const TestStick = () => (
    <div className="row">
      <StickyBox offsetTop={10} offsetBottom={10} bottom style={{alignSelf: "flex-end"}}>
        <div className="text-white p-5 my-10 bg-blue-500">
            <button className="bg-blue-500" >Sidebar</button>
        </div>
      </StickyBox>
      <div>Content</div>
    </div>
  )
  export default TestStick;