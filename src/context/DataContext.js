import React, { useReducer, createContext } from "react";
const initialState = {
  sidebarToggle: true,
  activePage: "Dashboard",
  messagesSearch: "",
  messageID: [],
  messages: [
    {
      id: "1",
      name: "Ali Jamaliniai",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userone.jpg",
    },
    {
      id: "2",
      name: "Hossein Ojaq",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/usertwo.jpg",
    },
    {
      id: "3",
      name: "Moein Rahvar",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userthree.jpg",
    },
    {
      id: "4",
      name: "Matin Sadeghi",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfour.jpg",
    },
    {
      id: "5",
      name: "Ashkan Yamii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfive.jpg",
    },
    {
      id: "6",
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userthree.jpg",
    },
    {
      id: "7",
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfive.jpg",
    },
    {
      id: "8",
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/usertwo.jpg",
    },
    {
      id: "9",
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfour.jpg",
    },
    {
      id: "10",
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userone.jpg",
    },
  ],
};

function reducer(state, action) {
  return { ...state, ...action };
}

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
