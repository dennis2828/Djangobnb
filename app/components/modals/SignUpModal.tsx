"use client"
import Modal from "./Modal";
import { useState } from "react";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";

const SignUpModal = () =>{
    const signUpModal = useSignUpModal();

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please login</h2>
            <form action="" className="space-y-4">
                <input type="email" placeholder="Your e-mail address" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input type="password" placeholder="Your password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
                <CustomButton label="Submit" onClick={()=>console.log("Test")}/>
            </form>
        </>
    )

    return (
        <Modal isOpen={signUpModal.isOpen} close={signUpModal.close} label="Sign up" content={content}/>
    )
}

export default SignUpModal;