import { FriendType } from "../data/friends";
import Button from "./Button";

interface FriendProps {
  friend: FriendType;
  selectedFriend: FriendType | null;
  onSelection: (friend: FriendType) => void;
};



const Friend = ({ friend, selectedFriend, onSelection }: FriendProps) => {



  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
