"use client"
import { QuestionMark } from "@/assets/QuestionMark";
import { Advertisement } from "@/components/home/Advertisement";
import { Columns } from "@/components/home/Columns";
import { Header } from "@/components/home/Header";
import { Drawer } from "@/components/shared/Drawer";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (value: boolean) => {
        setOpen(value);
    };

    return (
        <div >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[40px] font-semibold">Good morning, Joe!</p>
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
