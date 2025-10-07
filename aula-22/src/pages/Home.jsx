import { useState } from "react";
import Header from "../components/Header";

export default () => {

    const [count, setCount] = useState(1);

    function incrementar() {
        setCount(count + 1);
    }

    function decrementar() {
        setCount(count - 1);
    }

    return (
        <div>
            <Header titulo="Página Inicial" />
            <p className="text-xl">
                {count}
            </p>

            <button onClick={incrementar} className="text-white bg-slate-800 px-2 py-1 rounded me-2 font-mono">
                +1
            </button>

            <button onClick={decrementar} className="text-white bg-slate-800 px-2 py-1 rounded me-2 font-mono">
                -1
            </button>
        </div>
    );
}
