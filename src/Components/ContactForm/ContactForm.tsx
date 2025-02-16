import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import axios from "axios";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const initialState: IFormData = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await axios.post(
        "https://www.greatfrontend.com/api/questions/contact-form",
        formData
      );
      if (response?.status === 200) {
        setFormData(initialState);
        alert("Submitted Successfully");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) alert(error.response?.data);
      else alert("An unexpected error occured");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        name="name"
        label="Name"
        placeHolder="Enter name"
        type="text"
        value={formData.name}
        handleChange={handleChange}
      />
      <Input
        id="email"
        name="email"
        label="Email"
        placeHolder="Enter email"
        type="email"
        value={formData.email}
        handleChange={handleChange}
      />
      <TextArea
        id="message"
        name="message"
        label="Message"
        value={formData.message}
        placeHolder="Enter message"
        handleChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {!loading ? "Send" : "Sending..."}
      </button>
    </form>
  );
};

export default ContactForm;
