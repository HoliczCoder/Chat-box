import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Add = () => {
  const [message, setMessage] = useState("");
  const addNote = async () => {
    if (!message) {
      alert("Nhập vào rồi hãy submit bạn ơi");
      return;
    }
    const collectionRef = collection(db, "test");
    try {
      await addDoc(collectionRef, {
        message,
      });
    } catch (e) {
      console.log(e);
    }
    setMessage("");
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        onChange={(evt) => setMessage(evt.target.value)}
        value={message}
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default Add;
