import React from "react";
import Search from "../Search/Search";
import Form from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";

function Container() {
  return (
    <div className="bg-gray-800  h-screen overflow-scroll">
      <h1 className="text-center font-semibold font-mono text-4xl mb-12 text-cyan-400 hover:text-cyan-600">
        Note APP
      </h1>

      <Form />
      <hr></hr>
      <Search />
      <NoteList />
    </div>
  );
}

export default Container;
