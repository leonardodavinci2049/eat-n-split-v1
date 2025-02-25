import  { useState } from "react";
import Button from "./Button";
import { FriendType } from "../data/friends";


interface FormSplitBillProps {
  selectedFriend: FriendType;
  onSplitBill: (amount: number) => void;
}

const FormSplitBill: React.FC<FormSplitBillProps> = ({ selectedFriend, onSplitBill }) => {
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
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        id="bill"
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill) ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
