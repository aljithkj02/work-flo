"use client"
import { EyeIcon } from "@/assets/EyeIcon";
import { Input } from "@/components/shared/Input";
import { Loader } from "@/components/shared/Loader";
import { usePassword } from "@/lib/hooks/usePassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email('Please provide a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type TSignupSchema = z.infer<typeof signupSchema>;

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
        setValue,
    } = useForm<TSignupSchema>({
        resolver: zodResolver(signupSchema),
    });
    const [showPassword, toggler] = usePassword();

    const onSubmit = async (data: TSignupSchema) => {
        console.log({data})
    };

    return (
        <div className="w-full h-screen auth">
            <div className="bg-[#F6F6F6] w-[90%] md:w-[35%] mx-auto mt-28 px-10 py-12 rounded-xl shadow-md">
                <div>
                    <p className="text-[40px] font-[600] text-center">Welcome to
                        <span className="text-[#4534AC]"> Workflo</span>
                        <span>!</span>
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Input  
                                fullWidth  
                                size="small"  
                                placeholder="Full name"  
                                {...register('name', { value: getValues('name') || '' })}
                                error={Boolean(errors?.name?.message)}
                                helperText={errors?.name?.message}
                                onChange={(e) => setValue('name', e.target.value)}
                            /> 
                            <Input  
                                fullWidth  
                                size="small"  
                                placeholder="Your email"  
                                {...register('email', { value: getValues('email') || '' })}
                                error={Boolean(errors?.email?.message)}
                                helperText={errors?.email?.message}
                                onChange={(e) => setValue('email', e.target.value)}
                            /> 
                            <div className="relative">
                                <Input  
                                    fullWidth  
                                    size="small"  
                                    placeholder="Password"
                                    type={showPassword ? 'text': 'password'}
                                    {...register('password', { value: getValues('password') || '' })}
                                    error={Boolean(errors?.password?.message)}
                                    helperText={errors?.password?.message}
                                    onChange={(e) => setValue('password', e.target.value)}
                                />  
                                <div className="absolute right-3 top-3 cursor-pointer"
                                    onClick={toggler}
                                >
                                    <EyeIcon />
                                </div>
                            </div> 

                            <button
                                className="p-2 bg-[#776BBE] text-white rounded-[8px] text-lg"
                                type="submit"
                            >
                                Sign up
                            </button>

                            <p className="text-[#606060] text-sm text-center">Already have an account?
                                <Link href="/login" className="text-blue-600"> Log in.</Link>
                            </p>
                        </Box>
                    </form>
                </div>
            </div>

            { isSubmitting && <Loader /> }
        </div>
    );
  }
  