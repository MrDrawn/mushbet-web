export function LoginForm() {
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
            placeholder="example@mushbet.com"
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
        <button className="bg-primary-100 text-white rounded-[5px] py-[15px] w-full font-medium text-[14px]">
          Entrar
        </button>
      </div>
    </div>
  );
}
