import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/auth/auth";

const getSession = async () => {
  return await getServerSession(authOptions);
};

export default getSession;
