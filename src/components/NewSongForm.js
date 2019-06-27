import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Song name:</label>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
        required
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSongForm;
