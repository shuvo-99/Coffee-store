import "./CoffeeCard.css";

const CoffeeCard = (pros) => {
  const { name, chef, taste, photo } = pros.coffee;
  return (
    <div>
      <div className="coffee_card card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <b>Name: </b>
            {name}
          </h2>
          <p>
            <b>Chef: </b>
            {chef}
          </p>
          <p>
            <b>Taste: </b>
            {taste}
          </p>
          <p>
            <b>Price: </b>890 Tk
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
