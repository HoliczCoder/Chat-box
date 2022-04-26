import React ,{useState,useEffect} from 'react';
import {addDoc, collection, deleteDoc, doc, onSnapshot,getDocs,query,where} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {db} from "../../firebase";
import {Link} from "react-router-dom";


function TodoList(props) {
    const [message, setMessage] = useState("");
    const auth = getAuth();
    const uid = auth?.currentUser?.uid;
    const addNote = async () => {
        if (!message) {
            alert("Nhập vào rồi hãy submit bạn ơi");
            return;
        }
        const collectionRef = collection(db, "todos");
        try {
            await addDoc(collectionRef, {
                message,
                uid
            });
        } catch (e) {
            console.log(e);
        }
        setMessage("");
    };

    let unsub = null;
    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, "todos");
            // const collectionQuery = query(collectionRef, limit(3));
            // unsub = onSnapshot(collectionRef, (snapShot) => {
            //     const localTodos = [];
            //     console.log("co su thay doi du lieu");
            //     /*  localTodos.push({ id: doc.id, message: doc.data().message }); */
            //     snapShot.forEach((doc) => {
            //         localTodos.push({ id: doc.id, message: doc.data().message });
            //     });
            //     setTodos(localTodos);
            // });
            const q = query(collectionRef, where("uid", "==", uid));

            const querySnapshot = await getDocs(q);
            const localTodos = [];
            unsub = onSnapshot(q, (snapShot) => {
                const localTodos = [];
                console.log("co su thay doi du lieu");
                /*  localTodos.push({ id: doc.id, message: doc.data().message }); */
                snapShot.forEach((doc) => {
                    localTodos.push({ id: doc.id, message: doc.data().message });
                });
                setTodos(localTodos);
            });
        })();
        console.log(todos)
    }, []);
    const [todos, setTodos] = useState([]);
    const deleteNote = async (id) => {
        const docRef = doc(db, "todos", id);
        await deleteDoc(docRef);
    };
    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" onChange={e=>setMessage(e.target.value)} placeholder="Add Todo" />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500" onClick={addNote}>Add</button>
                    </div>
                </div>
                <div>
                    {todos.map((todo, index) => (
                        <div className="flex justify-between mb-4 items-center" key={index}>
                            {todo.message}
                            <Link  className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500" to={`/edit?id=${todo.id}`}> Edit </Link>
                            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500" onClick={() => deleteNote(todo.id)}>Delete Note</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;