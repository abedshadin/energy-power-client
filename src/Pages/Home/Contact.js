import React from "react";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-base-200  mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-accent">Contact Us!</h1>
          <p className="py-6">
            Your message is most valuable for us. Please send message if you
            face some problem, feedback etc. We always like feedback from you.
            Thank you.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="subject"
                name="subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="message"
                name="message"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
