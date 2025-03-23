export default function Chat({message} : {message : String}) {
  return (
    <>
    <div className="flex justify-end w-full">
      <div className="inline-block bg-blue-200 px-3 py-2 rounded-md text-right max-w-fit">
        {message}
      </div>
    </div>
    </>
  );
}
