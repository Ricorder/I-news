import style from "./App.module.css";
import React, { useEffect, useState } from "react";
import Empty from "./components/Empty/Empty";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  const saveLink = (id, value) => {
    console.log(value);
    setNotes((prev) =>
      prev.map((note) => {
        if (note._id === id) {
          return {
            ...note,
            link: value,
          };
        }
        return note;
      })
    );
  };

  const changeStatus = async (id) => {
    const response = await fetch(`http://localhost:5000/api/${id}`, {
      method: "PATCH",
    });
    const changeStatusFromServer = await response.json();
    setNotes((prev) =>
      prev.map((note) => {
        if (note._id === id) {
          return changeStatusFromServer;
        }
        return note;
      })
    );
  };

  const getAllNotes = async () => {
    const response = await fetch("http://localhost:5000/api/all");
    const finalResponse = await response.json();
    setNotes(finalResponse);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const addNote = async (newNote) => {
    const response = await fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const newNoteFromServer = await response.json();
    setNotes((prev) => [...prev, newNoteFromServer]);
  };

  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:5000/api/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
    }
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  const saveNotes = async () => {
    await Promise.all(
      notes.map((note) => {
        const regexp =
          /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;
        const link = note.link;
        if (regexp.test(link)) {
          return fetch(`http://localhost:5000/api/${note._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ link }),
          });
        }
      })
    );
  };

  return (
    <div className={style.main}>
      <Header saveNotes={saveNotes} />
      <div className={style.inside}>
        {notes.length ? (
          <>
            {notes.map((note, index) => (
              <Note
                id={note._id}
                key={index}
                title={note.title}
                link={note.link}
                saveLink={saveLink}
                status={note.status}
                deleteNote={deleteNote}
                changeStatus={changeStatus}
              />
            ))}
            <Empty addNote={addNote} />
          </>
        ) : (
          <Empty addNote={addNote} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
