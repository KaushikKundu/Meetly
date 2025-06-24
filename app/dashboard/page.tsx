import Sidebar from "@/components/SideBar";

export default function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div>
                <h1>Welcome to the Dashboard Example</h1>
                <p>This is a simple page demonstrating the sidebar component.</p>
            </div>
        </div>
    );
}