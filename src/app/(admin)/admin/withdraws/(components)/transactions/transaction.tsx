'use client';

import { useState } from 'react';

import { ITransaction } from '@src/interfaces';

import { format } from 'date-fns';
import { PiCheckBold, PiXBold } from 'react-icons/pi';
import { apiClient } from '@src/services';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export function Transaction({
  id,
  user,
  amount,
  type,
  updated_at,
  status,
}: ITransaction) {
  const [loading, setLoading] = useState(false);

  async function acceptFunction() {
    setLoading(true);

    await apiClient
      .post(`/withdraws/accept`, {
        withdraw_id: id,
        withdraw_user_id: user.id,
      })
      .then(response => {
        toast.success(response.data.message);

        window.location.reload();
      })
      .catch(error => {
        toast.error(error.response.data.error);
      });

    setLoading(false);
  }

  async function accept() {
    try {
      Swal.fire({
        title: 'Confirmação',
        text: 'Você tem certeza que deseja aprovar este saque?',
        icon: 'question',
        showDenyButton: true,
        showCancelButton: false,
        background: 'rgb(17,24,39)',
        color: '#fff',
        confirmButtonColor: 'rgb(192,132,252)',
        denyButtonColor: 'rgb(31,41,55)',
        confirmButtonText: 'Sim, aprovar',
        denyButtonText: 'Cancelar',
      }).then(async result => {
        if (result.isConfirmed) {
          setLoading(true);

          acceptFunction();
        }
      });
    } catch (error: any) {
      toast.error(error.response.data.message);

      setLoading(false);
    }
  }

  async function cancelFunction() {
    setLoading(true);

    await apiClient
      .post(`/withdraws/cancel`, {
        withdraw_id: id,
        withdraw_user_id: user.id,
      })
      .then(response => {
        toast.success(response.data.message);

        window.location.reload();
      })
      .catch(error => {
        toast.error(error.response.data.error);
      });

    setLoading(false);
  }

  async function cancel() {
    try {
      Swal.fire({
        title: 'Confirmação',
        text: 'Você tem certeza que deseja cancelar este saque?',
        icon: 'question',
        showDenyButton: true,
        showCancelButton: false,
        background: 'rgb(17,24,39)',
        color: '#fff',
        confirmButtonColor: 'rgb(192,132,252)',
        denyButtonColor: 'rgb(31,41,55)',
        confirmButtonText: 'Sim, cancelar',
        denyButtonText: 'Cancelar',
      }).then(async result => {
        if (result.isConfirmed) {
          setLoading(true);

          cancelFunction();
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
      <td className="px-6 py-4">{user.username}</td>
      <td className="px-6 py-4">
        {amount.toLocaleString('pt-br', {
          currency: 'BRL',
          style: 'currency',
        })}
      </td>
      <td className="px-6 py-4">Saque</td>
      <td className="px-6 py-4">
        {updated_at ? format(new Date(updated_at), "dd/MM/yyyy 'às' HH:mm") : null}
      </td>
      <td className="px-6 py-4">
        {(status === 'PENDING' && 'Pendente') ||
          (status === 'PAID' && 'Aprovado') ||
          (status === 'CANCELED' && 'Cancelado') ||
          (status === 'REFUNDED' && 'Reembolsado') ||
          (status === 'REJECTED' && 'Recusado') ||
          (status === 'FAILED' && 'Falhou') ||
          (status === 'WAITING_PAYMENT_GATEWAY' && 'Aguardando')}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex justify-center items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={accept}
            disabled={loading}
          >
            <PiCheckBold className="text-green-400" size={18} /> Aprovar
          </button>
          <button
            type="button"
            className="flex justify-center items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={cancel}
            disabled={loading}
          >
            <PiXBold className="text-red-400" size={18} /> Cancelar
          </button>
        </div>
      </td>
    </tr>
  );
}
