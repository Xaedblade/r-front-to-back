import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Joe Smith",
        email: "jdoe@gmail",
        phone: "44-44-44-444"
      },
      {
        id: 2,
        name: "jaid Smith",
        email: "jdadada@gmail",
        phone: "44-333-444"
      },
      {
        id: 3,
        name: "Greg Dambeind",
        email: "GDamn@gmail",
        phone: "44-4555-444"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
