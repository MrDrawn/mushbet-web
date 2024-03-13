'use client';

import { useUser } from '@src/contexts';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RiLoader5Fill } from 'react-icons/ri';
interface IFormData {
  username: string;
  password: string;
  remember_me: boolean;
}

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const { signIn } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  async function onSubmit({ username, password, remember_me }: IFormData) {
    setLoading(true);

    if (!username || !password) {
      toast.error('Você precisa preencher os campos.');

      return setLoading(false);
    }

    if (username.length < 4) {
      toast.error('O nome de usuário precisa ter no mínimo 4 caracteres.');

      return setLoading(false);
    }

    if (password.length < 6) {
      toast.error('A sua senha precisa ter no mínimo 4 caracteres.');

      return setLoading(false);
    }

    await signIn({ username, password, remember_me, setLoading, close });
  }

  return (
    <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[20px]">
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
            className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
              errors.username && 'outline-red-500'
            }`}
            readOnly={loading}
            {...register('username', { required: true })}
          />
          {errors.username && (
            <p className="text-[14px] text-red-500">Você precisa inserir o usuário.</p>
          )}
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
            className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
              errors.password && 'outline-red-500'
            }`}
            readOnly={loading}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="text-[14px] text-red-500">Você precisa inserir a senha.</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary-100 hover:bg-primary-200 text-white rounded-[5px] py-[15px] w-full font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex justify-center items-center gap-2">
              <RiLoader5Fill className="animate-spin" size={20} /> Carregando...
            </span>
          ) : (
            'Login'
          )}
        </button>
      </div>
    </form>
  );
}
