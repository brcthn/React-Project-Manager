import Button from "./Button"
import Input from "./Input"
import Tasks from "./Tasks";
export default function SelectedProject({project, onDelete,onAddTask,onDeleteTask, tasks}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year:"numeric",
        month:"short",
        day:"numeric"

    });
    return(
        <div className="mt-16 w-[35rem]">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-stone-600 mb-2 text-3xl font-bold ">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p  className="whitespace-pre-wrap text-stone-600">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks ={tasks} selectedProjectId ={project.id}/>
        </div>
    )
}
   