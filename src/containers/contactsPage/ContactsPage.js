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

  // check name in contacts array against newContact.name to identify duplicates

  useEffect(() => {
    contacts.forEach((contact) => {
      if (contact.name === newContact.name) {
        setDuplicateCheck(true);
      }
    }, []);
  });
  console.log(newContact.name);

  // handler function to return alert if duplicate or new contact if valid entry
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    if (duplicateCheck === true) {
      alert("This contact already exists");
    }
    if (duplicateCheck === false) {
      contacts.push(newContact);
      console.log(contacts);
      alert("false check");
      return [...contacts, newContact];
    }
  };

  // Add contact info and clear data if the contact name is not a duplicate

  // Using hooks, check for contact name in the contacts array variable in props

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
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
