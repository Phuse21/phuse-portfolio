"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import CustomFormField from "./CustomFormField";
import { SelectItem } from "./ui/select";
import SubmitButton from "./SubmitButton";
import { sendQuery } from "@/lib/email";

// Define Zod schema
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d+$/, "Phone number must contain only digits"),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export const FormFieldType = {
  INPUT: "input",
  TEXTAREA: "textarea",
  SELECT: "select",
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit({
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
  }) {
    setIsLoading(true);
    setSuccessMessage(""); // Clear any previous success message

    try {
      const queryData = {
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
      };

      console.log(queryData);

      await sendQuery(queryData);
      setIsLoading(false);
      setSuccessMessage("Message sent successfully!");

      // Reset form fields
      form.reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-10 bg-[#27272c]/5 dark:bg-[#27272c] rounded-xl"
      >
        <h3 className="text-4xl text-accent">Let's work together</h3>
        <p className="text-[#1c1c22] dark:text-[#ffffff]/60">
          Whether you’re looking to build a website, design a user-friendly
          interface, or create a custom robocall solution, I’m here to help
          bring your ideas to life. Let’s collaborate and create something
          amazing!
        </p>

        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="firstName"
            placeholder="First Name"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="lastName"
            placeholder="Last Name"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            placeholder="Email"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        {/* select */}
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="service"
          placeholder="Select a service (optional)"
          className="placeholder:text-sm"
        >
          <SelectItem value="web">Web Development</SelectItem>
          <SelectItem value="ui/ux">UI/UX Design</SelectItem>
          <SelectItem value="robocall">Robocall Development</SelectItem>
        </CustomFormField>

        {/* textarea */}
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          placeholder="Type your message here."
        />

        {/* button */}
        <div className="flex flex-col xl:flex-row xl:justify-between items-center">
          <SubmitButton isLoading={isLoading}>Send message</SubmitButton>

          {/* success message */}
          {successMessage && (
            <p className="mt-4 text-green-600">{successMessage}</p>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
