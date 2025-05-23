import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
  users: User[];
}
const UserList = ({ users }: UserListProps) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full lef-0">
      <div className="px-5 ">
        <div className="flex flex-col">
          {" "}
          <h3 className="text-2xl font-bold text-neutral-800 py-4">People</h3>
          {users.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default UserList;
