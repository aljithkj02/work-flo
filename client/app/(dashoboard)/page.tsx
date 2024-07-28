"use client"
import { QuestionMark } from "@/assets/QuestionMark";
import { Advertisement } from "@/components/home/Advertisement";
import { Columns } from "@/components/home/Columns";
import { Header } from "@/components/home/Header";
import { Drawer } from "@/components/shared/Drawer";
import { useAppSelector } from "@/lib/hooks/store.hook";
import { useEffect, useState } from "react";

export default function Home() {
    const user = useAppSelector(state => state.global.user);
    const [client, setClient] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => setClient(true), []);
    

    const toggleDrawer = (value: boolean) => {
        setOpen(value);
    };

    return (
        <div >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[40px] font-semibold">Good morning, {client ? user?.name : ''}!</p>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <p className="text-[#080808] text-[15px]">Help & feedback</p>
                    <QuestionMark />
                </div>
            </div>

            <Advertisement />

            <Header />

            <Columns />


            <Drawer />
        </div>
    );
}
