import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function Edit() {
  const [todos, setTodos] = React.useState("");
  const [searchParam] = useSearchParams();
  const editNote = async () => {
    const docRef = doc(db, "test", searchParam.get("id"));
    await updateDoc(docRef, { message: todos });
  };

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "test", searchParam.get("id"));
      const docSnapShot = await getDoc(docRef);
      setTodos(docSnapShot.data().message);
    })();
  }, []);
  return (
    <div>
      Edit
      <h1>Edit Todo</h1>
      <input
        type="text"
        onChange={(evt) => setTodos(evt.target.value)}
        value={todos}
      />
      <button onClick={editNote}>Add Note</button>
    </div>
  );
}
