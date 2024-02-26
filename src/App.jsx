import { useState } from "react";
import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projects:[],
    selectedProjectId:undefined,
    tasks:[]
  });
  function handleAddTasks(text){
    setProjectState(prevState =>{
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return{
      ...prevState,
      tasks:[newTask,...prevState.tasks],
      }
    })

  }
  function handleDeleteTasks(id){
    setProjectState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) =>task.id !== id
        )
      }
    })
  }
  
  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }
  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
      ...prevState,
      selectedProjectId: undefined,
      projects:[...prevState.projects, newProject],
      }
    })
  }
  
  function handleCancelProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }
  function handleSelectedProject(id){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  function handleDeleteProject(){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) =>project.id !== prevState.selectedProjectId 
        )
      }
    })
  }



  const selectedProject =projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content =  <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTasks} onDeleteTask={handleDeleteTasks} tasks={projectState.tasks}/>;

  if(projectState.selectedProjectId === null){
    content = (<NewProject onAdd = {handleAddProject} onCancel={handleCancelProject}/>);
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject = {handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectedProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
