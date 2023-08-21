import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userLoginconstext } from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [loginuser,setloginuser]=useContext(userLoginconstext);
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue={loginuser.name} {...register("example")} />
          <input defaultValue={loginuser.email} {...register("example1")} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      );
};

export default Shipment;