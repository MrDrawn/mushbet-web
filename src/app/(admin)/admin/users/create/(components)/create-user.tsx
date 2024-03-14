'use client';

import { apiClient } from '@src/services';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RiLoader5Fill } from 'react-icons/ri';

interface IFormData {
  name: string;
  username: string;
  password: string;
  document: string;
  indicationCode?: string;
}

export function CreateUser() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<IFormData>();

  async function onSubmit({
    name,
    username,
    password,
    document,
    indicationCode,
  }: IFormData) {
    setLoading(true);

    if (!name || !username || !password || !document) {
      toast.error('Você precisa preencher os campos.');

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
        toast.success('O usuário foi criado com sucesso!');

        window.location.href = `/admin/users/${response.data.id}`;
      })
      .catch(error => {
        toast.error(error.response.data.message);

        setLoading(false);
      });
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3 relative">
          <label htmlFor="name" className="text-white">
            Nome da pessoa
          </label>
          <input
            id="name"
            type="text"
            className="w-full text-[14px] bg-dark-100 border-dark-200 text-white px-2.5 py-2.5 rounded-lg outline-none"
            placeholder="Nome da pessoa"
            required
            readOnly={loading}
            {...register('name', { required: true })}
          />
        </div>
        <div className="flex flex-col gap-3 relative">
          <label htmlFor="username" className="text-white">
            Nome de usuário
          </label>
          <input
            id="username"
            type="text"
            className="w-full text-[14px] bg-dark-100 border-dark-200 text-white px-2.5 py-2.5 rounded-lg outline-none"
            placeholder="Nome de usuário"
            required
            readOnly={loading}
            {...register('username', { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="password" className="text-white">
          Senha do usuário
        </label>
        <input
          id="password"
          type="password"
          className="w-full text-[14px] bg-dark-100 border-dark-200 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="Senha de usuário"
          required
          readOnly={loading}
          {...register('password', { required: true })}
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="document" className="text-white">
          CPF do usuário
        </label>
        <input
          id="document"
          type="text"
          className="w-full text-[14px] bg-dark-100 border-dark-200 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="CPF do usuário"
          required
          readOnly={loading}
          {...register('document', { required: true })}
        />
      </div>
      <button
        type="submit"
        className="bg-primary-100 hover:bg-primary-200 text-white rounded-[5px] px-[20px] py-[15px] font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed w-full"
        disabled={loading}
      >
        {loading ? (
          <span className="flex justify-center items-center gap-2">
            <RiLoader5Fill className="animate-spin" size={20} /> Carregando...
          </span>
        ) : (
          'Criar usuário'
        )}
      </button>
    </form>
  );
}
