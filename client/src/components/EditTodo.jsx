import { useState } from "react";
import { Button } from "./ui/button";
import { demoItems } from "@/utils/demoItems";
import { useMemo } from "react";

const EditTodo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(demoItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );
  return (
    <div className="text-black">
      <h1>Count: {count}</h1>
      <h1>Selected Items: {selectedItem?.id}</h1>
      <Button className={"cursor-pointer"} onClick={() => setCount(count + 1)}>
        Increment Count
      </Button>
    </div>
  );
};
export default EditTodo;
