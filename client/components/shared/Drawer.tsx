"use client"
import { Box, Drawer as DrawerComp } from "@mui/material"
import { useState } from "react"
import { DrawerHeader } from "@/components/shared/DrawerHeader";

export const Drawer = () => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = (value: boolean) => {
        setOpen(value);
    };

    return (
        <DrawerComp
            anchor="right"
            open={open}
        >
            <Box
                sx={{ width: 600 }}
                role="presentation"
                onClick={() => toggleDrawer(false)}
            >
                <div className="p-5">
                    <DrawerHeader
                        onClose={() => toggleDrawer(false)}
                    />

                </div>
            </Box>
        </DrawerComp>
    )
}
