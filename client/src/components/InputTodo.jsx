import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl mt-2 font-bold">PERN Todo List</h1>
      <form
        className="flex w-full max-w-sm items-center gap-2 mx-auto mt-4"
        onSubmit={onSubmitForm}
      >
        <Input
          type={"text"}
          placeholder=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="outline">
          Add
        </Button>
      </form>
    </div>
  );
};
export default InputTodo;
