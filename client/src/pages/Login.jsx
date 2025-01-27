// mongopass - Awhv117t7B647Wxr
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function Login() {

  const navigate = useNavigate() ; 

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });

  const [registerUser, { 
    data: registerData, 
    error: registerError, 
    isLoading: registerIsLoading, 
    isSuccess: registerIsSuccess }] = useRegisterUserMutation();

  const [loginUser, { 
    data: loginData, 
    error: loginError, 
    isLoading: loginIsLoading, 
    isSuccess: loginIsSuccess }] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  }

  const handleRegistration = async(type) => {
    const inputData = type === "signup" ? signupInput : loginInput ;
    const action  = type === "signup" ? registerUser :loginUser ; 
    await action(inputData);
  }

  useEffect(()=>{
    if(registerIsSuccess && registerData){
      toast.success(registerData.message || "Signup successful")
    }
    if(registerError){
      toast.error(registerData.data.message || "Signup Failed")
    }
    if(loginIsSuccess && loginData){
      toast.success(loginData.message || "Login successful")
      navigate("/")
    }
    if(loginError){
      toast.error(loginError.data.message || "Login Failed")
    }
  },[loginIsLoading , registerIsLoading , loginData ,registerData, loginError , registerError])

  return (
    <div className="flex justify-center mt-28">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => { changeInputHandler(e, "signup") }}
                  placeholder="your name"
                  required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => { changeInputHandler(e, "signup") }}
                  placeholder="abc@gmail.com"
                  required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => { changeInputHandler(e, "signup") }}
                  placeholder="*******"
                  required />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled = {registerIsLoading} onClick={() => { handleRegistration("signup") }}>
                {
                  registerIsLoading ?(
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait ..
                    </>
                  ): "Signup"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login to your account with password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => { changeInputHandler(e, "login") }}
                  placeholder="abc@gmail.com"
                  required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => { changeInputHandler(e, "login") }}
                  placeholder="******"
                  required />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled = {loginIsLoading} onClick={() => { handleRegistration("login") }}>
                {
                  loginIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait ..
                    </>
                  ): " Login "
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
