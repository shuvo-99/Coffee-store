import React from "react";
import "./AddCoffee.css";

const AddCoffee = () => {
  return (
    <div>
      <form className="form m-8">
        <div>
          <label className="form-control w-full p-20">
            <p className=" text-center text-3xl mb-5">Add New Coffee</p>
            <div className="input_fields ">
              {/* Name - Chef */}
              <div>
                <p className="label">Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <p className="label">Chef</p>
                <input
                  type="text"
                  name="chef"
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
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <p className="label">Taste</p>
                <input
                  type="text"
                  name="taste"
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
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <p className="label">Details</p>
                <input
                  type="text"
                  name="details"
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
                placeholder="Enter photo URL"
                className="input input-bordered w-full "
              />
            </div>
            <button className="btn mt-5 "> Add Coffee</button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
