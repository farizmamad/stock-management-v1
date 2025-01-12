import { DashboardHome } from '@/ui/dashboard/DashboardHome';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="min-h-screen grow md:flex-row">
        <DashboardHome />
      </div>
    </main>
  );
}
