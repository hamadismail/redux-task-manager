import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/redux/types";

interface IProps {
  user: IUser;
}

const UserCard = ({ user } : IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="mt-4 max-w-6xl mx-auto border p-4 rounded-md">
        <div className="flex justify-between">
          <h2>{user.name}</h2>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() => dispatch(deleteUser(user.id))}
              className="text-red-500"
            >
              Del
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
