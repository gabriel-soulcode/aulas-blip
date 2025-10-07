import { Link } from "react-router-dom";

export default (props) => {
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
            <Link className="text-white hover:underline" to="/signin">Entrar</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/signup">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}