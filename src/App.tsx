import { Header } from './components/Header';

import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';
import './global.css';

import emptyLogo from './assets/Logo-Empty.svg';
import { useState } from 'react';
import { Task } from './components/Task';

function App() {
  const [tasks, setTasks] = useState(["testando uma tasks","testando duas tasks"]);
  
  function handleSubmitTask() {
    console.log("enviei");
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' />
          <button type="submit" className={styles.button} onClick={handleSubmitTask}>
            Criar
            <PlusCircle />
          </button>
        </div>

        <div className={styles.taskInfosContainer}>
          <div className={styles.createdTasks}>
            <strong>
              Tarefas criadas
            </strong>
            <span>
              0
            </span>
          </div>
          <div className={styles.doneTasks}>
            <strong>
            Concluídas
            </strong>
            <span>
              0
            </span>
          </div>
        </div>

        {tasks.length > 0 ? (
            <Task tasks={tasks}/>
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
