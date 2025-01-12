import { Sidebar } from '@/ui/dashboard/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    // <div className="min-h-screen flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-full md:px-20">
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-slate-200">{children}</div>
    </div>
  );
}