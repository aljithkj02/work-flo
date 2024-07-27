import { Sidebar } from "@/components/shared/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-5 bg-[#F7F7F7]">
        <div className="col-span-1">
            <Sidebar />
        </div>

        <div className="col-span-4 p-4">
            {children}
        </div>
    </div>
  );
}
