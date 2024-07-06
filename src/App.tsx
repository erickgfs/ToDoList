import { Header } from './components/Header';

import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';

import emptyLogo from './assets/Logo-Empty.svg';
import { FormEvent, ChangeEvent, useState } from 'react';
import { Task } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [countTasks, setCountTasks] = useState(0);
  const [countTasksDone, setCountTasksDone] = useState(0);
  
  function handleSubmitTask(event:FormEvent) {
    event.preventDefault();
    
    setTasks([...tasks, newTask]);
    setNewTask('');
    setCountTasks((state) => {
      return state + 1;
    })
  }
  
  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
    
    setNewTask(event.target.value);
  }

  function onDeleteTask(taskToDelete: string) {

    const tasksWithoutDeletedOne = tasks.filter(task => {
        return task !== taskToDelete;
    })
  
    setTasks(tasksWithoutDeletedOne);
    setCountTasks((state) => {
      return state - 1;
    })
  }

  function onCheckTask(taskChecked: boolean) {
    if(taskChecked) {
      setCountTasksDone((state) => {
        return state + 1
      })
    } else {
      setCountTasksDone((state) => {
        return state - 1
      })
    }
  }


  const isNewTaskEmpty = newTask.length === 0 ? true : false;
  const isTasksEmpty = tasks.length === 0 ? true : false;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSubmitTask} className={styles.inputContainer}>
          <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' onChange={handleNewTaskChange} value={newTask} required/>
          <button type="submit" className={styles.button} disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle />
          </button>
        </form>

        <div className={styles.taskInfosContainer}>
          <div className={styles.createdTasks}>
            <strong>
              Tarefas criadas
            </strong>
            <span>
              {countTasks}
            </span>
          </div>
          <div className={styles.doneTasks}>
            <strong>
            Concluídas
            </strong>
           
              {isTasksEmpty ? (
                <span>
                  {countTasks}
                </span>
              ):(
                <span>
                  {countTasksDone} de {countTasks}
                </span>
              )}
          </div>
        </div>

        {tasks.length > 0 ? (
          tasks.map((task) => {
            return(
              <Task task={task} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask}/>
            )
          })
        ) : (
          <div className={styles.emptyTasksContainer}>
            <img src={emptyLogo} alt="" />

            <div>
              <p>
                <strong>
                  Você ainda não tem tarefas cadastradas
                </strong>
              </p>
              <p>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default App
