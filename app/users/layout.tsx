import Sidebar from "@/app/components/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <Sidebar>
      <UserList users={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
