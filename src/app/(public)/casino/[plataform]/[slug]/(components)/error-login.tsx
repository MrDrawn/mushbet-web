import { PiLockBold } from 'react-icons/pi';

export function ErrorLogin({
  setAuthOpen,
}: {
  setAuthOpen: (authOpen: boolean) => void;
}) {
  return (
    <>
      <div className="relative w-ful text-center flex justify-center items-center z-47 h-[60vh]">
        <div className="flex justify-center items-center flex-col gap-3">
          <PiLockBold className="text-white" size={48} />
          <h1 className="text-[23px] text-white font-bold">
            Você precisa entrar para jogar.
          </h1>
          <button
            className="bg-primary-100 hover:bg-primary-200 text-white rounded-[5px] px-[30px] py-[15px] font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            arial-label="Entrar"
            onClick={() => setAuthOpen(true)}
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}
