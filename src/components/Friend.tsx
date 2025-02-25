import { FriendType } from "../data/friends";
import Button from "./Button";

interface FriendProps {
  friend: FriendType;
  selectedFriend: FriendType | null;
  onSelection: (friend: FriendType) => void;
}

const Friend = ({ friend, selectedFriend, onSelection }: FriendProps) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li
      className={`grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-6 p-5 rounded-lg transition duration-500 ${
        isSelected ? "selected" : ""
      }`}
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full w-full row-span-2"
      />
      <h3 className="row-start-1 col-start-2">{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="row-start-2 col-start-2 text-red-500">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="row-start-2 col-start-2 text-green-500">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && (
        <p className="row-start-2 col-start-2">
          You and {friend.name} are even
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
