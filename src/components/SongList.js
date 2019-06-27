import React, { useState } from "react";
import uuid from "uuid/v4";
import NewSongForm from "./NewSongForm";

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
  const addSong = songTitle => {
    setSongs([...songs, { title: songTitle, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={uuid()}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
