import "./App.css";
import { useState } from "react";
import Userpoint from "./Userpoint";

function App() {
  const [points, setPoints] = useState([]);
  const [deletedPoints, setDeletedPoints] = useState([]);
  const handleClick = (event) => {
    return setPoints([
      ...points,
      {
        x: event.clientX,
        y: event.clientY,
      },
    ]);
  };
  const handleUndo = () => {
    setDeletedPoints([...deletedPoints, points.pop()]);
    setPoints([...points]);
  };
  const handleRedo = () => {
    if (deletedPoints.length > 0) {
      setPoints([...points, deletedPoints.pop()]);
      setDeletedPoints([...deletedPoints]);
    }
  };
  return (
    <div className="App">
      <Userpoint />
      <div>
        <button type="button" onClick={handleUndo}>
          Undo
        </button>
        <button type="button" onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div className="area" onClick={handleClick}>
        {points.map((point, index) => {
          if (point) {
            return (
              <div
                key={index}
                className="point"
                style={{ top: point.y, left: point.x }}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
