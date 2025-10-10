import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default () => {
    const [users, setUsers] = useState(null);
    const [nome, setNome] = useState("");

    function cadastrarUsuario() {
        window.alert("Cadastrando usuário")
    }

    function atualizarNome(event) {
        const nome = event.target.value;
        setNome(nome);
    }

    async function fetchUsers() {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <Header titulo="Página de Usuários" />

            <div className="w-full max-w-[1200px] mx-auto p-8">
                <h1 className="text-2xl font-semibold">Cadastro de Usuário</h1>

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

                <h2 className="mt-8 text-2xl font-semibold">
                    Lista de Usuários
                </h2>

                <table className="mt-4 w-full">
                    <thead>
                        <tr>
                            <th className="text-left text-slate-400 p-2">Nome</th>
                            <th className="text-left text-slate-400 p-2">E-mail</th>
                            <th className="text-left text-slate-400 p-2">Idade</th>
                            <th className="text-left text-slate-400 p-2">Papel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user._id}>
                                <td className="border-2 border-slate-300 p-2">{user.nome}</td>
                                <td className="border-2 border-slate-300 p-2">{user.email}</td>
                                <td className="border-2 border-slate-300 p-2">{user.idade}</td>
                                <td className="border-2 border-slate-300 p-2">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}