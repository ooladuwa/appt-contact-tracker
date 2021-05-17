import React from "react";

export const ContactForm = (props) => {
  const { name, setName, phone, setPhone, email, setEmail, handleSubmit } =
    props;

  // handleChange function to deal with each input field
  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
    setPhone({ ...phone, [e.target.name]: e.target.value });
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
  console.log(name.name);

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Ralph Ralpherson"
          value={name.name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          name="phone"
          type="tel"
          placeholder="432-987-6543"
          pattern="[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}"
          value={phone.phone}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="ralph@ralph.com"
          value={email.email}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
