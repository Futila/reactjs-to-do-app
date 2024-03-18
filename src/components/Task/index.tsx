import { Trash, Check } from "@phosphor-icons/react";
import { ITask } from "../../App";

import styles from "./Task.module.css";

interface TaskProps {
  task: ITask;
  onTaskStatusChange: ({
    id,
    isCompleted,
  }: {
    id: number;
    isCompleted: boolean;
  }) => void;
}

export function Task({ task, onTaskStatusChange }: TaskProps) {
  function handleChangeTaskStatus() {
    onTaskStatusChange({ id: task.id, isCompleted: !task.isCompleted });
  }

  return (
    <div key={task.id} className={styles.task}>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          readOnly
          id="checkbox"
          checked={task.isCompleted}
        />

        <span
          onClick={handleChangeTaskStatus}
          className={`${styles.checkbox} ${
            task.isCompleted
              ? styles["checkbox-checked"]
              : styles["checkbox-unchecked"]
          }`}
        >
          {task.isCompleted && <Check size={12} />}
        </span>

        <p
          className={`${styles.taskText} ${
            task.isCompleted ? styles["task-text-checked"] : ""
          }`}
        >
          {task.title}
        </p>
      </label>

      <button title="Deletar tarefa">
        <Trash size={16} color="#808080" />
      </button>

      {task.isCompleted ? (
        <p>Tarefa completa {task.id}</p>
      ) : (
        <p>Tarefa não completa {task.id}</p>
      )}
    </div>
  );
}
