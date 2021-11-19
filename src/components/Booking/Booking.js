import React, { useEffect, useState } from "react";
import "./Booking";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const email = sessionStorage.getItem("email");
  useEffect(() => {
    fetch(`https://devcenter.heroku.com/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     data.email = email;
    data.status = "pending";

    fetch("https://devcenter.heroku.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result)); 
    console.log(data);
  };

  return (
    <div>
       <div className="booking-container">
        <div className="row container">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-50" src={service?.image} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> Price: {service?.price} $</h1>
            <h1 className="text-danger"> food type: {service?.model}</h1>
          </div>
          <div className="col-md-6">
            <h1>Booked Food</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="comments"
                
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={service?.price}
                
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={service?.image}
                
                className="p-2 m-2 w-100"
              />
              <br />
              <select {...register("model")} className="p-2 m-2 w-100">
                <option value={service?.model}>{service?.model}</option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-danger w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
