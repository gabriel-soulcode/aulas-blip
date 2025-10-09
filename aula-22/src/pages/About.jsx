import Header from "../components/Header";

const questions = [
    {
        id: 1,
        pergunta: "O que é o sistema de controle de usuários e produtos?",
        resposta: "É uma plataforma que permite gerenciar cadastros de usuários e produtos de forma simples e segura, com recursos de autenticação e controle de acesso."
    },
    {
        id: 2,
        pergunta: "Quem pode acessar o sistema?",
        resposta: "Apenas usuários cadastrados e autorizados podem acessar o sistema. Cada perfil possui permissões específicas de acordo com o seu nível de acesso."
    },
    {
        id: 3,
        pergunta: "Como faço para cadastrar um novo usuário?",
        resposta: "No menu de 'Usuários', clique em 'Novo Usuário' e preencha os campos obrigatórios, como nome, e-mail, senha e nível de acesso."
    },
    {
        id: 4,
        pergunta: "Posso alterar as informações de um usuário?",
        resposta: "Sim. Acesse a lista de usuários, selecione o usuário desejado e clique em 'Editar' para atualizar as informações necessárias."
    },
    {
        id: 5,
        pergunta: "Como cadastrar um novo produto?",
        resposta: "Acesse o módulo de 'Produtos' e clique em 'Novo Produto'. Informe nome, descrição, preço, quantidade e outras informações relevantes."
    },
    {
        id: 6,
        pergunta: "É possível excluir um produto do sistema?",
        resposta: "Sim, mas apenas usuários com permissão de administrador podem excluir produtos permanentemente do sistema."
    },
    {
        id: 7,
        pergunta: "O sistema possui controle de estoque?",
        resposta: "Sim. Cada produto tem um campo de quantidade em estoque que é atualizado automaticamente a cada movimentação."
    },
    {
        id: 8,
        pergunta: "O que acontece se eu esquecer minha senha?",
        resposta: "Você pode solicitar a redefinição de senha clicando em 'Esqueci minha senha' na tela de login. Um link de recuperação será enviado ao seu e-mail cadastrado."
    },
    {
        id: 9,
        pergunta: "Posso exportar a lista de usuários e produtos?",
        resposta: "Sim, é possível exportar os dados em formato CSV ou PDF para facilitar o controle externo ou relatórios."
    },
    {
        id: 10,
        pergunta: "Os meus dados estão seguros?",
        resposta: "Sim. O sistema utiliza criptografia de senhas e autenticação JWT para garantir a segurança das informações."
    }
];

export default () => {
    return (
        <div>
            <Header titulo="Sobre" />
            <div className="w-full max-w-[1200px] mx-auto p-8">
                <h1 className="text-2xl font-semibold">Perguntas Frequentes</h1>

                {questions.map(q => (
                    <div key={q.id} className="mt-4">
                        <h2 className="rounded-t bg-slate-600 text-slate-100 p-4">
                            {q.pergunta}
                        </h2>
                        <p className="rounded-b bg-slate-400 text-slate-800 p-4">
                            {q.resposta}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}