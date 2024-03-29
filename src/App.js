import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const initialContact = {
  name: "Bob Anderson",
  phone: "333-333-3333",
  email: "bob@bob.com",
};

function App() {
  //Define state for contacts and appointments
  const [contacts, setContacts] = useState([initialContact]);
  const [appointments, setAppointments] = useState([]);

  // contacts.push(initialContact);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //Implement functions to add data to contacts and appointments
  let newContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      newContact.name,
      newContact.phone,
      newContact.email,
    ]);
  };

  let newAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      newAppointment.title,
      newAppointment.contact,
      newAppointment.date,
      newAppointment.time,
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} newContact={newContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              newAppointment={newAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
