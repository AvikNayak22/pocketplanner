import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return <div>page</div>;
};

export default page;
