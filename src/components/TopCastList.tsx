import React from "react";
import CreditCard from "./CreditCard";

function TopCastList({ casts }: { casts?: any[] }) {
  return (
    <section className="max-w-[1250px] mx-auto px-4 pt-10">
      <h1 className="text-3xl font-[1000] text-white mb-3">
        Diễn viên hàng đầu
      </h1>
      <div className="flex justify-between gap-3 ">
        {casts &&
          casts
            .slice(0, 6)
            .map((member, index) => (
              <CreditCard
                key={index}
                image={member.profile_path}
                name={member.name}
                character={member.character}
              />
            ))}
      </div>
    </section>
  );
}

export default TopCastList;
