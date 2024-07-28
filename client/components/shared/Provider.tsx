"use client"
import { useAppSelector } from "@/lib/hooks/store.hook"
import { ReactNode } from "react";
import { Loader } from "@/components/shared/Loader";

interface ProviderProps {
    children: ReactNode
}

export const Provider = ({ children }: ProviderProps) => {
    const isLoading = useAppSelector(state => state.global.isLoading);

    return (
        <>
            { children }
            { isLoading && <Loader /> }
        </>
    )
}