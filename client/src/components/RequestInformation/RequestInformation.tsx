import React, { useState } from "react";
import styles from "./RequestInformation.module.css";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://bigondry.cz";

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
  const { t } = useTranslation('common');
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

    if (!formData.name) {
      newErrors.name = t("requestInformation.errors.nameRequired");
    } else if (formData.name.length < 2 || formData.name.length > 62) {
      newErrors.name = t("requestInformation.errors.nameLength");
    }

    if (!formData.email) {
      newErrors.email = t("requestInformation.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("requestInformation.errors.emailInvalid");
    }

    if (!formData.company) {
      newErrors.company = t("requestInformation.errors.companyRequired");
    } else if (formData.company.length < 2 || formData.company.length > 100) {
      newErrors.company = t("requestInformation.errors.companyLength");
    }

    if (!formData.message) {
      newErrors.message = t("requestInformation.errors.messageRequired");
    } else if (formData.message.length < 5 || formData.message.length > 5000) {
      newErrors.message = t("requestInformation.errors.messageLength");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${BASE_URL}/api/appeal/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitMessage({
            text: t("requestInformation.success"),
            isError: false,
          });
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
            text: errorData.message || t("requestInformation.failure"),
            isError: true,
          });
        }
      } catch {
        setSubmitMessage({
          text: t("requestInformation.error"),
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
        <h2 className={styles.title}>{t("requestInformation.title")}</h2>
        <p className={styles.subtitle}>{t("requestInformation.subtitle")}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                {t("requestInformation.fields.name")}{" "}
                <span className={styles.required}>*</span>
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
                placeholder={t("requestInformation.placeholders.name")}
              />
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                {t("requestInformation.fields.email")}{" "}
                <span className={styles.required}>*</span>
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
                placeholder={t("requestInformation.placeholders.email")}
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                {t("requestInformation.fields.company")}{" "}
                <span className={styles.required}>*</span>
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
                placeholder={t("requestInformation.placeholders.company")}
              />
              {errors.company && (
                <span className={styles.errorMessage}>{errors.company}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                {t("requestInformation.fields.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder={t("requestInformation.placeholders.phone")}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              {t("requestInformation.fields.message")}{" "}
              <span className={styles.required}>*</span>
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
              placeholder={t("requestInformation.placeholders.message")}
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
              {isSubmitting
                ? t("requestInformation.submitting")
                : t("requestInformation.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestInformation;
