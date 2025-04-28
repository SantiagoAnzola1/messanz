import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Ruta a configuración NextAuth
import { pusherServer } from "@/app/libs/pusher";

export async function POST(request: Request) {
  const formData = await request.formData();
  const socketId = formData.get("socket_id") as string;
  const channelName = formData.get("channel_name") as string;

  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "No authorized" }), {
      status: 401,
    });
  }

  const data = {
    user_id: session.user.email,
  };

  const authResponse = pusherServer.authorizeChannel(
    socketId,
    channelName,
    data
  );

  return Response.json(authResponse);
}
