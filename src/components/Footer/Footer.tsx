import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 py-10 bg-base-background">
      <div className="flex justify-between border-b border-base-text pb-10">
        <div className="grid grid-cols-3 text-base-text">
          <ul>
            <li className="font-bold text-white">
              <a href="">Công ty</a>
            </li>
            <li>
              <a href="">Giới thiệu</a>
            </li>
            <li>
              <a href="">Việc làm</a>
            </li>
            <li>
              <a href="">For the Record</a>
            </li>
          </ul>
          <ul>
            <li className="font-bold text-white">
              <a href="">Cộng đồng</a>
            </li>
            <li>
              <a href="">Dành cho các nghệ sĩ</a>
            </li>
            <li>
              <a href="">Nhà phát triển</a>
            </li>
            <li>
              <a href="">Quảng cáo</a>
            </li>
            <li>
              <a href="">Nhà đầu tư</a>
            </li>
            <li>
              <a href="">Nhà cung cấp</a>
            </li>
          </ul>
          <ul>
            <li className="font-bold text-white">
              <a href="">Liên kết hữu ích</a>
            </li>
            <li>
              <a href="">Hỗ trợ</a>
            </li>
            <li>
              <a href="">Ứng dụng Di động Miễn phí</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a className="h-max rounded-full bg-sub-background p-[10px] text-xl text-white cursor-pointer">
            <FaInstagram />
          </a>
          <a className="h-max rounded-full bg-sub-background p-[10px] text-xl text-white cursor-pointer">
            <FaTwitter />
          </a>
          <a className="h-max rounded-full bg-sub-background p-[10px] text-xl text-white cursor-pointer">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="flex justify-between text-base-text pt-10">
        <div>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="">Pháp lý</a>
            </li>
            <li>
              <a href="">Trung tâm an toàn và quyền riêng tư</a>
            </li>
            <li>
              <a href="">Chính sách quyền riêng tư</a>
            </li>
            <li>
              <a href="">Cockie</a>
            </li>
            <li>
              <a href="">Giới thiệu quảng cáo</a>
            </li>
            <li>
              <a href="">Hỗ trợ tiếp cận</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-nowrap">© 2024 Spotify AB</p>
        </div>
      </div>
    </footer>
  );
}
