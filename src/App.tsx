import { FormEvent, useState } from "react";

import { PlusCircle, Trash, Check } from "@phosphor-icons/react";

import logo from "./assets/logo.svg";
import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";

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

interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Estudar JavaScript Estudar JavaScript Estudar  ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Aprender novas habilidades",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Preparar refeições",
      isCompleted: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

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
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo todo" />

        <form className={styles.form} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit">
            Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </button>
        </form>
      </header>

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
                <div key={task.id} className={styles.task}>
                  <label htmlFor="checkbox">
                    <input type="checkbox" readOnly id="checkbox" />

                    <span
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
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
