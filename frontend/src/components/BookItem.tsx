import React from "react";
import { T_Book } from "../types/Type";

type Props = {
  book: T_Book;
  userDetails: any;
  idClicked: string;
  handleReturn: () => void;
  handleBurrowBook: () => void;
};
function BookItem({
  book,
  userDetails,
  idClicked,
  handleReturn,
  handleBurrowBook,
}: Props) {
  return (
    <div className="flex w-[240px] min-w-[240px] flex-col justify-between rounded-md bg-white p-4 shadow-md">
      <img src={book.imageUrl} className="mb-1 aspect-[9/10] w-full" />
      <h1 className="text-red text-18 mb-1 font-semibold">{book.title}</h1>
      <h2 className="text-14 mb-1 text-gray-500">
        <i className="fa-solid fa-pen-nib mr-1"></i>
        {book.author}
      </h2>
      {userDetails?.borrowedBooks
        ?.map((i: any) => i?._id)
        ?.includes(book._id) ? (
        <button
          className="bg-blue text-14 w-full rounded-md p-2 text-white"
          onClick={handleReturn}
          disabled={!!idClicked}
        >
          Return{" "}
          {idClicked === book?._id && (
            <i className="fa-solid fa-circle-notch fa-spin ml-1"></i>
          )}
        </button>
      ) : (
        <button
          className={`text-14 w-full rounded-md border p-2 ${book.available ? "bg-red text-white" : "text-red border-red cursor-not-allowed bg-white"}`}
          disabled={!book.available || !!idClicked}
          onClick={handleBurrowBook}
        >
          {book.available ? "Burrow" : "Not Available"}
          {idClicked === book?._id && (
            <i className="fa-solid fa-circle-notch fa-spin ml-1"></i>
          )}
        </button>
      )}
      {/* <button className="bg-red text-14 w-full rounded-md p-2 text-white">
                Burrow
              </button> */}
    </div>
  );
}

export default BookItem;
