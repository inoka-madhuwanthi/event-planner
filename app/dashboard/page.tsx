import { DashboardContent } from "@/components/dashboard-content"
import { getSession } from "@/lib/auth/server"

export default async function DashboardPage() {
    const session = await getSession();

    if (!session.data?.user) {
        // redirect to login
        return null;
    }

    return <DashboardContent userId={session.data.user.id} />;
}