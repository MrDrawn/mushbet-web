import { ITransaction } from '@src/interfaces';

import { format } from 'date-fns';

export function Transaction({
  id,
  user,
  amount,
  type,
  updated_at,
  status,
}: ITransaction) {
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
      <td className="px-6 py-4">
        {(type === 'DEPOSIT' && 'Pix') ||
          (type === 'WITHDRAW' && 'Pix') ||
          (type === 'INDICATION' && 'Indicação') ||
          (type === 'WIN' && 'Aposta') ||
          (type === 'BET' && 'Aposta')}
      </td>
      <td className="px-6 py-4">
        {(type === 'DEPOSIT' && 'Depósito') ||
          (type === 'WITHDRAW' && 'Saque') ||
          (type === 'INDICATION' && 'Indicação') ||
          (type === 'WIN' && 'Vitória em jogo') ||
          (type === 'BET' && 'Perdeu em jogo')}
      </td>
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
    </tr>
  );
}
