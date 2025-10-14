import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default (props) => {
  const { authenticatedUser, logout } = useAuth();

  return (
    <header className="w-full px-8 py-4 bg-slate-900 flex gap-4 items-center justify-between">
      <h1 className="text-white text-xl font-semibold">{props.titulo}</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link className="text-white hover:underline" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/about">Sobre</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/users">Usuários</Link>
          </li>
          <li>
            {!!authenticatedUser ? (
              <button onClick={logout} className="text-white hover:underline">Sair</button>
            ) : (
              <Link className="text-white hover:underline" to="/signin">Entrar</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}