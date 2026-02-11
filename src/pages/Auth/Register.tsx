import { useState, type SubmitEvent } from "react";
import { AuthFormItem, Button, ChangeAuthPage, PATH, SiteLogo } from "../../components";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoadingImg } from "../../assets/images";

const Register = () => {
const navigate = useNavigate()
const [loading, setLoading] = useState<boolean>(false)

function handleRegisterSubmit(evt: SubmitEvent<HTMLFormElement>) {
  setLoading(true)
  evt.preventDefault()

  const data = {
    email: evt.target.email.value,
    password: evt.target.password.value,
    name: `${evt.target.firstname.value} ${evt.target.lastname.value}`,
    role: "admin",
    avatar:
      "https://editorial.uefa.com/resources/027b-16a6e8afa2a8-7441ca4b9ac5-1000/cristiano_ronaldo_of_portugal_celebrates_after_scoring_a.jpeg",
  }

  axios
    .post("https://api.escuelajs.co/api/v1/users/", data)
    .then(res => {
      toast.success(`Muvaffaqiyatli ${res.data.name} qo'shildi`)
      setTimeout(() => {
        navigate(PATH.home)
      }, 1500)
    })
    .catch(() => toast.error("Xatolik bor!"))
    .finally(() => setLoading(false))
}

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto flex flex-col min-h-screen max-w-6xl items-center justify-center px-4">
        {/* Header */}
        <div className="mb-6 text-center">
          <SiteLogo />
          <h1 className="text-2xl font-semibold tracking-tight">Ro'yxatdan o'tish</h1>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/5 p-6 shadow-xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
          <form onSubmit={handleRegisterSubmit} autoComplete="off">
            <AuthFormItem label="Ism" name="firstname" placeholder="Ism kiriting" type="text" />
            <AuthFormItem labelClass="mt-4" label="Familiya" name="lastname" placeholder="Familiya kiriting" type="text" />
            <AuthFormItem labelClass="mt-4" label="Email" name="email" placeholder="example@gmail.com" type="email" />
            <AuthFormItem labelClass="mt-4" label="Parol" name="password" placeholder="********" type="password" />
            <Button
              extraClass="!h-[44px] mt-4 !flex items-center justify-center w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
              type="submit" disabled={loading}>
                {loading ? (
                <img className="scale-[1.2]" src={LoadingImg} alt="Loading" width={30} height={30} />
              ) : (
                "Hisob yaratish"
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <ChangeAuthPage title="Tizimga" />
      </div>
    </div>
  );
};

export default Register;