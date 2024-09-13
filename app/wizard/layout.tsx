import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default layout;
