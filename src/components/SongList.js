import React, { useState, useEffect } from "react";
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
  const [age, setAge] = useState(20);

  const addSong = songTitle => {
    setSongs([...songs, { title: songTitle, id: uuid() }]);
  };
  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect hook ran", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={uuid()}>{song.title}</li>
        ))}
      </ul>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
