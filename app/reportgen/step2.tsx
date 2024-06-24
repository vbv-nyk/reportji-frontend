import ButtonYellow1 from "../Components/Buttons/ButtonYellow1";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";

export default function Step2() {
  return (
    <div className="flex flex-col p-8 rounded-lg gap-4 bg-gray-300 ">
      <div className="flex gap-8 justify-between">
        <select
          id="types"
          name="types"
          className="bg-white font-bold rounded-md pl-3 pr-4 py-1"
        >
          <option value="Title">Title</option>
          <option value="Subtitle">Subtitle</option>
          <option value="Author">Author</option>
          <option value="Date">Date</option>
        </select>
        <div className="w-full">
          <input
            className="w-full py-2 pl-4 font-semibold placeholder:text-gray-500 rounded-md"
            placeholder="Add Your Text Here......"
          />
        </div>
      </div>
      <div className="self-center">
        <ButtonYellow2 content="Submit" onClick={()=>{}}/>
      </div>
    </div>
  );
}
