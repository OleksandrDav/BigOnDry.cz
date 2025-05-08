import React, { useState } from "react";
import styles from "./RequestInformation.module.css";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

interface RequestInformationProps {
  slider?: boolean;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const RequestInformation: React.FC<RequestInformationProps> = ({ slider }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2 || formData.name.length > 62) {
      newErrors.name = "Name must be between 2 and 62 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Company validation
    if (!formData.company) {
      newErrors.company = "Company is required";
    } else if (formData.company.length < 2 || formData.company.length > 100) {
      newErrors.company = "Company must be between 2 and 100 characters";
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 5 || formData.message.length > 5000) {
      newErrors.message = "Message must be between 5 and 5000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${BASE_URL}/api/appeal/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitMessage({
            text: "Thank you! Your request has been sent successfully.",
            isError: false,
          });
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        } else {
          const errorData = await response.json();
          setSubmitMessage({
            text:
              errorData.message ||
              "Failed to submit the form. Please try again.",
            isError: true,
          });
        }
      } catch (error) {
        console.log(error);
        setSubmitMessage({
          text: "An unexpected error occurred. Please try again later.",
          isError: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const containerStyle = {
    backgroundColor: "#f8f8f8",
    padding: "0rem 2rem",
  };
  return (
    <div
      className={slider ? undefined : styles.requestInformation}
      style={slider ? containerStyle : undefined}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Request Information</h2>
        <p className={styles.subtitle}>
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.name ? styles.inputError : ""
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ""
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.company ? styles.inputError : ""
                }`}
                placeholder="Your company name"
              />
              {errors.company && (
                <span className={styles.errorMessage}>{errors.company}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+420 123 456 789"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${
                errors.message ? styles.inputError : ""
              }`}
              rows={5}
              placeholder="Please provide details about your request..."
            ></textarea>
            {errors.message && (
              <span className={styles.errorMessage}>{errors.message}</span>
            )}
          </div>

          <div className={styles.formFooter}>
            {submitMessage && (
              <div
                className={`${styles.submitMessage} ${
                  submitMessage.isError ? styles.error : styles.success
                }`}
              >
                {submitMessage.text}
              </div>
            )}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestInformation;
