import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

import { Trash } from 'phosphor-react';

interface TasksProps {
    task: string;
    onDeleteTask: (taskToDelete: string) => void;
    onCheckTask: (taskChecked: boolean) => void;
}

export function Task({task, onDeleteTask, onCheckTask}: TasksProps) {
    const [isChecked, setIsChecked] = useState(false);

    function handleDeleteTask() {
        onDeleteTask(task);
    }

    function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
        onCheckTask(event.target.checked);
        setIsChecked(isChecked);
    }

    return (
        <div className={isChecked ? styles.tasksContainerDone : styles.tasksContainer}>
            <div className={styles.task}>
                <div>
                    <input onChange={handleCheckTask} id="checkBox" type="checkbox" />
                    <label htmlFor="checkBox"></label>
                </div>
                <p> {task} </p>
                <Trash onClick={handleDeleteTask}/>
            </div>
        </div>
    )
} 