'use client';

import { useEffect, useState } from 'react';

import { Plataform } from '.';

import { apiClient } from '@src/services';

import { IPlataform } from '@src/interfaces';

export function Plataforms() {
  const [loading, setLoading] = useState(true);

  const [plataforms, setPlataforms] = useState<IPlataform[]>([]);

  async function getPlataforms() {
    await apiClient
      .get('/plataforms')
      .then(response => {
        setPlataforms(response.data);

        setLoading(false);
      })
      .catch(error => {});
  }

  useEffect(() => {
    getPlataforms();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col gap-[30px]">
          <div className="h-[30px] w-[350px] bg-dark-200 rounded-[4px] animate-pulse" />
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[10px] lg:gap-[30px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-[220px] bg-dark-200 rounded-[4px] animate-pulse"
              />
            ))}
          </div>
        </div>
      ) : plataforms.length > 0 ? (
        plataforms.map((plataform, index) => <Plataform key={index} {...plataform} />)
      ) : (
        <div>
          <p className="text-white">Não há nenhuma plataforma disponível.</p>
        </div>
      )}
    </div>
  );
}
