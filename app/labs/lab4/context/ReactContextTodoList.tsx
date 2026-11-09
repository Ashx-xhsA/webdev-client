import { useState } from "react";
import { useTodosContext, type ContextTodo } from "./todosContext";

const emptyTodo: ContextTodo = { id: "-1", title: "" };

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<ContextTodo>(emptyTodo);
  const editing = todo.id !== "-1";

  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          className="rounded border border-neutral-300 px-3 py-1.5"
          placeholder="New todo"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          id="wd-context-todo-title"
        />
        <button
          type="button"
          disabled={editing || todo.title.trim() === ""}
          onClick={() => {
            addTodo(todo.title);
            setTodo(emptyTodo);
          }}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
        >
          Add
        </button>
        <button
          type="button"
          disabled={!editing}
          onClick={() => {
            updateTodo(todo);
            setTodo(emptyTodo);
          }}
          id="wd-context-update-todo-click"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium disabled:opacity-50"
        >
          Update
        </button>
      </div>
      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            id={`wd-context-todo-${t.id}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span>{t.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                onClick={() => setTodo(t)}
                id={`wd-context-edit-todo-${t.id}-click`}
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(t.id)}
                id={`wd-context-delete-todo-${t.id}-click`}
                className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}