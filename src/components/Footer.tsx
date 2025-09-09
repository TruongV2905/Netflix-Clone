import { FaEarthAmericas } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="w-full h-fit">
      <div className="bg-transparent max-w-[1250px] mx-auto text-gray-400 px-6 py-10">
        <p className="mb-6 text-sm">
          Bạn có câu hỏi?{" "}
          <a href="#" className="underline hover:text-white">
            Liên hệ với chúng tôi.
          </a>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 text-sm">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Câu hỏi thường gặp
            </a>
            <a href="#" className="hover:underline">
              Quan hệ với nhà đầu tư
            </a>
            <a href="#" className="hover:underline">
              Quyền riêng tư
            </a>
            <a href="#" className="hover:underline">
              Kiểm tra tốc độ
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Trung tâm trợ giúp
            </a>
            <a href="#" className="hover:underline">
              Việc làm
            </a>
            <a href="#" className="hover:underline">
              Tùy chọn cookie
            </a>
            <a href="#" className="hover:underline">
              Thông báo pháp lý
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Tài khoản
            </a>
            <a href="#" className="hover:underline">
              Các cách xem
            </a>
            <a href="#" className="hover:underline">
              Thông tin doanh nghiệp
            </a>
            <a href="#" className="hover:underline">
              Chỉ có trên Netflix
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Trung tâm đa phương tiện
            </a>
            <a href="#" className="hover:underline">
              Điều khoản sử dụng
            </a>
            <a href="#" className="hover:underline">
              Liên hệ với chúng tôi
            </a>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-black border border-gray-400 px-4 py-2 text-sm hover:border-white flex items-center space-x-2">
            <span>
              <FaEarthAmericas />
            </span>
            <span>Tiếng Việt</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
