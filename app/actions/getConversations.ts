import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }
  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seenBy: true,
          },
        },
      },
    });

    return conversations;
  } catch (error: any) {
    console.log(error, "ERROR_CONVERSATIONS");
    return [];
  }
};

export default getConversations;
