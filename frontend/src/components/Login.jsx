import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Login = () => {
    const [message, setMessage] = useState('');
      const { register, handleSubmit, formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
    return (
        <section className='h-screen flex items-center justify-center p-2'>
            <div className='shadow bg-white p-8 max-w-sm mx-auto'>
                <h2 className='text-2xl font-semibold pt-5'>Please Login!</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 max-w-sm mx-auto pt-6'>
                    <input
                    {...register("email", { required: true })}
                    type="email" placeholder='Email' className='w-full bg-gray-100 focus:outline-none px-5 py-3 rounded-sm' />

                    {errors.email && <span className='text-red-500'>Email is required</span>}

                    <input
                    {...register("password", { required: true })}
                    type="password" placeholder='password' className='w-full bg-gray-100 focus:outline-none px-5 py-3 rounded-sm' />

                     {errors.password && <span className='text-red-500'>Password is required</span>}

                    <button className='w-full mt-5 bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md'>Login</button>
                </form>

                 <div className='my-5 italic text-center'>Don't have account? <Link to="/register" className='text-red-700 px-1 underline cursor-pointer'>Register</Link> here.</div>
            </div>
        </section>
    );
};

export default Login;