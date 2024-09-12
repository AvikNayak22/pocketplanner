import { BadgeIndianRupee } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <BadgeIndianRupee className="stroke h-11 w-11 stroke-green-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        PocketPlanner
      </p>
    </a>
  );
};

export default Logo;
