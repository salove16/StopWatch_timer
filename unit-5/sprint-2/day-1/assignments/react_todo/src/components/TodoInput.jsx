import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");

  return (
    <div>
      {/* <button
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button> */}
      <input
        type="text" placeholder="+ Add a To-Do..."
        onKeyDown={(e)=>(
            e.key==="Enter" ? getData(text):null
         ) }
        
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};
