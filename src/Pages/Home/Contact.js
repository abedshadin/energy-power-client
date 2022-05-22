import React from 'react';

const Contact = () => {
    return (
        <div class="hero min-h-screen bg-base-200 p-20">
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-accent">Contact Us!</h1>
      <p class="py-6">Your message is most valuable for us. Please send message if you face some problem, feedback etc. We always like feedback from you. Thank you.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input type="text" placeholder="subject" name='subject' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="message" name='message' class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">send</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;