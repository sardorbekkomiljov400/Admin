import { useContext, useState, type SubmitEvent } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Context } from "../../context/Context";
import { AuthFormItem, ChangeAuthPage, SiteLogo } from "../../components";
import {LoadingBlackImg} from '../../assets/images'

const Login = () => {
const [loading, setLoading] = useState<boolean>(false)
const { setToken } = useContext(Context)

function handleLoginSubmit(evt: SubmitEvent<HTMLFormElement>) {
  setLoading(true)
  evt.preventDefault()

  const data = {
    email: evt.target.email.value,
    password: evt.target.password.value
  }

  axios
    .post("https://api.escuelajs.co/api/v1/auth/login", data)
    .then(res => {
      toast.success("Muvaffaqiyatli kirdingiz")
      setTimeout(() => {
        setToken(res.data.access_token)
      }, 1500)
    })
    .catch(() => toast.error("Bunday foydalanuvchi topilmadi"))
    .finally(() => setLoading(false))
}

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <Toaster position="top-center" reverseOrder={false}/>
    <div className="mx-auto flex flex-col min-h-screen max-w-6xl items-center justify-center px-4 gap-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <SiteLogo />
          <h1 className="text-2xl font-semibold tracking-tight">Xush kelibsiz</h1>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white/5 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
          <form onSubmit={handleLoginSubmit} autoComplete="off">
            <AuthFormItem label="Email" name="email" placeholder="example@gmail.com" type="email"/>
            <AuthFormItem labelClass="mt-4" label="Password" name="password" placeholder="********" type="password"/>
            <button
              className="h-10! mt-3! flex! items-center justify-center w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <img className="scale-[1.2]" src={LoadingBlackImg} alt="Loading" width={30} height={30} />
              ) : (
                "Kirish"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <ChangeAuthPage title="Hisobingizni yo'qmi?" />
      </div>
    </div>
  );
};

export default Login;