import FomrRegister from "@/components/FormRegister/FormRegister";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-base-background py-5">
      {/* Header */}
      <header className="p-8">
        <img
          width={104}
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        />
      </header>
      <div>
        <div className="w-[388px] mx-auto px-8">
          {/* Title */}
          <h1 className="text-5xl text-white font-bold leading-normal mb-10">
            Đăng kí để bắt đầu nghe
          </h1>
          {/* Form Regiseter */}
          <FomrRegister />
          <div className="my-8 relative">
            <hr />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-base-background text-white font-bold">
              hoặc
            </span>
          </div>
          {/* Register with Google */}
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <img
                width={25}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              />
            </div>
            <button className="w-full h-12 rounded-full text-white font-bold border border-[#878787]">
              Đăng kí bằng Google
            </button>
          </div>
          <div className="my-8 relative">
            <hr />
          </div>
          {/* Navigate to Lgoin */}
          <div className="my-8 text-icon-color text-center">
            <span>Bạn đã có tài khoản?</span>
            <Link href={"/login"} className="underline text-white">
              Đăng nhập tại đây
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-xs text-icon-color text-center">
        <p>This site is protected by reCAPTCHA and the Google</p>
        <p>
          <a className="underline">Privacy Policy</a> and
          <a className="underline">Terms of Service</a> apply.
        </p>
      </footer>
    </div>
  );
}
