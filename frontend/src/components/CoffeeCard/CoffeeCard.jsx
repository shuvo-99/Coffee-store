import Swal from "sweetalert2";
import "./CoffeeCard.css";
import { Link } from "react-router-dom";

const CoffeeCard = (pros) => {
  const { _id, name, chef, taste, photo } = pros.coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // ===== Send data for delete to the server =====

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = pros.coffees.filter((cof) => cof._id !== id);
              pros.setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="coffee_card card lg:card-side bg-base-100/[.06] shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="card_info mt-4">
          {/* Card Details */}

          <div>
            <p>
              <b>Name: </b>
              {name}
            </p>
            <br />
            <p>
              <b>Chef: </b>
              {chef}
            </p>
            <br />
            <p>
              <b>Taste: </b>
              {taste}
            </p>
            <br />
            <p>
              <b>Price: </b>890 Tk
            </p>
          </div>

          {/* Card Buttons */}

          <div className=" mx-auto">
            <div>
              <button className="btn btn-xs sm:btn-sm md:btn lg-btn w-20">
                View
              </button>
            </div>
            <br />
            <div>
              <Link to={`/updatecoffee/${_id}`}>
                <button className="btn btn-xs sm:btn-sm md:btn lg-btn w-20">
                  Update
                </button>
              </Link>
            </div>
            <br />
            <div>
              <button
                className="btn w-20 bg-orange-400 text-white"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
