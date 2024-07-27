import { Sidebar } from "@/components/shared/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-5">
        <div className="col-span-1">
            <Sidebar />
        </div>

        <div className="col-span-4">
            {children}
        </div>
    </div>
  );
}
