import { useEffect, useState } from "react"; 
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";

 
const Home = () => { 

  const [donation, setDonation] = useState([])

  useEffect( () =>{
    fetch('donation.json')
    .then(res=> res.json())
    .then(data=> setDonation(data)) 
  },[])

  return (
    <div> 
      <div className="text-center">
        <h1 className="text-5xl text-[#0B0B0B] font-bold ">I Grow By Helping People In Need </h1>
      </div>
      <form  className="text-center mt-12  ">
        <input className="border-2 p-2 w-1/2 "
          type="text"
          placeholder="Search..." 
          />
        <button className=" " type="submit">Search</button>
      </form>
      <div className="grid grid-cols-4 gap-4 mx-auto mt-6">
        {
          donation.map(donations=> <HomeDonationCard key={donations.id} donations={donations}></HomeDonationCard>)
        }
      </div>
    </div>
    
  );
};

export default Home;