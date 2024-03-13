export function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto lg:max-w-6xl">{children}</div>;
}
