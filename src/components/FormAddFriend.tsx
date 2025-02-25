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
    <form
      className="text-[1.2rem] grid grid-cols-[1fr_1.5fr] items-center gap-5 bg-lightest rounded-lg mb-6 p-5"
      onSubmit={handleSubmit}
    >
      <label htmlFor="friendName" className="font-semibold">
        👫 Friend name
      </label>
      <input
        id="friendName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="font-sans text-inherit text-[1.5rem] p-3 text-center border border-gray-200 rounded transition-all duration-300 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="imageUrl" className="font-semibold">
        🌄 Image URL
      </label>
      <input
        id="imageUrl"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="font-sans text-inherit text-[1.5rem] p-3 text-center border border-gray-200 rounded transition-all duration-300 focus:outline-none focus:border-gray-600"
      />
      <Button styleAdd="justify-end ml-auto">Add</Button>
    </form>
  );
};

export default FormAddFriend;
