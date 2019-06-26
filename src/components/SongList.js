import React, { useState } from "react";
import uuid from "uuid/v4";

const SongList = () => {
  const [songs, setSongs] = useState([
    {
      title: "almost home",
      id: 1
    },
    {
      title: "memory gospel",
      id: 2
    },
    {
      title: "this wild darkness",
      id: 3
    }
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "New Song", id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={uuid()}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
