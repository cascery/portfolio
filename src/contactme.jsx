import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wtas0ld', 'template_3ddofmo', e.target, 'TNCc8VWhqy42gkvZt')
      .then((result) => {
        setIsModalOpen(true);
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body w-full max-w-sm shrink-0 shadow-2xl" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered text-black"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered text-black"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <textarea
                name="subject"
                className="textarea textarea-primary text-black"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* The button to open modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={isModalOpen} readOnly />
      <div className="modal" role="dialog ">
        <div className="modal-box text-black  border-white ">
          <h3 className="text-xl font-bold text-pink-500">Message Sent!</h3>
          <p className="py-4 text-black">Thank you for contacting us. We will get back to you soon.</p>
          <div className="modal-action">
            <label htmlFor="my_modal_7" className="btn bg-secondary" onClick={() => setIsModalOpen(false)}>Close</label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" onClick={() => setIsModalOpen(false)}>Close</label>
      </div>
    </div>
  );
};

export default ContactMe;
