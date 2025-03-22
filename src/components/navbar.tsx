import ColoredLogo from "../assets/ColoredLogo.png";
import { Link } from "react-router";
import { Button } from "./ui/button.js";
import { Bell } from "lucide-react";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <>
      <div className="px-8 py-6 flex justify-between">
        <div className="flex items-center gap-8">
          <img src={ColoredLogo} alt="Colored Logo" className="w-40" />
          <Link to="/home">Home</Link>
          <Link to="/consultation">Consultation</Link>
          <Link to="/patientData">Patient Data</Link>
        </div>
        <div className="flex gap-4">
          <Button size="icon" variant="outline">
            <Bell />
          </Button>
          <Button size="icon" variant="outline">
            <LogOut />
          </Button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r9YAdkCAZqbishkx5Y0ehWQm89BnUH01qA&s" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <div className="text-left text-sm">
              <p className="font-bold">Dr. Lorem Ipsum</p>
              <p>Psychiatrist at RS. Al-Islam</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
