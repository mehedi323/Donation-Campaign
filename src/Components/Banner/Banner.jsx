import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

 
const Banner = () => {
  return (
    <div className="bg-white"> 
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Banner;