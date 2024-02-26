import noProjectImage from "../assets/no-projects.png"
import Button from "./Button.jsx"
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="An emty task list" className="w-16 h-16 object-contain mx-auto"></img>
            <h2 className="text-stone-500 my-4 text-xl font-bold">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p>
            <Button onClick={onStartAddProject}> Create New Project</Button>
            </p>
        </div>
    )
}