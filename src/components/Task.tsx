import { useState } from 'react';
import styles from './Task.module.css';

import { Trash, Check } from 'phosphor-react';

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

    function handleCheckTask() {
        if(isChecked) {
            setIsChecked(false);
            onCheckTask(false);
        }else {
            setIsChecked(true);
            onCheckTask(true);
        }
    }

    return (
        <div onClick={handleCheckTask} className={isChecked ? styles.tasksContainerDone : styles.tasksContainer}>
            <div className={styles.task}>
                <div>
                    <input type="checkbox" checked={isChecked}/>
                    <span className={isChecked ? styles.chackboxChecked : styles.chackbox}>
                        {isChecked && <Check size={12} />}
                    </span>
                </div>
                <p> {task} </p>
                <Trash onClick={handleDeleteTask}/>
            </div>
        </div>
    )
} 