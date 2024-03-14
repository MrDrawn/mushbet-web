'use client';

import { apiClient } from '@src/services';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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
            className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
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
            className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
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
          className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
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
          className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="CPF do usuário"
          required
          readOnly={loading}
          {...register('document', { required: true })}
        />
      </div>
      <button
        type="submit"
        className="text-[12px] lg:text-[14px] bg-purple-400 hover:bg-purple-500 text-white py-3 px-5 rounded-lg transition-all ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        Criar usuário
      </button>
    </form>
  );
}
