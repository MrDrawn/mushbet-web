'use client';

import { IPlataform } from '@src/interfaces';
import { apiClient } from '@src/services';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IFormData {
  name: string;
  description: string;
  image: string;
  game_plataform_id: string;
  external_id: number;
  active: boolean;
}

export function Game({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);

  const [plataforms, setPlataforms] = useState<IPlataform[]>([]);

  const { register, handleSubmit, setValue } = useForm<IFormData>();

  async function onSubmit({
    name,
    description,
    image,
    game_plataform_id,
    external_id,
    active,
  }: IFormData) {
    setLoading(true);

    if (!name || !description || !image || !game_plataform_id || !external_id) {
      toast.error('Você precisa preencher os campos.');

      return setLoading(false);
    }

    await apiClient
      .put(`/games/${id}`, {
        name,
        description,
        image,
        game_plataform_id,
        external_id,
        active,
      })
      .then(response => {
        toast.success('O jogo foi atualizado com sucesso!');

        setLoading(false);
      })
      .catch(error => {
        toast.error(error.response.data.message);

        setLoading(false);
      });
  }

  async function getGame() {
    await apiClient
      .get(`/game/${id}`)
      .then(response => {
        setValue('name', response.data.name);
        setValue('description', response.data.description);
        setValue('image', response.data.image);
        setValue('game_plataform_id', response.data.game_plataform_id);
        setValue('external_id', response.data.external_id);
        setValue('active', response.data.active);

        setLoading(false);
      })
      .catch(error => {
        window.location.href = '/admin/games';
      });
  }

  async function getPlataforms() {
    await apiClient
      .get('/plataforms')
      .then(response => setPlataforms(response.data))
      .catch(error => {});
  }

  useEffect(() => {
    getPlataforms();
  }, []);

  useEffect(() => {
    getGame();
  }, [id]);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3 relative">
          <label htmlFor="name" className="text-white">
            Nome do jogo
          </label>
          <input
            id="name"
            type="text"
            className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
            placeholder="Nome do jogo"
            required
            readOnly={loading}
            {...register('name', { required: true })}
          />
        </div>
        <div className="flex flex-col gap-3 relative">
          <label htmlFor="image" className="text-white">
            Imagem do jogo
          </label>
          <input
            id="image"
            type="text"
            className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
            placeholder="Imagem do jogo"
            required
            readOnly={loading}
            {...register('image', { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="description" className="text-white">
          Descrição do jogo
        </label>
        <textarea
          id="description"
          className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
          placeholder="Descrição do jogo"
          required
          readOnly={loading}
          rows={4}
          {...register('description', { required: true })}
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3 relative">
          <label htmlFor="game_plataform_id" className="text-white">
            Plataforma
          </label>
          <select
            id="game_plataform_id"
            className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
            required
            disabled={loading}
            {...register('game_plataform_id', { required: true })}
          >
            <option value="" selected>
              Selecione
            </option>
            {plataforms.map((plataform, index) => (
              <option key={index} value={plataform.id}>
                {plataform.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3 relative">
          <label htmlFor="external_id" className="text-white">
            ID Externo
          </label>
          <input
            id="external_id"
            type="text"
            className="w-full text-[14px] bg-gray-900 border border-gray-800 text-white px-2.5 py-2.5 rounded-lg outline-none"
            placeholder="ID do jogo"
            required
            readOnly={loading}
            {...register('external_id', { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 relative">
        <label htmlFor="external_id" className="text-white">
          O jogo está ativo?
        </label>
        <div className="cursor-pointer items-center">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              disabled={loading}
              {...register('active')}
            />
            <div className="w-11 h-6 bg-gray-800 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Ativo?
            </span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-[12px] lg:text-[14px] bg-purple-400 hover:bg-purple-500 text-white py-3 px-5 rounded-lg transition-all ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        Salvar jogo
      </button>
    </form>
  );
}
