import { PlusCircle } from "@phosphor-icons/react";

import logo from "./assets/logo.svg";
import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo todo" />

        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma tarefa" />
          <button type="submit">
            Criar <PlusCircle size={16} />
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

          <div className={styles.emptyList}>
            <img src={clipboard} alt="clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      </main>
    </>
  );
}
