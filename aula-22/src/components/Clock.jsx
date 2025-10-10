import { useEffect, useState } from "react";

function getTimeNow() {
    const now = new Date();
    return now.toLocaleTimeString();
}

export default () => {
    const [hours, setHours] = useState(getTimeNow());

    useEffect(() => {
        if (hours === "14:03:00") {
            window.alert("Oba! Intervalo.");
        }
    }, [hours]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = getTimeNow();
            setHours(now);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <span className="inline-block bg-slate-400 font-mono rounded py-2 px-3">
            {hours}
        </span>
    );
}