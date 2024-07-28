"use client"
import { Box, Drawer as DrawerComp } from "@mui/material"
import { useState } from "react"
import { DrawerHeader } from "@/components/shared/DrawerHeader";
import { DrawerBody } from "./DrawerBody";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hook";
import { clearTaskData, setIsDrawer } from "@/lib/appStore/slices/global.slice";

export const Drawer = () => {
    const open = useAppSelector(state => state.global.isDrawerOpen);
    const dispatch = useAppDispatch();

    const closeDrawer = () => {
        dispatch(setIsDrawer(false));
        dispatch(clearTaskData());
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
                        onClose={closeDrawer}
                    />

                    <DrawerBody />
                </div>
            </Box>
        </DrawerComp>
    )
}
