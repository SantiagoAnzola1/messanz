import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      console.log("No session Found - getCurrentuser");

      return null;
    }
    console.log("Session ->", session);
    const currentUser = await prisma?.user.findUnique({
      where: { email: session.user.email as string },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error: any) {
    console.log(error, "ERROR_CURRENT_USER");
    return null;
  }
};

export default getCurrentUser;
