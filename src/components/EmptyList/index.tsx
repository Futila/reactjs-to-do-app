import styles from "./EmpytList.module.css";

import clipboard from "./../../assets/clipboard.svg";

export function EmpytList() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboard} alt="clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
