import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="mt-2">
      <h1>ListTodo</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Description</TableHead>
            <TableHead className={"text-center"}>Edit</TableHead>
            <TableHead className={"text-center"}>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.todo_id}>
              <TableCell className="font-medium">{todo.description}</TableCell>
              <TableCell>
                <Button variant={"secondary"}>Edit</Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDelete(todo.todo_id)}
                  variant={"destructive"}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ListTodo;
