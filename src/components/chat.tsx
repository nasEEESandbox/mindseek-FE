export default function Chat({message} : {message : String}) {
  return (
    <>
      <div className="bg-zinc-300 p-2 w-lg text-right rounded-md self-end">
        {message}
      </div>
    </>
  );
}
