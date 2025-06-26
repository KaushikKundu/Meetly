"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center h-screen border-2 border-red-500">
            <div className="flex flex-col gap-2 p-4  border-2 border-black rounded-lg">

                <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={() => {
                    axios.post("/api/v1/signin", {username, password});
                    router.push("/home");
                }}>SignIn</button>
            </div>
        </div>
    )
}