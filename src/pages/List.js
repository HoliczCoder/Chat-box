import React, { cloneElement, useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  limitToLast,
  limit,
} from "firebase/firestore";
import { Link } from "react-router-dom";

export default function List() {
  let unsub = null;
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "test");
      //const collectionQuery = query(collectionRef, limit(3));
      unsub = onSnapshot(collectionRef, (snapShot) => {
        const localTodos = [];
        console.log("co su thay doi du lieu");
        /*  localTodos.push({ id: doc.id, message: doc.data().message }); */
        snapShot.forEach((doc) => {
          localTodos.push({ id: doc.id, message: doc.data().message });
        });
        setTodos(localTodos);
      });
    })();
  }, []);
  const [todos, setTodos] = useState([]);
  const deleteNote = async (id) => {
    const docRef = doc(db, "test", id);
    await deleteDoc(docRef);
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.message}
          <Link to={`/edit?id=${todo.id}`}> Edit </Link>
          <button onClick={() => deleteNote(todo.id)}>Delete Note</button>
        </div>
      ))}
    </div>
  );
}
