'use client';

import { IUser } from '@src/interfaces';

import { PiPencilBold, PiXBold } from 'react-icons/pi';

import { format } from 'date-fns';
import { useState } from 'react';
import { apiClient } from '@src/services';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Link from 'next/link';

export function User({
  id,
  username,
  email,
  wallet,
  blocked_withdraw,
  updated_at,
}: IUser) {
  const [loading, setLoading] = useState(false);

  async function deleteFunction() {
    setLoading(true);

    await apiClient
      .delete(`/users/${id}`)
      .then(response => {
        toast.success(response.data.message);

        window.location.reload();
      })
      .catch(error => {
        toast.error(error.response.data.error);
      });

    setLoading(false);
  }

  async function remove() {
    try {
      Swal.fire({
        title: 'Confirmação',
        text: 'Você tem certeza que deseja deletar este usuário?',
        icon: 'question',
        showDenyButton: true,
        showCancelButton: false,
        background: 'rgb(17,24,39)',
        color: '#fff',
        confirmButtonColor: 'rgb(192,132,252)',
        denyButtonColor: 'rgb(31,41,55)',
        confirmButtonText: 'Sim, deletar',
        denyButtonText: 'Cancelar',
      }).then(async result => {
        if (result.isConfirmed) {
          setLoading(true);

          deleteFunction();
        }
      });
    } catch (error: any) {
      toast.error(error.response.data.message);

      setLoading(false);
    }
  }

  return (
    <tr className="text-[14px] text-slate-200">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        #{id.split('-')[0]}
      </th>
      <td className="px-6 py-4">{username}</td>
      <td className="px-6 py-4">{email ? email : '-/-'}</td>
      <td className="px-6 py-4">
        {wallet.balance.toLocaleString('pt-br', {
          currency: 'BRL',
          style: 'currency',
        })}
      </td>
      <td className="px-6 py-4">{blocked_withdraw ? 'Sim' : 'Não'}</td>
      <td className="px-6 py-4">
        {updated_at ? format(new Date(updated_at), "dd/MM/yyyy 'às' HH:mm") : null}
      </td>
      <td className="px-6 py-4">Ativa</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href={`/admin/users/${id}`}>
            <PiPencilBold className="text-yellow-400" size={18} />
          </Link>
          <button
            type="button"
            className="disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={remove}
            disabled={loading}
          >
            <PiXBold className="text-red-400" size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
