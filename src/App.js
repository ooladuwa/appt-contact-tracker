import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const initialContact = {
  id: Date.now(),
  name: "Bob DaBuilda",
  phone: 4044444444,
  email: "bob@bob.com",
};

function App() {
  //Define state variables for contacts and appointments
  const [contacts, setContacts] = useState(initialContact);
  const [appointments, setAppointments] = useState([]);

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
  console.log(contacts);

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
              contacts={contacts}
              newAppointment={newAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
