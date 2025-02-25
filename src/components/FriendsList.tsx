import { FriendType } from "../data/friends";
import Friend from "./Friend";


type FriendsListProps = {
  friends: FriendType[];
  selectedFriend: FriendType | null;
  onSelection: (friend: FriendType) => void;
};

const FriendsList = ({
  friends,
  selectedFriend,
  onSelection,
}: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend   
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
