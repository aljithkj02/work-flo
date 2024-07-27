import { useState } from "react"

type UsePasswordResponse = [boolean, () => void];

export const usePassword = (): UsePasswordResponse => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => setShowPassword(!showPassword);

    return [showPassword, handleToggle];
}