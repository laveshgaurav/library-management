import React from "react";

type Props = {
  userDetails: any;
  setUserDetails: React.Dispatch<any>;
  handleLogout: () => void;
  toggleDrawer: boolean;
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
function Navbar({
  handleLogout,
  setToggleDrawer,
  toggleDrawer,
  userDetails,
}: Props) {
  return (
    <div className="flex w-full items-center justify-between border bg-white px-8 py-3 shadow-md md:flex-col md:gap-y-2">
      <div className="flex items-center gap-x-6">
        <h2 className="text-18 font-semibold">Book Library</h2>
        <label className="flex items-center gap-x-2 rounded-md bg-[#F1F3F6] p-2 px-3">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            placeholder="Search Your Book"
            className="border-none bg-inherit outline-none"
          />
        </label>
      </div>
      <div className="flex items-center gap-x-12 md:w-full md:justify-between">
        <div className="relative">
          <span>
            <i className="fa-regular fa-bell"></i>
          </span>
          <span className="absolute right-[-8px] top-[-6px] flex h-4 w-4 items-center justify-center rounded-full bg-red text-12 text-white">
            5
          </span>
        </div>

        <div className="flex items-center gap-x-2">
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="relative">
            <h1
              className="cursor-pointer text-14 font-bold"
              onClick={() => setToggleDrawer((p) => !p)}
            >
              {userDetails?.name}{" "}
              <span>
                {toggleDrawer ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </span>
            </h1>
            <p className="text-12">Admin</p>

            {toggleDrawer && (
              <div className="absolute right-0 top-[150%] rounded-md bg-white p-4 shadow-md">
                <h2>{userDetails?.email}</h2>
                <button
                  className="w-full rounded-md bg-red p-1 text-14 font-bold text-white"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
