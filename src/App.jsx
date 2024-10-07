import React, { useState, useEffect } from "react";
import "./App.css";

const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
const rotationDegrees = {
  NORTH: "0deg",
  EAST: "90deg",
  SOUTH: "180deg",
  WEST: "270deg",
};

const BellRobo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("NORTH");
  const [rotation, setRotation] = useState(rotationDegrees["NORTH"]);

  const rotateLeft = () => {
    const currentIdx = directions.indexOf(direction);
    const newIdx = (currentIdx - 1 + directions.length) % directions.length;
    setDirection(directions[newIdx]);
  };

  const rotateRight = () => {
    const currentIdx = directions.indexOf(direction);
    const newIdx = (currentIdx + 1) % directions.length;
    setDirection(directions[newIdx]);
  };

  const moveForward = () => {
    const { x, y } = position;

    switch (direction) {
      case "NORTH":
        if (y < 4) setPosition({ x, y: y + 1 });
        break;
      case "EAST":
        if (x < 4) setPosition({ x: x + 1, y });
        break;
      case "SOUTH":
        if (y > 0) setPosition({ x, y: y - 1 });
        break;
      case "WEST":
        if (x > 0) setPosition({ x: x - 1, y });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setRotation(rotationDegrees[direction]);
  }, [direction]);

  return (
    <div className="robot-simulator">
      <h1>BELL ROY ROBOT</h1>
      <div className="grid">
        {[...Array(5)].map((_, row) => (
          <div key={row} className="row">
            {[...Array(5)].map((_, col) => (
              <div
                key={col}
                className={`cell ${
                  position.x === col && position.y === 4 - row ? "robot" : ""
                }`}
              >
                {position.x === col && position.y === 4 - row && (
                  <span className="robot-icon" style={{ transform: `rotate(${rotation})` }}>
                    🦉
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
};

export default BellRobo;
