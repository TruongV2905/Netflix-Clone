import React from "react";
import ServiceCard from "./ServiceCard"; // import component ServiceCard

const servicePlans = [
  {
    title: "Di động",
    features: [
      "Chất lượng video khá",
      "Dùng trên điện thoại hoặc máy tính bảng của bạn",
    ],
    resolution: "480p",
    price: "74.000đ/tháng",
  },
  {
    title: "Cơ bản",
    features: [
      "Chất lượng video tốt",
      "Xem trên TV, máy tính, điện thoại và máy tính bảng",
    ],
    resolution: "720p",
    price: "180.000đ/tháng",
  },
  {
    title: "Tiêu chuẩn",
    features: ["Chất lượng video cao", "Có thể xem trên 2 thiết bị cùng lúc"],
    resolution: "1080p",
    price: "220.000đ/tháng",
  },
  {
    title: "Cao cấp",
    features: [
      "Chất lượng video cực cao",
      "Có thể xem trên 4 thiết bị cùng lúc",
    ],
    resolution: "4K + HDR",
    price: "260.000đ/tháng",
  },
];

const ServiceCardList = ({ title }: { title?: string }) => {
  return (
    <div className="max-w-[1250px] mx-auto mb-[30px] px-4 py-10">
      <h2 className="text-3xl font-[1000] text-white mb-3">{title}</h2>
      <div className="flex gap-2 flex-wrap justify-between">
        {servicePlans.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            resolution={service.resolution}
            features={service.features}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardList;
