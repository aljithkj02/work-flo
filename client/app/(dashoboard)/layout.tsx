import { Provider } from "@/components/shared/Provider";
import { Sidebar } from "@/components/shared/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <div className="flex w-[100%] bg-[#F7F7F7]">
          <div className="w-[20%]">
              <Sidebar />
          </div>

          <div className="w-[80%] p-4">
              {children}
          </div>
      </div>
    </Provider>
  );
}
