import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../atoms/animatedText";
import emailjs from "@emailjs/browser";
import { PrimaryButton } from "../../atoms/Buttons";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmittedSuccess, setFormSubmittedSuccess] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormSubmitError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      // EmailJS Code
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setFormSubmittedSuccess(true);

      let timer = 5;

      const interval = setInterval(() => {
        timer -= 1;
        setCountdown(timer);

        if (timer === 0) {
          clearInterval(interval);
          setFormSubmittedSuccess(false);
          setCountdown(5);
        }
      }, 1000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setFormSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 w-full min-h-screen flex">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="text-center pt-16">
          <AnimatedText
            as="h1"
            className="text-4xl font-bold text-primaryColor font-heading text-center"
            wrapperClassName="mr-2"
            sentence="Let's Build Something Great"
          />

          <p className="mt-4 max-w-2xl text-lg">
            Have a project in mind? Get in touch with us and let's discuss how
            we can help your business grow through innovative technology
            solutions.
          </p>
        </div>

        <div className="flex items-center mt-16">
          {/* Contact Form */}
          {formSubmittedSuccess ? (
            <div className="flex flex-col justify-center text-center max-w-xl bg-white p-12 rounded-3xl shadow-lg gap-4">
              <div className="flex flex-col font-heading">
                <span className="text-green-500 text-xl">
                  Thank you for contacting us.
                </span>
                <span className="text-green-500">
                  We've received your request and will get back to you shortly.
                </span>
              </div>
              <span>You will be redirected to form in {countdown} seconds</span>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                rotateY: 30,
                rotateX: -30,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                rotateX: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{
                transformPerspective: 1000,
                transformOrigin: "center",
              }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primaryColor"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primaryColor"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-4 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primaryColor"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-4 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primaryColor resize-none"
              />

              <PrimaryButton
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-primaryColor text-white py-4 rounded-xl font-semibold transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </PrimaryButton>
              {formSubmitError && (
                <div className="text-center text-red-500">
                  Failed to send message, Try again.
                </div>
              )}
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
