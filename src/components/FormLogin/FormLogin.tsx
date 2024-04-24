"use client";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { IsLogin } from "@/types/auth.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { Login, requestNextServerAuth } from "@/services/Auth";

export default function FormLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsLogin>();

  const onSubmit: SubmitHandler<IsLogin> = async (data) => {
    try {
      const res = await Login(data);
      localStorage.setItem("user", JSON.stringify(res.payload));
      toast({
        title: "Đăng nhập thành công",
        description: "Bạn sẽ được chuyển đến trnag chủ",
      });
      await requestNextServerAuth(res.payload.token);
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Đăng nhập không thành công",
        description: error.payload.message,
      });
    }
  };
  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="font-bold">Địa chỉ email</label>
        <input
          type="email"
          {...register("email", { required: "Vui lòng điền tên người dùng" })}
          name="email"
          placeholder="Địa chỉ email"
          className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
        />
        {errors.email && (
          <span className="text-red-400 text-xs">{errors.email?.message}</span>
        )}
      </div>
      <div className="mt-3">
        <label className="font-bold">Mật khẩu</label>
        <input
          type="password"
          {...register("password", {
            required: "Vui lòng điền tên người dùng",
            minLength: { value: 6, message: "Mật khẩu phải có 6 kí tự" },
          })}
          name="password"
          placeholder="Mật khẩu"
          className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
        />
        {errors.email && (
          <span className="text-red-400 text-xs">{errors.email?.message}</span>
        )}
      </div>
      <button className="w-full h-12 rounded-full bg-[#1ed760] text-black mt-5 font-bold">
        Đăng nhập
      </button>
    </form>
  );
}
