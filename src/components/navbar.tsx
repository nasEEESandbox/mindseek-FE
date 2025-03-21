import ColoredLogo from "../assets/ColoredLogo.png";   

export default function Navbar() {
  return (
    <>
      <div className="p-6">
          <img src={ColoredLogo} alt="Colored Logo" className="w-40"/>
      </div>
    </>
  );
}
