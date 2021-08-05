import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function createEmoji(emoji) {
  return (
    <Term
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function Dictonary() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default Dictonary;
