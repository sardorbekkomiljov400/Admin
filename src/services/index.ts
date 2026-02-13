import toast from "react-hot-toast"
import { instance } from "../hooks"
import { type Dispatch, type SetStateAction, type SubmitEvent } from "react"
import { PATH } from "../components"
import type { NavigateFunction } from "react-router-dom"

 
export const LoginFn = (setLoading:Dispatch<SetStateAction<boolean>> , evt:SubmitEvent<HTMLFormElement> , setToken:Dispatch<SetStateAction<string>> ) => {
  setLoading(true)
  evt.preventDefault()
  const data = {
    email: evt.target.email.value,
    password: evt.target.password.value
  }
  instance.post("/auth/login" , data).then(res => {
    toast.success("Muvaffaqiyatli kirdinggiz")
    setTimeout(() => {
      setToken(res.data.access_token)
    }, 1500)
  }).catch(() => toast.error("Bunday foydalanuvchi yoq!")).finally(() => setLoading(false))
}
export const RegisterFn = (evt:SubmitEvent<HTMLFormElement> , setLoading:Dispatch<SetStateAction<boolean>> , navigate:NavigateFunction) => {
  evt.preventDefault()
  setLoading(true)
  const data = {
    email: evt.target.email.value,
    password: evt.target.password.value,
    name: `${evt.target.firstname.value} ${evt.target.lastname.value}`,
    role: "admin",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTboMCCLwwuOOgpKUqPvuKApa1AsNZ",
  }
  instance.post("/users", data).then(res => {
    toast.success(`Muvaffaqiyatli ${res.data.name} qo'shildi`)
    setTimeout(() => {
      navigate(PATH.home)
    }, 1500)
  }).catch(() => toast.error("Xatolik bor!")).finally(() => setLoading(false))
}

 

 
