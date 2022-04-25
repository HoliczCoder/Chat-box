import React ,{useState,useEffect} from 'react';
import {addDoc, collection, deleteDoc, doc, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";


function TodoList(props) {
    const [message, setMessage] = useState("");
    const addNote = async () => {
        if (!message) {
            alert("Nhập vào rồi hãy submit bạn ơi");
            return;
        }
        const collectionRef = collection(db, "todos");
        try {
            await addDoc(collectionRef, {
                message,
            });
        } catch (e) {
            console.log(e);
        }
        setMessage("");
    };

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
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" onChange={e=>setMessage(e.target.value)} placeholder="Add Todo" />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={addNote}>Add</button>
                    </div>
                </div>
                <div>
                    <div className="flex mb-4 items-center">
                        <input className="w-full text-grey-darkest border border-gray-200" />
                        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                    </div>
                    <div className="flex mb-4 items-center">
                        <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;