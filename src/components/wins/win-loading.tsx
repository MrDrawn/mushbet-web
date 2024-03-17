export function WinLoading() {
  return (
    <div className="flex items-center justify-between gap-4 bg-dark-400 shadow-sm p-[8px] min-w-[250px] rounded-[6px]">
      <div className="h-[45px] w-[47px] bg-[#2C2C3E] text-[#A9A9CA] flex justify-center rounded-[6px] animate-pulse"></div>
      <div className="flex flex-col gap-2">
        <div className="h-[10px] w-[80px] bg-[#2C2C3E] animate-pulse rounded-[6px]"></div>
        <div className="h-[14px] w-[80px] bg-[#2C2C3E] animate-pulse rounded-[6px]"></div>
      </div>
      <div className="h-[35px] w-[80px] text-primary-100 bg-primary-100/10 text-[15px] rounded-[6px]"></div>
    </div>
  );
}
