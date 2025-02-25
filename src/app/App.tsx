import { useState } from "react";
import { initialFriends, FriendType } from "../data/friends";

import Button from "../components/Button";
import FormSplitBill from "../components/FormSplitBill";
import FriendsList from "../components/FriendsList";
import FormAddFriend from "../components/FormAddFriend";

function App() {
  const [friends, setFriends] = useState<FriendType[]>([...initialFriends]);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (newFriend: FriendType) => {
    setFriends([...friends, newFriend]);
    setShowAddFriend(false);
    // add a new friend to the friends array
  };

  const handleSelection = (friend: FriendType) => {
    // setSelectedFriend(friend);
    setSelectedFriend((curFriend) => (curFriend?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    setFriends((friends) =>
      friends.map((friend) =>
        selectedFriend && friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
        <br />
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
