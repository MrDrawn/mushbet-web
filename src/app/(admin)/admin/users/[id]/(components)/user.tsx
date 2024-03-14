'use client';

import { IPlataform } from '@src/interfaces';
import { apiClient } from '@src/services';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IFormData {
  name: string;
  username: string;
  document: string;
  balance: number;
  rollover: number;
  password?: string;
  email?: string;
  blockedWithdraw: boolean;
}

export function User({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, setValue } = useForm<IFormData>();

  async function onSubmit({
    name,
    username,
    password,
    document,
    balance,
    rollover,
    blockedWithdraw,
    email,
  }: IFormData) {
    setLoading(true);

    if (!name || !username || !document || !balance || !rollover) {
      toast.error('Você precisa preencher os campos.');

      return setLoading(false);
    }

    await apiClient
      .put(`/users/${id}`, {
        name,
        username,
        password,
        document,
        balance,
        rollover,
        blockedWithdraw,
        email,
      })
      .then(response => {
        toast.success('O usuário foi atualizado com sucesso!');

        setLoading(false);
      })
      .catch(error => {
        toast.error(error.response.data.message);

        setLoading(false);
      });
  }

  async function getUser() {
    await apiClient
      .get(`/user/${id}`)
      .then(response => {
        setValue('name', response.data.name);
        setValue('username', response.data.username);
        setValue('document', response.data.document.document);
        setValue('balance', response.data.wallet.balance);
        setValue('rollover', response.data.rollover);
        setValue('email', response.data.email);
        setValue('blockedWithdraw', response.data.blocked_withdraw);

        setLoading(false);
      })
      .catch(error => {
        window.location.href = '/admin/users';
      });
  }

  useEffect(() => {
    getUser();
  }, [id]);

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
          placeholder="Senha de usuário (Opcional)"
          readOnly={loading}
          {...register('password', { required: false })}
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
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="email" className="text-white">
          E-mail do usuário
        </label>
        <input
          id="email"
          type="email"
          className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="E-mail do usuário (Opcional)"
          readOnly={loading}
          {...register('email', { required: false })}
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="balance" className="text-white">
          Carteira do usuário
        </label>
        <input
          id="balance"
          type="number"
          className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="Carteira do usuário"
          required
          readOnly={loading}
          {...register('balance', { required: true })}
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="rollover" className="text-white">
          Rollover do usuário
        </label>
        <input
          id="rollover"
          type="number"
          className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="Rollover do usuário"
          required
          readOnly={loading}
          {...register('rollover', { required: true })}
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="external_id" className="text-white">
          O saque está bloqueado?
        </label>
        <div className="cursor-pointer items-center">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              disabled={loading}
              {...register('blockedWithdraw')}
            />
            <div className="w-11 h-6 bg-gray-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Saque bloqueado?
            </span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-[12px] lg:text-[14px] bg-purple-400 hover:bg-purple-500 text-white py-3 px-5 rounded-lg transition-all ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        Salvar usuário
      </button>
    </form>
  );
}
