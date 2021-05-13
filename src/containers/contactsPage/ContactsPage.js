import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, newContact } = props;

  // Define state variables for contact info and duplicate check
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [duplicateCheck, setDuplicateCheck] = useState(false);

  //   useEffect(() => {
  //   setDuplicateCheck(
  //   )
  // })

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.forEach((contact) => {
      if (contact.name === newContact.name) {
        return alert("This contact already exists");
      } else {
        return contacts.push(newContact);
      }
    });
  };

  // Add contact info and clear data if the contact name is not a duplicate

  // Using hooks, check for contact name in the contacts array variable in props

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
