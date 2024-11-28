"use client";
import { useRouter } from "next/navigation";

const SidebarButton = ({ type, icon, name, routePath }) => {
  const route = useRouter();
  return (
    <div
      className={`${
        type === "Home" ? "border border-cyan-300" : ""
      } mb-3 px-3 py-2 flex items-center justify-start rounded-md cursor-pointer hover:bg-cyan-300 hover:text-black hover:shadow-md`}
      onClick={() => {
        route.push(routePath);
      }}
    >
      {icon}
      <div className="text-base font-medium">{name}</div>
    </div>
  );
};

export default SidebarButton;
