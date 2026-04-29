import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const TIMEZONES = [
  { value: 'Africa/Addis_Ababa', label: 'Africa/Addis Ababa (EAT +03:00)' },
  { value: 'Africa/Nairobi', label: 'Africa/Nairobi (EAT +03:00)' },
  { value: 'Africa/Lagos', label: 'Africa/Lagos (WAT +01:00)' },
  { value: 'Africa/Cairo', label: 'Africa/Cairo (EET +02:00)' },
  { value: 'Africa/Johannesburg', label: 'Africa/Johannesburg (SAST +02:00)' },
  { value: 'America/New_York', label: 'America/New York (EST -05:00)' },
  { value: 'America/Chicago', label: 'America/Chicago (CST -06:00)' },
  { value: 'America/Denver', label: 'America/Denver (MST -07:00)' },
  { value: 'America/Los_Angeles', label: 'America/Los Angeles (PST -08:00)' },
  { value: 'America/Toronto', label: 'America/Toronto (EST -05:00)' },
  { value: 'America/Sao_Paulo', label: 'America/São Paulo (BRT -03:00)' },
  { value: 'Europe/London', label: 'Europe/London (GMT +00:00)' },
  { value: 'Europe/Paris', label: 'Europe/Paris (CET +01:00)' },
  { value: 'Europe/Berlin', label: 'Europe/Berlin (CET +01:00)' },
  { value: 'Europe/Moscow', label: 'Europe/Moscow (MSK +03:00)' },
  { value: 'Asia/Dubai', label: 'Asia/Dubai (GST +04:00)' },
  { value: 'Asia/Kolkata', label: 'Asia/Kolkata (IST +05:30)' },
  { value: 'Asia/Singapore', label: 'Asia/Singapore (SGT +08:00)' },
  { value: 'Asia/Hong_Kong', label: 'Asia/Hong Kong (HKT +08:00)' },
  { value: 'Asia/Shanghai', label: 'Asia/Shanghai (CST +08:00)' },
  { value: 'Asia/Tokyo', label: 'Asia/Tokyo (JST +09:00)' },
  { value: 'Australia/Sydney', label: 'Australia/Sydney (AEDT +11:00)' },
  { value: 'Pacific/Auckland', label: 'Pacific/Auckland (NZDT +13:00)' },
];

const TIME_SLOTS = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const response = await axios.post('/api/send-mail.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setSubmitStatus({ type: 'success', message: 'Your consultation request has been sent successfully! We will contact you soon.' });
        reset();
      } else {
        setSubmitStatus({ type: 'error', message: response.data.message || 'Failed to send email. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section className="tc-contact-form-style1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h3 className="fsz-45 fw-500 mb-80">
                Book a FREE Consultation Call
              </h3>
              <div className="mb-4">
                <span className="badge bg-orange1 text-white px-3 py-2 rounded-pill me-2">
                  30 mins
                </span>
                <span className="badge bg-dark text-white px-3 py-2 rounded-pill">
                  Extraw Designs
                </span>
              </div>
              <p className="fsz-14 color-666 mt-15">
                Choose your preferred timezone, date, and time for a free consultation call with our team.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form mt-5 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="fullName">
                      Full name <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="your name"
                      {...register('fullName', {
                        required: 'Full name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="email">
                      Email address <span className="color-orange1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Your email address"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="phone">
                      Phone <span className="color-999"> (optional) </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Your phone number"
                      {...register('phone')}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="timezone">
                      Timezone <span className="color-orange1"> * </span>
                    </label>
                    <select
                      id="timezone"
                      className={`form-select form-control ${errors.timezone ? 'is-invalid' : ''}`}
                      {...register('timezone', {
                        required: 'Please select a timezone',
                      })}
                    >
                      <option value="">Select timezone</option>
                      {TIMEZONES.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                    {errors.timezone && (
                      <div className="invalid-feedback d-block">{errors.timezone.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="preferredDate">
                      Preferred Date <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      className={`form-control ${errors.preferredDate ? 'is-invalid' : ''}`}
                      min={getMinDate()}
                      {...register('preferredDate', {
                        required: 'Please select a date',
                      })}
                    />
                    {errors.preferredDate && (
                      <div className="invalid-feedback d-block">{errors.preferredDate.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="preferredTime">
                      Preferred Time <span className="color-orange1"> * </span>
                    </label>
                    <select
                      id="preferredTime"
                      className={`form-select form-control ${errors.preferredTime ? 'is-invalid' : ''}`}
                      {...register('preferredTime', {
                        required: 'Please select a time',
                      })}
                    >
                      <option value="">Select time</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <div className="invalid-feedback d-block">{errors.preferredTime.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-30">
                    <label htmlFor="message">
                      Message <span className="color-999"> (optional) </span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Tell us about your project or any specific topics you'd like to discuss..."
                      className="form-control"
                      {...register('message')}
                    ></textarea>
                  </div>
                </div>
              </div>

              {submitStatus && (
                <div
                  className={`alert ${
                    submitStatus.type === 'success'
                      ? 'alert-success'
                      : 'alert-danger'
                  } mb-4`}
                  role="alert"
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-40"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Consultation Call
                      <i className="fal fa-arrow-up-right ms-2"></i>
                    </>
                  )}
                </span>
              </button>
              <p className="fsz-12 color-666 mt-20">
                By submitting, I agree to the
                <a href="#" className="color-000 text-decoration-underline">
                  Terms & Conditions
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/contact_shap.png"
        alt=""
        className="shap"
      />
    </section>
  );
}

export default ContactForm;
