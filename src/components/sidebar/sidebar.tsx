import { SidebarItem, routes } from '.';

export function Sidebar({ isActiveOffer }: { isActiveOffer: boolean }) {
  return (
    <div
      className={`lg:fixed w-[250px] z-10 ${
        isActiveOffer ? 'top-[149px] lg:top-[154px]' : 'top-[149px] lg:top-[105px]'
      } bg-[#212134] bottom-0 overflow-y-auto select-none`}
    >
      <div className="hidden lg:flex h-full flex-col gap-3 p-[9px]">
        {routes.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
