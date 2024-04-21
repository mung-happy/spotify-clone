export default function LoginPage() {
  return (
    <div>
      {/* header */}
      <header className="p-8 bg-base-background">
        <img
          width={104}
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        />
      </header>

      {/* content */}
      <div className="bg-gradient-to-b from-[#353535] to-black py-5">
        <div className="w-[734px] mx-auto bg-base-background rounded-lg py-5">
          {/* Title */}
          <h1 className="text-5xl text-white font-bold leading-normal my-12 text-center">
            Đăng nhập vào Spotify
          </h1>
          <div className="w-[388px] mx-auto">
            {/* Login with Google */}
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <img
                  width={25}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                />
              </div>
              <button className="w-full h-12 rounded-full text-white font-bold border border-[#878787]">
                Đăng nhập bằng Google
              </button>
            </div>

            <div className="my-8 relative">
              <hr />
            </div>
            {/* Form Login */}
            <form className="text-white">
              <div>
                <label className="font-bold">Địa chỉ email</label>
                <input
                  type="text"
                  placeholder="Địa chỉ email"
                  className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
                />
              </div>
              <div className="mt-3">
                <label className="font-bold">Mật khẩu</label>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="mt-2 w-full h-12 outline-none border border-[#878787] rounded-md bg-transparent py-3 px-4"
                />
              </div>
              <button className="w-full h-12 rounded-full bg-[#1ed760] text-black mt-5 font-bold">
                Đăng nhập
              </button>
            </form>
            {/* Forgot password */}
            <div className="text-white mt-6 text-center">
              <a className="underline">Quên mật khẩu của bạn?</a>
            </div>
            <div className="my-8 relative">
              <hr />
            </div>
            {/* Navigate to registration */}
            <div className="my-8 text-icon-color text-center">
              <span>
                Chưa có tài khoản?{" "}
                <a className="underline text-white">Đăng kí Spotify</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-xs text-icon-color text-center bg-sub-background py-8">
        <p>
          Trang web này được bảo vệ bằng reCAPTCHA và tuân theo
          <a className="underline">Chính sách quyền riêng tư</a> cũng như
          <a className="underline">Điều khoản dịch vụ</a> của Google.
        </p>
      </footer>
    </div>
  );
}
