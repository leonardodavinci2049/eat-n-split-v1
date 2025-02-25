import { useState } from "react";
import Button from "./Button";
import { FriendType } from "../data/friends";



interface FormAddFriendProps {
  onAddFriend: (friend: FriendType) => void;
}

const FormAddFriend = ({ onAddFriend }: FormAddFriendProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: FriendType = {
      id: Number(id),
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendName">👫 Friend name</label>
      <input
        id="friendName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="imageUrl">🌄 Image URL</label>
      <input
        id="imageUrl"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
