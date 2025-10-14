import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

export default () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleLogin(credentials) {
        await login(credentials);
        navigate("/");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-[30rem] shadow-xl rounded-2xl p-6 border border-slate-400">
                <h1 className="text-2xl text-slate-800 font-semibold uppercase">Login</h1>
                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="text" id="email" className="px-3 py-2 border border-slate-600 rounded" />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label htmlFor="senha">Senha</label>
                    <input {...register("senha")} type="password" id="senha" className="px-3 py-2 border border-slate-600 rounded" />
                </div>

                <button className="text-white bg-slate-800 hover:bg-slate-900 transition-all rounded px-3 py-2 mt-4">
                    Entra
                </button>
            </form>
        </div>
    );
}