import { FormEvent, useState } from "react";

import { PlusCircle, Trash, Check } from "@phosphor-icons/react";

import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";
import { Task } from "./components/Task";
import { Header } from "./components/Header";

// const arrayDeTarefas = [
//   { id: 1, title: "Estudar JavaScript", isCompleted: false },
//   { id: 2, title: "Fazer compras", isCompleted: true },
//   { id: 3, title: "Ir à academia", isCompleted: false },
//   { id: 4, title: "Trabalhar em projetos", isCompleted: true },
//   { id: 5, title: "Preparar refeições", isCompleted: false },
//   { id: 6, title: "Assistir aulas online", isCompleted: true },
//   { id: 7, title: "Ler um livro", isCompleted: false },
//   { id: 8, title: "Praticar instrumento musical", isCompleted: true },
//   { id: 9, title: "Caminhar ao ar livre", isCompleted: false },
//   { id: 10, title: "Aprender novas habilidades", isCompleted: true },
// ];

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "Estudar JavaScript", isCompleted: false },
    { id: 2, title: "Fazer compras", isCompleted: true },
    { id: 3, title: "Ir à academia", isCompleted: false },
    { id: 4, title: "Trabalhar em projetos", isCompleted: true },
    { id: 5, title: "Preparar refeições", isCompleted: false },
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
              <span className={styles.counter}>5</span>
            </div>
            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span className={styles.counter}>2 de 5</span>
            </div>
          </div>

          {tasks.length === 0 && (
            <div className={styles.emptyList}>
              <img src={clipboard} alt="clipboard" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}

          <div className={styles.taskListContainer}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onTaskStatusChange={handleChangeTaskStatus}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
