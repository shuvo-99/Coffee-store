// import React from "react";

import { useLoaderData } from "react-router-dom";
import "./UpdateCoffee.css";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const chef = event.target.chef.value;
    const supplier = event.target.supplier.value;
    const taste = event.target.taste.value;
    const category = event.target.category.value;
    const details = event.target.details.value;
    const photo = event.target.photo.value;
    event.target.reset();

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    // ===== Send form data to the server =====

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log("yes, inserted");
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <form className="form m-8" onSubmit={handleUpdateSubmit}>
        <div>
          <label className="form-control w-full p-20">
            <p className=" text-center text-3xl mb-5">Update Coffee: {name}</p>
            <div className="input_fields ">
              {/* Name - Chef */}
              <div>
                <p className="label">Name</p>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <p className="label">Chef</p>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter coffee chef"
                  className="input input-bordered w-full "
                />
              </div>

              {/* Supplier - taste */}
              <div>
                <p className="label">Supplier</p>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <p className="label">Taste</p>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full "
                />
              </div>

              {/* Category - Details */}
              <div>
                <p className="label">Category</p>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <p className="label">Details</p>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            {/* Photo */}
            <div>
              <p className="label">Photo</p>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="input input-bordered w-full "
              />
            </div>

            <button className="btn mt-5 "> Update Coffee</button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
