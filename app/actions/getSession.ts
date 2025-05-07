import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/auth/auth";

const getSession = async () => {
  console.log("getSession - NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
  return await getServerSession(authOptions);
};

export default getSession;
