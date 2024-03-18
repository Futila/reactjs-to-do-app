import { FormEvent } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import logo from "./../../assets/logo.svg";

import styles from "./Header.module.css";

interface HeaderProps {
  task: string;
  onTaskCreate: () => void;
  onChangeText: (task: string) => void;
}

export function Header({ onTaskCreate, task, onChangeText }: HeaderProps) {
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onTaskCreate();
  }
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo todo" />

      <form className={styles.form} onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={task}
          onChange={(event) => onChangeText(event.target.value)}
        />
        <button type="submit">
          Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </button>
      </form>
    </header>
  );
}
