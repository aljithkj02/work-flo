"use client"
import { Box, Drawer as DrawerComp } from "@mui/material"
import { useState } from "react"
import { DrawerHeader } from "@/components/shared/DrawerHeader";
import { DrawerBody } from "./DrawerBody";

export const Drawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (value: boolean) => {
        setOpen(value);
    };

    return (
        <DrawerComp
            anchor="right"
            open={open}
        >
            <Box
                sx={{ width: 650 }}
                role="presentation"
            >
                <div className="p-5">
                    <DrawerHeader
                        onClose={() => toggleDrawer(true)}
                    />

                    <DrawerBody />
                </div>
            </Box>
        </DrawerComp>
    )
}
