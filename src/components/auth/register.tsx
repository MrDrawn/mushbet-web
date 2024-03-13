'use client';

import { CheckBox } from '@src/components';
import { apiClient } from '@src/services';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RiLoader5Fill } from 'react-icons/ri';
import ReactInputMask from 'react-input-mask';

interface IFormData {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  document: string;
  indicationCode?: string;
}

export function RegisterForm({
  setSelectedTab,
  indication,
}: {
  setSelectedTab: (selectedTab: 'login' | 'register') => void;
  indication?: string;
}) {
  const [loading, setLoading] = useState(false);

  const [useIndication, setUseIndication] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  async function onSubmit({
    name,
    username,
    password,
    confirmPassword,
    terms,
    document,
    indicationCode,
  }: IFormData) {
    setLoading(true);

    if (!username || !password || !document) {
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

    if (password !== confirmPassword) {
      toast.error('As senhas não são iguais.');

      return setLoading(false);
    }

    if (!terms) {
      toast.error('Você precisa aceitar os termos de uso.');

      return setLoading(false);
    }

    await apiClient
      .post('/users', {
        name,
        username,
        password,
        document,
        indicationCode,
      })
      .then(response => {
        toast.success(response.data.message);

        setSelectedTab('login');
      })
      .catch(error => {
        toast.error(error.response.data.message);

        return setLoading(false);
      });
  }

  useEffect(() => {
    if (indication) {
      setUseIndication(true);
      setValue('indicationCode', indication);
    }
  }, [indication]);

  return (
    <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="name" className="text-secondary-100 text-[14px] font-medium">
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
              errors.name && 'outline-red-500'
            }`}
            readOnly={loading}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="text-[14px] text-red-500">Você precisa inserir o nome.</p>
          )}
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="document"
            className="text-secondary-100 text-[14px] font-medium"
          >
            CPF
          </label>
          <ReactInputMask
            id="document"
            type="text"
            className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
              errors.username && 'outline-red-500'
            }`}
            mask="999.999.999-99"
            placeholder="Seu CPF"
            required
            readOnly={loading}
            {...register('document', { required: true })}
          />
          {errors.document && (
            <p className="text-[14px] text-red-500">Você precisa inserir o documento.</p>
          )}
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
            placeholder="Seu usuário"
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
            className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
              errors.confirmPassword && 'outline-red-500'
            }`}
            readOnly={loading}
            {...register('confirmPassword', { required: true })}
          />
          {errors.confirmPassword && (
            <p className="text-[14px] text-red-500">Você precisa repetir a senha.</p>
          )}
        </div>
        {useIndication ? (
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="indicationCode"
              className="text-secondary-100 text-[14px] font-medium"
            >
              Indicação
            </label>
            <input
              id="indicationCode"
              type="text"
              placeholder="Código"
              className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                errors.indicationCode && 'outline-red-500'
              }`}
              readOnly={loading}
              {...register('indicationCode', { required: false })}
            />
            {errors.confirmPassword && (
              <p className="text-[14px] text-red-500">
                Você precisa o código de indicação.
              </p>
            )}
          </div>
        ) : (
          <button
            type="button"
            className="text-[14px] text-white"
            onClick={() => setUseIndication(true)}
          >
            Inserir código de indicação
          </button>
        )}
        <div>
          <CheckBox
            id="terms"
            label="Eu concordo com os Termos de Serviço"
            checked={false}
            onChange={e => {
              setValue('terms', e);
            }}
          />
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
            'Cadastrar'
          )}
        </button>
      </div>
    </form>
  );
}
