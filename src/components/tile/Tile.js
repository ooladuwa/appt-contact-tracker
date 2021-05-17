import React from "react";

export const Tile = ({ contact }) => {
  console.log(contact);
  let values = Object.values(contact);
  console.log(values);

  return (
    <div className="tile-container">
      {values.map((value, index) => {
        console.log(value);
        if (value === contact.name) {
          return (
            <p key={index} className="tile-title">
              {value}
            </p>
          );
        }
        if (value !== contact.name) {
          return (
            <p key={value} className="tile">
              {value}
            </p>
          );
        }
      })}
    </div>
  );
};
