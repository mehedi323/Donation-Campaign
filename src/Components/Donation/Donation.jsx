import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";



const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [dataLength, setDataLength] = useState(4)
  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => setDonations(data))
  }, [])
  return (
    <div className="" >
      <div className="grid grid-cols-2 gap-6 mt-12">
        {
          donations.slice(0, dataLength).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
        }
      </div>
      <div className="text-center   mt-6">
        <div className={dataLength === donations.length && 'hidden'}>
          <button
            onClick={() => setDataLength(donations.length)}
            className="btn btn-primary  text-center">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default Donation;