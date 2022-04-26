import React, {useEffect} from "react";
import {useSearchParams,useNavigate } from "react-router-dom";
import {db} from "../firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore";

export default function Edit() {
    const [todos, setTodos] = React.useState("");
    const [searchParam] = useSearchParams();
    let navigate = useNavigate();
    const editNote = async () => {
        const docRef = doc(db, "todos", searchParam.get("id"));
        await updateDoc(docRef, {message: todos});
        navigate('/home');
    };

    useEffect(() => {
        (async () => {
            const docRef = doc(db, "todos", searchParam.get("id"));
            const docSnapShot = await getDoc(docRef);
            setTodos(docSnapShot.data().message);
        })();
    }, []);
    return (
        <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans mb-8">
            <h1 className="text-grey-darkest">Todo Edit</h1>
            <div className="flex mt-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    type="text"
                    onChange={(evt) => setTodos(evt.target.value)}
                    value={todos}
                />
                <button
                    className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
                    onClick={editNote}>Edit
                </button>
            </div>
        </div>
    );
}
