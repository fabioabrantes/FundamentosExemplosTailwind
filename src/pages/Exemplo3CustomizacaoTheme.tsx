
export function Exemplo3CustomizacaoTheme() {


  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="size-12" src="/img/chat.png" alt="ChitChat Logo" />
      </div>
      <div>
        <h1 className="bg-danger text-[22px] italic font-rale font-hairline">Sejam bem vindo</h1>
        <h2 className="bg-info-900 text-white font-robo">Gostaria de convesar?</h2>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">Mande sua nova mensagem!</p>
      </div>
    </div>

  );
}
