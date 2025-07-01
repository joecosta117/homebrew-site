import React, { useState } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

function EmailPage() {
  const [showModal, changeShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const sendInfo = { from_name: data.email, message: data.message };

    send(
      "service_mifj84c",
      "template_vg6ztg8",
      sendInfo,
      "user_y28a1SDlR7zqXZLlB40Rf"
    )
      .then((response) => {
        changeShowModal(true);
      })
      .catch((err) => {
        console.log("Failed to send the email: ", err);
      });
  };

  function closeModal() {
    const form: any = document.getElementById("email-form");
    form.reset();
    changeShowModal(false);
  }

  return (
    <div className="email-page">
      <div className="email-page__content">
        <div className="email-page__form">
          <div className="email-page__form__title">Contact Fanatical DM</div>
          <div className="email-page__form__description">
            For feedback, any questions, inquires, or freelance work, reach out
            to me and we can chat.
          </div>
          <form onSubmit={handleSubmit(onSubmit)} id="email-form">
            <div className="email-page__form__input-heading">Email</div>
            <div className="email-page__form__input-container">
              <input
                className="email-page__form__input"
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <span className="email-page__form__error">
                  Please enter a valid email address
                </span>
              )}
            </div>

            <div className="email-page__form__input-heading">Subject</div>
            <div className="email-page__form__input-container">
              <input
                className="email-page__form__input"
                type="text"
                {...register("subject", { required: true, maxLength: 200 })}
              />
              {errors.subject && (
                <span className="email-page__form__error">
                  This field is required
                </span>
              )}
            </div>

            <div className="email-page__form__input-heading">Message</div>
            <div className="email-page__form__input-container">
              <textarea
                className="email-page__form__input"
                data-type="message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="email-page__form__error">
                  This field is required
                </span>
              )}
            </div>

            <input className="email-page__form__button" type="submit" />
          </form>
        </div>
        {showModal && (
          <div className="email-page__modal">
            <div
              className="modal-wrapper"
              role="dialog"
              aria-labelledby="modal-heading-01"
              aria-modal="true"
              aria-describedby="modal-content-id-1"
            >
              <div className="modal-wrapper__close-button-grid">
                <div
                  className="modal-wrapper__close-button-grid__close-container"
                  onClick={closeModal}
                >
                  <div className="modal-wrapper__close-button-grid__close-container__close-icon"></div>
                  <div className="modal-wrapper__close-button-grid__close-container__close-icon"></div>
                </div>
              </div>

              <div className="modal-wrapper__content">
                Thank you for your message!
              </div>

              <footer className="modal-wrapper__footer">
                <button
                  className="modal-wrapper__footer__cancel-button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailPage;
