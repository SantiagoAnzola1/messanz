import Sidebar from "@/app/components/sidebar/Sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";
import getConversations from "@/app/actions/getConversations";
import getUsers from "../actions/getUsers";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();

  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
