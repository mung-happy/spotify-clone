"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { FormRegister } from "@/types/auth.type";
import { Register, requestNextServerAuth } from "@/services/Auth";
export default function FomrRegister() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>();

  const onSubmit: SubmitHandler<FormRegister> = async (data) => {
    try {
      const res = await Register(data);
      localStorage.setItem("user", JSON.stringify(res.payload));
      toast({
        title: "Đăng kí tài khoản thành công",
        description: "Bạn sẽ được đăng nhập ngay bây giờ.",
      });
      await requestNextServerAuth(res.payload.token);
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Đăng kí tài khoản không thành công",
        description: error.payload.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-white">
      <div className="h-[105px]">
        <label className="font-bold">Tên người dùng</label>
        <input
          type="text"
          {...register("name", { required: "Vui lòng điền tên người dùng" })}
          name="name"
          placeholder="Tên người dùng"
          className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
        />
        {errors.name && (
          <span className="text-red-400 text-xs">{errors.name?.message}</span>
        )}
      </div>
      <div className="h-[105px]">
        <label className="font-bold">Địa chỉ email</label>
        <input
          type="email"
          {...register("email", {
            required: "Vui lòng điền Email",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Email không đúng định dạng",
            },
          })}
          name="email"
          placeholder="name@domain.com"
          className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
        />
        {errors.email && (
          <span className="text-red-400 text-xs">{errors.email?.message}</span>
        )}
      </div>
      <div className="h-[105px]">
        <label className="font-bold">Mật khẩu</label>
        <input
          type="password"
          {...register("password", {
            required: "Vui lòng điền mật khẩu",
            minLength: { value: 6, message: "Mật khẩu phải có 6 kí tự" },
          })}
          placeholder="Mật khẩu"
          className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
        />
        {errors.password && (
          <span className="text-red-400 text-xs">
            {errors.password?.message}
          </span>
        )}
      </div>
      <button className="w-full h-12 rounded-full bg-[#1ed760] text-black font-bold mt-5">
        Đăng kí
      </button>
    </form>
  );
}
