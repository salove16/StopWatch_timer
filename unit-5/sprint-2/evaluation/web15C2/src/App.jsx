import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [toggle, setToggle] = useState(false);

  if (toggle === false) {
    return (
      <div className="App">
        <button
          className="togglebtn"
          onClick={() => {
            setToggle(true);
          }}
        >
          Add a new student{" "}
        </button>
        {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
        {/* make sure the table is shown initially, do not show form initially */}
        {/* make sure to show either of them do not both together */}

        <ShowStudents />
      </div>
    );
  } else if (toggle === true) {
    return (
      <div className="App">
        <button
          className="togglebtn"
          onClick={() => {
            setToggle(false);
          }}
        >
          go to student lists
        </button>
        {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
        {/* make sure the table is shown initially, do not show form initially */}
        {/* make sure to show either of them do not both together */}
        <AddStudent />
      </div>
    );
  }
}

export default App;
