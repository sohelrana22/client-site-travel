import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/travels',data)
      .then(res =>{
          if(res.data.insertedId){
              alert('added successfully')
              reset();
          }
      })
    };
    return (
        <div>
           <div className="header">
           <h2>Please add a Service</h2>
           </div>
           <div className="add-service">
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("price", { required: true, maxLength: 20 })} placeholder="Price" />
      <textarea {...register("detail")} placeholder="Detail" />
      <input {...register("img")} placeholder="image-url" />
      <input type="submit" />
    </form>
           </div>
        </div>
    );
};

export default AddService;