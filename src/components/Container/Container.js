import React from "react";
import Search from "../Search/Search";
import Form from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";

function Container() {
  return (
    <div className="flex flex-col h-screen overflow-scroll ">
      <h1 className="text-4xl text-center p-4 font-mono ">Note APP</h1>
      <Form />
      <hr></hr>
      {/* <Search /> */}
      <NoteList />
    </div>
  );
}

export default Container;
