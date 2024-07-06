import styles from './Task.module.css';

import { Trash } from 'phosphor-react';

interface TasksProps {
    tasks: string[];
}

export function Task({tasks}: TasksProps) {
    return (
        <div className={styles.tasksContainer}>
            <div className={styles.task}>
                <div>
                    <input id="checkBox" type="checkbox" />
                    <label htmlFor="checkBox"></label>
                </div>
                <p> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. </p>
                <Trash />
            </div>
        </div>
    )
} 