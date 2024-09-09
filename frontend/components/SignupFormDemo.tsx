'use client';
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";

export function SignupFormDemo() {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const contactResponse = await axios.post('http://localhost:8000/contact', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (contactResponse.status !== 201) {
        throw new Error('Failed to save data');
      }

    
      const emailResponse = await axios.post('http://localhost:8000/sendemail', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (emailResponse.status !== 200) {
        throw new Error('Failed to send email');
      }

      setData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
      toast.success('Your message has been sent successfully!'
        , {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error)
     {
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    if (e.currentTarget instanceof HTMLFormElement) {
      handleSubmit(e as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className="max-w-[70vw] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-100">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" name="firstname" onChange={handleChange} value={data.firstname}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" name="lastname" onChange={handleChange} value={data.lastname}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" name="email" onChange={handleChange} value={data.email}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" className="w-full h-40 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" placeholder="Your message here..." type="textarea" name="message" onChange={handleChange} value={data.message}/>
        </LabelInputContainer>

        <MagicButton
          title="Send"
          icons={<FaLocationArrow />}
          position="right"
          handleclick={handleButtonClick}
        />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
