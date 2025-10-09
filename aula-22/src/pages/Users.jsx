import { useState } from "react";
import Header from "../components/Header";

export default () => {
    const [nome, setNome] = useState("");

    function cadastrarUsuario() {
        window.alert("Cadastrando usuário")
    }

    function atualizarNome(event) {
        const nome = event.target.value;
        setNome(nome);
    }

    return (
        <div>
            <Header titulo="Página de Usuários" />
            
            <div className="w-full max-w-[1200px] mx-auto p-8">
                <h1 className="text-2xl font-semibold">Usuários</h1>

                <h2>{nome}</h2>

                <form onSubmit={cadastrarUsuario} className="mt-4">
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="nome">Nome</label>
                        <input onChange={atualizarNome} type="text" name="nome" id="nome" className="border-2 border-slate-400 rounded outline-none p-2 focus:border-slate-600" />
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className="border-2 border-slate-400 rounded outline-none p-2 focus:border-slate-600" />
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="senha">Senha</label>
                        <input type="text" name="senha" id="senha" className="border-2 border-slate-400 rounded outline-none p-2 focus:border-slate-600" />
                    </div>

                    <button className="text-white bg-slate-700 hover:bg-slate-800 p-2 rounded cursor-pointer mt-4">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}