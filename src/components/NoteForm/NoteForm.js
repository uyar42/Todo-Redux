import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { add } from "../../redux/notes/noteSlice";
import { ColorPicker } from "antd";

function NoteForm() {
  const [text, setText] = useState("");

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#8888");

  const dispatch = useDispatch();
  const handleForm = (e) => {
    if (text) {
      e.preventDefault();
      dispatch(add({ id: nanoid(), title, text, color: color }));
      setTitle("");
      setText("");
    }
  };

  const inputClass =
    "p-4 rounded-md outline-none font-semibold border-2 mb-4 w-1/3";

  const handleColorChange = (color, hex) => {
    let koko = hex.replace("#", " ").trim();
    console.log(color);
    setColor(koko);
  };

  return (
    <div className="flex flex-col items-center bg-slate-300 p-8 ">
      <form className="w-full" onSubmit={handleForm}>
        <div className="flex flex-col justify-center items-center m-4">
          <input
            className={inputClass}
            placeholder="Enter your title  here..."
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className={inputClass}
            placeholder="Enter your note here..."
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          ></input>
          <ColorPicker
            format="hex"
            value={color}
            onChange={handleColorChange}
          ></ColorPicker>
        </div>
        <div className="flex justify-center flex-row mt-4">
          <button className="bg-emerald-400 p-4 w-1/6 rounded-md hover:bg-emerald-500 font-mono text-xl">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
