import React, { useReducer, createContext } from "react";
const initialState = {
  sidebarToggle: true,
  activePage: "Dashboard",
  messagesSearch: "",
  messages: [
    {
      name: "Ali Jamaliniai",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userone.jpg",
    },
    {
      name: "Hossein Ojaq",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/usertwo.jpg",
    },
    {
      name: "Moein Rahvar",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userthree.jpg",
    },
    {
      name: "Matin Sadeghi",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfour.jpg",
    },
    {
      name: "Ashkan Yamii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfive.jpg",
    },
    {
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userthree.jpg",
    },
    {
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfive.jpg",
    },
    {
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/usertwo.jpg",
    },
    {
      name: "Ali Soleimanii",
      message:
        "Long time no see - Can we help you set up email forwarding? We’ve noticed you haven’t se...",
      time: "11:15 AM",
      image: "/images/userfour.jpg",
    },
    {
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
