import Sidebar from "@/components/SideBar";

export default function Dashboard() {
    return (
        <div className="flex h-screen w-screen">
            <Sidebar />
            <div>
                <h1>Home</h1>
                <div>
                    <h2>Upcoming</h2>
                    <div>
                        <p>There are no upcoming events.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}