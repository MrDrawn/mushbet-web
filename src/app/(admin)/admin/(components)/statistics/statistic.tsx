export function Statistic({
  icon,
  name,
  value,
  color,
  gain,
}: {
  icon: React.ReactNode;
  name: string;
  value: number;
  color: string;
  gain?: boolean;
}) {
  return (
    <div className="flex justify-center items-center bg-dark-100 border-dark-200 shadow-sm gap-[20px] py-10 rounded-lg">
      <div className={`${color} p-3 rounded-full mb-2`}>{icon}</div>
      <div>
        <h1 className="text-slate-500 font-medium">{name}</h1>
        <h2 className="text-[30px] text-white font-semibold">
          {gain
            ? value == -1
              ? '...'
              : value.toLocaleString('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                })
            : value == -1
            ? '...'
            : value}
        </h2>
      </div>
    </div>
  );
}
