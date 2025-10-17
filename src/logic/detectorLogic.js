import { useState, useMemo } from "react";
import { getColor, getEvaluation, getArcData } from "../utils/detectorUtils.js";

export const useDetectorLogic = () => {
    const [text, setText] = useState("");
    const [percentage, setPercentage] = useState(0);

    const color = useMemo(() => getColor(percentage), [percentage]);
    const evaluation = useMemo(() => getEvaluation(percentage), [percentage]);
    const { strokeDasharray, strokeDashoffset } = useMemo(
        () => getArcData(percentage),
        [percentage]
    );

    const hf = import.meta.env.VITE_HF_TOKEN;
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const handleDetect = async () => {
        try {
            const response = await fetch(`${API_URL}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${hf}`,
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                alert("No Input Detected");
                return;
            }

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                alert("Server returned non-JSON response.");
                return;
            }

            const data = await response.json();

            if (data.aiPercentage !== undefined) {
                setPercentage(Math.round(data.aiPercentage));
            } else {
                alert("Error: Response doesn't contain aiPercentage.");
            }
        } catch (error) {
            alert("An error occurred while detecting: " + error.message);
        }
    };

    return {
        text,
        setText,
        percentage,
        color,
        evaluation,
        strokeDasharray,
        strokeDashoffset,
        handleDetect,
    };
};
