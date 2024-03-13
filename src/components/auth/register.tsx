import { CheckBox } from '@src/components';

export function RegisterForm() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="email" className="text-secondary-100 text-[14px] font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@mushmc.bet"
            className="bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="username"
            className="text-secondary-100 text-[14px] font-medium"
          >
            Usuário
          </label>
          <input
            id="username"
            type="text"
            placeholder="mushbet"
            className="bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="password"
            className="text-secondary-100 text-[14px] font-medium"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="******"
            className="bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="confirmPassword"
            className="text-secondary-100 text-[14px] font-medium"
          >
            Confirmar senha
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="******"
            className="bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none"
          />
        </div>
        <div>
          <CheckBox
            id="terms"
            label="Eu concordo com os Termos de Serviço"
            checked={false}
            onChange={e => {
              console.log(e);
            }}
          />
        </div>
        <button className="bg-primary-100 text-white rounded-[5px] py-[15px] w-full font-medium text-[14px]">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
