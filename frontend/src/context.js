import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
