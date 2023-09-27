import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
  const { name, image, title, price } = donation;
  return (
    <div>
      <div className="card w-[680px] h-[200px] mx-auto card-side shadow-xl">
        <figure><img className="w-[300px] h-full" src={image} alt="Movie" /></figure>
        <div className="ml-4 mt-3">
        <button className="  p-2 bg-red-300 text-white font-medium text-xl mb-2">{name}</button>
          <h2 className="text-2xl font-semibold text-[#0B0B0B]">{title}</h2>
          <h3 className="font-semibold text-xl">${price}</h3>
          <div className="card-actions ">
            <button className="btn btn-primary text-[#FFF] text-xl font-semibold">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
 DonationCard.propTypes ={
  donation: PropTypes.object.isRequired
 }
export default DonationCard;