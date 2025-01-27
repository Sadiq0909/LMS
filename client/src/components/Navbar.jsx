import React, { useEffect } from 'react'
import { School, Menu } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import DarkMode from '@/DarkMode';
import { useLogoutUserMutation } from '@/features/api/authApi'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'



const Navbar = () => {
    const { user } = useSelector(store => store.auth)
    const navigate = useNavigate();
    const logoutHandler = async () => {
        await logoutUser();
    }

    const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message || "User LoggedOut Successfully")
            navigate("/login")
        }
    }, [isSuccess])

    return (
        <div className='h-20 dark:bg-[#0A0A0A] bg-white border-b-2 dark:border-b-gray-900 border-b-gray-300 left-0 top-0 fixed right-0 duration-300 z-10 '>
            <div className="sm:flex justify-between items-center h-full hidden max-w-7xl mx-auto  px-5">
                <div className="flex gap-2 h-full items-center">
                    <School size={"45"} />
                    <h1 className='hidden sm:block font-extrabold text-3xl'>E-Learning</h1>
                </div>
                <div className='flex  items-center gap-8'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Link to={"my-learning"}>My Learning</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to={"profile"}>Edit-Profile</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={logoutHandler}>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    {
                                        user.role === "instructor" && (
                                            <>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    Dashboard
                                                </DropdownMenuItem>
                                            </>
                                        )
                                    }

                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='items-center flex gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button >Signup</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>
            </div>
            <div className='flex sm:hidden justify-between items-center px-5 h-full'>
                <div className='flex justify-center items-center h-full gap-2'>
                    <School size={"30"} />
                    <h1 className='font-bold text-2xl'>E-Learning</h1>
                </div>
                <MobileNavbar />
            </div>
        </div>
    )
}

export default Navbar

const MobileNavbar = () => {

    const role = "instructor"
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" className="rounded-full bg-zinc-900  text-white hover hover:bg-gray-200" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-10">
                    <SheetTitle className="font-extrabold">E-Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <nav className='flex flex-col  space-y-4'>
                    <span>My-Learning</span>
                    <span>Edit-Profile</span>
                    <span>Log-out</span>
                </nav>
                {
                    role === "instructor" ? (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    ) : ""
                }

            </SheetContent>
        </Sheet>
    )
}