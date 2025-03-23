import { Pencil } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function Symptoms({message, isGood} : {message : String, isGood : boolean}) {
  return (
    <>
      <div className={`rounded-lg px-3 py-2 flex items-center justify-between gap-4 ${isGood ? "bg-emerald-600" : "bg-red-600"}`}>
        <p>{message}</p>
        <Button variant="ghost" size="icon">
          <Pencil />
        </Button>
      </div>
    </>
  );
}
