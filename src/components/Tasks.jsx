import NewTask from "./NewTask";

export default function Tasks({tasks,onAdd, onDelete,selectedProjectId}){
    return(
        <section>
            <h2 className="text-stone-700 my-4 text-2xl font-bold mb-4">Tasks</h2>
            <NewTask onAdd = {onAdd} />
            {tasks.length === 0 && (<p className="text-stone-800 mb-4">The project does not have any tasks yet.</p>)}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map(task => {
                            if(selectedProjectId === task.projectId ){
                                return(
                                <li key ={task.id} className="flex justify-between my-4">
                                    <span>{task.text}</span>
                                    <button onClick={()=> onDelete(task.id)}className="text-stone-700 hover:text-red-500">Clear</button>
                                </li>
                                )    
                            }  
                    })}
                </ul>
            )}
        </section>
    )
}