import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default  function NewProject({onAdd, onCancel}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if(enteredTitle.trim()=== "" || enteredDescription === "" || enteredDueDate === ""){
            modal.current.open();
            return;
        }
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
            id:undefined
        })
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay"> 
            <h2 className="text-stone-700 my-4 text-xl font-bold">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-800 hover:text-stone">Cancel</button></li>
                <li><button 
                        onClick={handleSave}
                        className="text-stone-50 bg-stone-800 hover: tbg-stone-950 rounded-md px-6 py-2">Save</button></li>
            </menu>
      
           <Input type="text" ref ={title} label="TITLE" />
           <Input ref ={description} label="DESCRIPTION" textarea />
           <Input type="date" ref ={dueDate}label="DUE DATE" />
        </div>
        </>
        


    )
}