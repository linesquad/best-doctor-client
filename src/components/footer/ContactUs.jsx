import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

import CustomButton from "../../ui/CustomButton";

export const ContactUs = () => {
  const [errorEmail, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!email || !/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!message || message.trim().length < 10) {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-[1rem] md:gap-[1.5rem] w-full"
    >
      <div className="flex flex-col w-full">
        <input
          placeholder="Email address"
          type="email"
          name="user_email"
          className={`h-[4.60463rem] rounded-[0.375rem] pl-1 border ${
            errorEmail && "border-red-500 border-[2px]"
          }`}
        />
        {errorEmail && (
          <p className="text-red-500">Please enter a valid email address.</p>
        )}
      </div>

      <div className="flex flex-col w-full">
        <textarea
          rows={6}
          placeholder="Write your message"
          name="message"
          className={`rounded-[0.375rem] pl-1 pt-4 border ${
            messageError && "border-red-500 border-[2px]"
          }`}
        />
        {messageError && (
          <p className="text-red-500">
            Message must be at least 10 characters long.
          </p>
        )}
      </div>
      <CustomButton
        name="Send"
        type="submit"
        color="text-white"
        bg="bg-darkBlue"
        paddingX="px-20"
        paddingY="py-4 lg:py-6"
        width="lg:w-[23.65119rem] w-full sm:w-fit"
        marginT="mt-4"
        disabled={loading}
        loading={loading}
      />
    </form>
  );
};
