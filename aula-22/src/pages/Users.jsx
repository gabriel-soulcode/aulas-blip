import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export default () => {
    const [users, setUsers] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { authenticatedUser } = useAuth();

    async function cadastrarUsuario(dados) {
        try {
            await axios.post("http://localhost:8080/users", dados);
            reset();
            fetchUsers();
        } catch (error) {
            console.error(error);
            toast.error("Algo deu errado. Tente novamente mais tarde.");
        }
    }

    async function fetchUsers() {
        try {
            const response = await axios.get("http://localhost:8080/users");
            setUsers(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Algo deu errado. Tente novamente mais tarde.");
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if (!authenticatedUser) {
        return <Navigate to="/signin" />;
    }

    return (
        <div>
            <Header titulo="Página de Usuários" />

            <div className="w-full max-w-[1200px] mx-auto p-8">
                <h1 className="text-2xl font-semibold">Cadastro de Usuário</h1>

                <form onSubmit={handleSubmit(cadastrarUsuario)} className="mt-4">
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="nome">Nome</label>
                        <input {...register("nome", {
                            required: { value: true, message: "O nome é obrigatório." },
                            minLength: { value: 5, message:  "O nome deve ter no minimo 5 letras." }
                            })} type="text" id="nome" className="border-2 border-slate-400 rounded outline-none p-2 focus:border-slate-600" />
                        <small className="text-sm text-red-500">{errors?.nome?.message}</small>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="email">Email</label>
                        <input {...register("email", {
                            required: { value: true, message: "O e-mail é obrigatório." },
                            pattern: { value: regexEmail, message: "O e-mail está inválido." }
                            })} type="email" id="email" className="border-2 border-slate-400 rounded outline-none p-2 focus:border-slate-600" />
                        <small className="text-sm text-red-500">{errors?.email?.message}</small>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="senha">Senha</label>
                        <input {...register("senha", {
                            required: { value: true, message: "A senha é obrigatória." },
                            minLength: { value: 6, message: "A senha deve ter no minimo 6 caracteres." }
                            })} type="password" id="senha" className="border-2 border-slate-400 rounded outline-none p-2 focus:border-slate-600" />
                        <small className="text-sm text-red-500">{errors?.senha?.message}</small>
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