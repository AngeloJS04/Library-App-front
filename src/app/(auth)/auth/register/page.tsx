'use client'
import { useForm } from '@/hooks/useForm';
import { useLoginMutation, useRegisterMutation } from '@/redux/rtk/auth';
import { ILoginResponse } from '@/redux/rtk/auth/auth.interfaces';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const RegisterPage = () => {

    const router = useRouter();
    const [register, resultData] = useRegisterMutation({});

    const { form, onChange } = useForm({
        email: "",
        username: "",
        password: "",
    });
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await register(form).unwrap();
            router.push('/auth/login')
            Swal.fire({
                toast: true,
                timer: 3000,
                icon: result?.error ? "error" : "success",
                text: result?.error ? result.error.message : "Logged Success",
            });
        } catch (error) {
            const errorRequest: ILoginResponse = error as ILoginResponse;
            Swal.fire({
                toast: true,
                timer: 3000,
                icon: "error",
                text: errorRequest?.error?.message || "Error",
            });
        }
    };
    return (
        <div className='flex justify-center items-center mt-14'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-6">Register</h2>
                    <form onSubmit={onSubmit}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow" onChange={(e) => onChange(e.target.value, "username")} required />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow" onChange={(e) => onChange(e.target.value, "email")} required />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" onChange={(e) => onChange(e.target.value, "password")} placeholder="••••••••" required />
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                Registrar
                            </button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <span>tienes una cuenta?</span>
                        <a onClick={() => router.push('/auth/login')} className="link link-primary">Entra</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage