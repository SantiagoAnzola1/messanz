"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-1 border-t-gray-100 lg:hidden">
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          label={route.label}
          href={route.href}
          icon={route.icon}
          active={route.active}
          onClick={route.onClick}
          toastMessage={route.toastMessage}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
