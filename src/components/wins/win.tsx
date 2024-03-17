import { ITransaction } from '@src/interfaces';

export function Win({ user, game, amount }: ITransaction) {
  return (
    <div className="flex items-center justify-between gap-4 bg-dark-400 shadow-sm p-[8px] min-w-[250px] rounded-[6px]">
      <div className="w-fit py-[8px] px-[12px] bg-[#2C2C3E] text-[#A9A9CA] flex justify-center rounded-[6px]">
        {user.username.charAt(0).toUpperCase()}
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] text-[#A9A9CA]">{game.name}</p>
        <h1 className="text-[14px] font-medium text-white">{user.username}</h1>
      </div>
      <div className="py-[8px] px-[12px] text-primary-100 bg-primary-100/10 text-[15px] rounded-[6px]">
        {amount.toLocaleString('pt-br', {
          currency: 'BRL',
          style: 'currency',
        })}
      </div>
    </div>
  );
}
