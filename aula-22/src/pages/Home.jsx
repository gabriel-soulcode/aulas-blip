import Clock from "../components/Clock";
import Header from "../components/Header";

export default () => {

    return (
        <div>
            <Header titulo="Página Inicial" />
            
            <div className="w-full max-w-[1200px] mx-auto p-8">
                <h1 className="text-2xl font-semibold">Página Inicial</h1>

                <div className="mt-4">
                    <Clock />
                </div>
            </div>
        </div>
    );
}
