import { useState } from "react";
import Button from "./Button";
import { FriendType } from "../data/friends";

interface FormSplitBillProps {
  selectedFriend: FriendType;
  onSplitBill: (amount: number) => void;
}

const FormSplitBill: React.FC<FormSplitBillProps> = ({
  selectedFriend,
  onSplitBill,
}) => {
  const [bill, setBill] = useState<number | "">("");
  const [paidByUser, setPaidByUser] = useState<number | "">("");
  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : 0;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form
      className="grid grid-cols-[1fr_12rem] px-16 py-12 bg-lightest"
      onSubmit={handleSubmit}
    >
      <h2 className="col-span-full text-[2.2rem] uppercase tracking-tight mb-6 font-bold">
        Split a bill with {selectedFriend.name}
      </h2>
      <label htmlFor="bill" className="text-2xl font-semibold">
        💰 Bill value
      </label>
      <input
        id="bill"
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="font-sans text-inherit text-[1.5rem] p-3 text-center border border-gray-200 rounded transition-all duration-300 focus:outline-none focus:border-gray-600"
      />
      <label htmlFor="" className="text-2xl font-semibold">
        🧍‍♀️ Your expense
      </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill)
              ? paidByUser
              : Number(e.target.value)
          )
        }
        className="font-sans text-inherit text-[1.5rem] p-3 text-center border border-gray-200 rounded transition-all duration-300 focus:outline-none focus:border-gray-600"
      />
      <label className="text-2xl font-semibold">👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        disabled
        value={paidByFriend}
        className="font-sans text-inherit text-[1.5rem] p-3 text-center border border-gray-200 rounded transition-all duration-300 focus:outline-none focus:border-gray-600"
      />
      <label className="text-2xl font-semibold">🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        className="font-sans text-inherit text-[1.5rem] p-3 mb-4  text-center border border-gray-200 rounded transition-all duration-300 focus:outline-none focus:border-gray-600"
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button styleAdd="">Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
