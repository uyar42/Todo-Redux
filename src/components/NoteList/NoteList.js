import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, remove } from "../../redux/notes/noteSlice";
import { Button, Modal } from "antd";
import { message } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";

function NoteList() {
  const [search, setSearch] = useState("");
  const notes = useSelector((state) => state.notes.note);
  // console.log(notes);
  const dispatch = useDispatch();

  const filtered = notes.filter((f) =>
    f.title.toLowerCase().trim().includes(search.toLowerCase())
  );

  const removeButton = (id) => {
    if (window.confirm("Silmek istediğinize emin misiniz?") === true) {
      dispatch(remove(id));
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (id) => {
    const note = notes.find((n) => n.id === id);
    setEditingNoteId(id);
    setEditedText(note.text);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(edit({ id: editingNoteId, text: editedText }));
    isModalOpen && info();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const info = () => {
    editedText && message.success("Değişiklikler kaydedildi!");
  };

  console.log(filtered);
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          className="p-2 rounded-lg mt-4 bg-slate-200 outline-none font-mono"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-row flex-wrap items-center ">
        {filtered.length !== 0 ? (
          filtered.map((m) => (
            <div className="flex flex-row mt-2 mr-24 ">
              <div
                style={{ backgroundColor: `#${m.color}` }}
                className={` p-4 m-2 rounded-lg border-2`}
              >
                <p className="text-2xl">{m.title}</p>
                <span className="">{m.text}</span>
                {m.text !== "" && (
                  <>
                    <button
                      className="flex-none ml-32  hover:scale-125  bg-white-600 "
                      onClick={() => removeButton(m.id)}
                    >
                      <DeleteFilled />
                    </button>
                    <button
                      onClick={() => showModal(m.id)}
                      className="flex-none ml-2   hover:scale-125  bg-white-600 "
                    >
                      <EditOutlined />
                    </button>

                    {
                      <Modal
                        title={m.title}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <input
                          onChange={(e) => setEditedText(e.target.value)}
                          defaultValue={m.text}
                        ></input>
                      </Modal>
                    }
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <h2 className="m-auto"></h2>
        )}
      </div>
    </>
  );
}

export default NoteList;
