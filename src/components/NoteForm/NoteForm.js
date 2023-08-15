import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { add } from "../../redux/notes/noteSlice";

function NoteForm() {
  const [text, setText] = useState("");

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("red");

  const dispatch = useDispatch();
  const handleForm = (e) => {
    if (text) {
      e.preventDefault();
      dispatch(add({ id: nanoid(), title, text, color: color }));
      setTitle("");
      setText("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form className="" onSubmit={handleForm}>
        <div className="mb-4">
          <input
            className="font-indie rounded-lg w-96 h-11 outline-none outline-offset-0 font-black text-3xl outline-cyan-400 hover:outline-cyan-600"
            placeholder="Enter your title  here..."
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            className="font-indie rounded-lg w-96 h-11 outline-none outline-offset-0 font-black text-3xl outline-cyan-400 hover:outline-cyan-600"
            placeholder="Enter your note here..."
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center">
          <button className=" m-4  w-64 bg-pink-700 text-3xl align-middle font-indie border-4 border-solid border-blue-900 p-4 hover:bg-cyan-300  active:bg-cyan-400 ">
            Add
          </button>
        </div>
      </form>
      <div className="relative left-80 rotate-90 -top-40">
        <button
          className={`p-8 rounded-s-full bg-red-700 ${
            color === "red" && "border-black"
          }  hover:bg-red-800 border-2 border-solid box-border`}
          onClick={() => setColor("red")}
        ></button>
        <button
          className={`p-8     ${
            color === "yellow" && "border-black"
          }   bg-yellow-700 hover:bg-yellow-800 border-2 border-solid`}
          onClick={() => setColor("yellow")}
        ></button>
        <button
          className={`
          ${color === "green" && "border-black"}
          p-8 bg-green-700 hover:bg-green-800 border-2 border-solid `}
          onClick={() => setColor("green")}
        ></button>
        <button
          className={`p-8 rounded-e-full bg-blue-700   ${
            color === "blue" && "border-black"
          } hover:bg-blue-800 border-2 border-solid`}
          onClick={() => setColor("blue")}
        ></button>
      </div>
    </div>
  );
}

export default NoteForm;
