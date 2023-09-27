
const HomeDonationCard = ({ donations }) => {
  console.log(donations);
  const { name, image, title, price, descreiption } = donations;
  return (
    <div>
      <div>
        <div className="card w-96 mx-auto shadow-xl mb-12">
          <figure><img className="w-full" src={image} alt="" /></figure>
          <div className="mt-3 mb-3 ml-3">
            <button className=" font-medium text-xl mb-2">{name}</button>
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDonationCard;


