import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ColoredLogo from "../assets/ColoredLogo.png";
import BG1 from "../assets/BG1.png";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-[100vh]"
        style={{
          backgroundImage: `url(${BG1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pb-8 flex flex-col justify-center text-left gap-5">
          <img src={ColoredLogo} alt="Colored Logo" className="w-40" />
          <div className="text-6xl font-bold mt-8">
            <p>YOUR VERY OWN </p>
            <span className="text-purple-950"> AI-POWERED </span>{" "}
            <span>DIAGNOSIS</span>
            <p>ASSISTANT</p>
          </div>
          <h2 className="text-lg">
            Get accurate diagnosis results with DSM-5 trained AI and keep
            <br />
            track of your patient’s data.
          </h2>
          <div>
            <Button size="lg" onClick={() => navigate("/signin")}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex gap-4 font-medium h-[170px]">
          <div className="rounded-lg bg-zinc-50 w-[180px] h-full p-3 text-right drop-shadow-md">
            <p className="text-left text-xl">Deployed in</p>
            <p className="text-7xl font-bold text-purple-950 mt-4">50+</p>
            <span className="text-xl">Hospitals</span>
          </div>
          <div className="rounded-lg bg-zinc-50 w-[220px] h-full p-3 text-right drop-shadow-md">
            <p className="text-left text-xl">Trusted by</p>
            <p className="text-7xl font-bold text-emerald-900 mt-4">200+</p>
            <span className="text-xl">Psychiatrist</span>
          </div>
          <div className="rounded-lg bg-zinc-50 w-[320px] h-full p-3 text-right flex flex-col justify-between drop-shadow-md">
            <div>
              <p className="text-left text-2xl font-bold">
                Want to work with us?
              </p>
              <p className="text-left text-md">
                Deploy Mindseek for an accurate and easy diagnosis tool.{" "}
              </p>
            </div>
            <Button size="lg" className="self-end" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
