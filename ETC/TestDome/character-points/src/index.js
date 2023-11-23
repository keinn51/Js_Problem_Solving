import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

function CharacterAttributes({ totalPoints }) {
    const [healthPoint, setHealthPoint] = useState(0);
    const [staminaPoint, setStaminaPoint] = useState(0);
    const [speedPoint, setSpeedPoint] = useState(0);
    const totalLimit = useMemo(() => {
        if (totalPoints === 1) return totalPoints;
        return Math.floor(totalPoints * 0.7);
    }, [totalPoints]);

    return (
        <div>
            Character stats:{" "}
            <span id="points">{totalPoints - healthPoint - staminaPoint - speedPoint}</span> points
            left.
            <div>
                <input
                    type="range"
                    id="health"
                    min="0"
                    max={totalPoints}
                    value={healthPoint}
                    onChange={(e) => {
                        const _value = Number(e.target.value);

                        if (
                            _value <= Math.min(totalLimit, totalPoints - staminaPoint - speedPoint)
                        ) {
                            setHealthPoint(Number(e.target.value));
                        }
                    }}
                    step="1"
                />
                Health
            </div>
            <div>
                <input
                    type="range"
                    id="stamina"
                    min="0"
                    max={totalPoints}
                    value={staminaPoint}
                    onChange={(e) => {
                        const _value = Number(e.target.value);
                        if (
                            _value <= Math.min(totalLimit, totalPoints - healthPoint - speedPoint)
                        ) {
                            setStaminaPoint(Number(e.target.value));
                        }
                    }}
                    step="1"
                />
                Stamina
            </div>
            <div>
                <input
                    type="range"
                    id="speed"
                    min="0"
                    max={totalPoints}
                    value={speedPoint}
                    onChange={(e) => {
                        const _value = Number(e.target.value);
                        if (
                            _value <= Math.min(totalLimit, totalPoints - healthPoint - staminaPoint)
                        ) {
                            setSpeedPoint(Number(e.target.value));
                        }
                    }}
                    step="1"
                />
                Speed
            </div>
        </div>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);
