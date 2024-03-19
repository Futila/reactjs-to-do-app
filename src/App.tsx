import { useState } from "react";

import styles from "./App.module.css";
import "./global.css";

import { Task } from "./components/Task";
import { Header } from "./components/Header";
import { EmpytList } from "./components/EmptyList";

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "Estudar JavaScript", isCompleted: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleCreateTask() {
    if (newTask === "") {
      return;
    }

    const taskToBeCreated: ITask = {
      id: new Date().getTime(),
      title: newTask,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, taskToBeCreated]);
    setNewTask("");
  }

  function handleDeleteTask(id: number) {
    const tasksWithDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithDeletedOne);
  }

  function handleChangeTaskStatus({
    id,
    isCompleted,
  }: {
    id: number;
    isCompleted: boolean;
  }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: isCompleted };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter((task) => task.isCompleted).length;
  return (
    <>
      <Header
        onTaskCreate={handleCreateTask}
        onChangeText={setNewTask}
        task={newTask}
      />
      <main>
        <section className={styles.tasksContainer}>
          <div className={styles.taskInfo}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span className={styles.counter}>{totalTasksCreated}</span>
            </div>
            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span className={styles.counter}>
                {totalTasksCompleted} de {totalTasksCreated}
              </span>
            </div>
          </div>
          {tasks.length > 0 ? (
            <div className={styles.taskListContainer}>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onTaskRemove={handleDeleteTask}
                    onTaskStatusChange={handleChangeTaskStatus}
                  />
                );
              })}
            </div>
          ) : (
            <EmpytList />
          )}
        </section>
      </main>
    </>
  );
}
