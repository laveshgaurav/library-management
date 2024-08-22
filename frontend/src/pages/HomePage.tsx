/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { T_Book } from "../types/Type";
import {
  getBookList,
  getBurrowedBooks,
  getUserDetails,
  postBurrowBook,
  postReturnBook,
} from "../services/http.service";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BookItem from "../components/BookItem";

// Props
type Props = {
  userDetails: any;
  setUserDetails: React.Dispatch<any>;
  handleLogout: () => void;
  toggleDrawer: boolean;
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

// Main Function
function HomePage({
  handleLogout,
  userDetails,
  setToggleDrawer,
  toggleDrawer,
  setUserDetails,
}: Props) {
  console.log(userDetails);
  // States
  const [bookList, setBookList] = useState<T_Book[]>([]);
  const [burrowedBook, setBurrowedBook] = useState<T_Book[]>();
  const [idClicked, setIdClicked] = useState<string>("");

  // Functions
  // Fetch book list
  const fetchBooks = async () => {
    try {
      const data = await getBookList();
      setBookList(data.data);
    } catch (e: any) {}
  };

  // Handle fetching user details
  const fetchUserDetails = async () => {
    try {
      const resp = await getUserDetails();
      setUserDetails(resp?.data?.user);
      localStorage.setItem("userDetails", JSON.stringify(resp?.data?.user));
    } catch (e) {}
  };

  // Handle fetch burrowed books
  const fetchBurrowedBooks = async () => {
    try {
      const data = await getBurrowedBooks();
      setBurrowedBook(data.data);
    } catch (e: any) {}
  };

  // Handle book burrow function
  const handleBurrowBook = async (id: string) => {
    try {
      setIdClicked(id);
      await postBurrowBook(id);
      await fetchBooks();
      await fetchBurrowedBooks();
      await fetchUserDetails();
    } catch (e: any) {
      if (e.response?.status === 400) {
        alert(e?.response?.data?.error);
      }
    } finally {
      setIdClicked("");
    }
  };

  // Handle book return function
  const handleReturn = async (id: string) => {
    try {
      setIdClicked(id);
      await postReturnBook(id);
      await fetchBooks();
      await fetchBurrowedBooks();
      await fetchUserDetails();
    } catch (e: any) {
      if (e.response?.status === 400) {
        alert(e?.response?.data?.error);
      }
    } finally {
      setIdClicked("");
    }
  };

  // UseEffect
  useEffect(() => {
    fetchBooks();
    fetchBurrowedBooks();
    fetchUserDetails();
  }, []);

  return (
    <div className="w-screen bg-[#F1F3F6]">
      {/* Navigation Component */}
      <Navbar
        handleLogout={handleLogout}
        setToggleDrawer={setToggleDrawer}
        setUserDetails={setUserDetails}
        toggleDrawer={toggleDrawer}
        userDetails={userDetails}
      />

      {/* UI Banner */}
      <Banner username={userDetails?.name} />

      {/* Book List */}
      <div className="p-8">
        <h1 className="text-36 mb-4 font-bold text-black">Book List</h1>
        <div className="flex w-full gap-x-8 overflow-x-auto">
          {bookList?.map((book) => (
            <BookItem
              book={book}
              handleBurrowBook={() => handleBurrowBook(book?._id)}
              handleReturn={() => handleReturn(book?._id)}
              idClicked={idClicked}
              userDetails={userDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
