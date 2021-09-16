import React from 'react';
import './index.scss';
import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';

function EmailPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    const sendInfo = { from_name: data.email, message: data.message };

    send('service_6gs2tda',
      'template_vg6ztg8',
      sendInfo,
      'user_y28a1SDlR7zqXZLlB40Rf')
    .then(response => {
      console.log('success!', response.status, response.text)
    })
      .catch(err => {
      console.log('Failed to send the email: ', err)
    })
  };

  return (
    <div className="email-page">
      <div className="email-page__content">
        <div className="email-page__form">
          <div className="email-page__form__title">Contact Fanatical DM</div>
          <div className="email-page__form__description">For feedback, any questions, inquires, or freelance work, reach out to me and we can chat.</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="email-page__form__input-heading">Email</div>
            <div className="email-page__form__input-container">
              <input className="email-page__form__input" type="text" {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
              {errors.email && <span className="email-page__form__error">Please enter a valid email address</span>}
            </div>
            
            
            <div className="email-page__form__input-heading">Subject</div>
            <div className="email-page__form__input-container">
              <input className="email-page__form__input" type="text" {...register("subject", { required: true, maxLength: 200 })} />
              {errors.subject && <span className="email-page__form__error">This field is required</span>}
            </div>

            <div className="email-page__form__input-heading">Message</div>
            <div className="email-page__form__input-container">
              <textarea className="email-page__form__input" data-type="message" {...register("message", { required: true })} />
              {errors.message && <span className="email-page__form__error">This field is required</span>}
            </div>
            
            <input className="email-page__form__button" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailPage;
