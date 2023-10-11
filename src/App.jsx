import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Notifications from "./components/Notifications/Notifications";
import Mark from "./assets/avatar-mark-webber.webp";
import Angela from "./assets/avatar-angela-gray.webp";
import Jacob from "./assets/avatar-jacob-thompson.webp";
import Rizky from "./assets/avatar-rizky-hasanuddin.webp";
import Kim from "./assets/avatar-kimberly-smith.webp";
import Nath from "./assets/avatar-nathan-peterson.webp";
import Anna from "./assets/avatar-anna-kim.webp";
import Chess from "./assets/image-chess.webp";

function App() {
  function Notif(img, name, text, type, typeCont, time, read) {
    this.img = img;
    this.name = name;
    this.text = text;
    this.type = type; //message, img, post, group, none
    this.typeCont = typeCont;
    this.time = time;
    this.read = read;
  }

  const arr = [
    new Notif(
      Mark,
      "Mark Webber",
      "reacted to your recent post",
      "post",
      "My first tournament today!",
      "1m ago",
      false
    ),
    new Notif(
      Angela,
      "Angela Gray",
      "followed you",
      "none",
      "",
      "5m ago",
      false
    ),
    new Notif(
      Jacob,
      "Jacob Thompson",
      "has joined your group",
      "group",
      "Chess Club",
      "1 day ago",
      false
    ),
    new Notif(
      Rizky,
      "Rizky Hasanuddin",
      "sent you a private message",
      "message",
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      "5 day ago",
      true
    ),
    new Notif(
      Kim,
      "Kimberly Smith",
      "commented on your picture",
      "img",
      Chess,
      "1 week ago",
      true
    ),
    new Notif(
      Nath,
      "Nathan Peterson",
      "reacted to your recent post",
      "post",
      "5 end-game strategies to increase your win rate",
      "2 weeks ago",
      true
    ),
    new Notif(
      Anna,
      "Anna Kim",
      "left the group",
      "group",
      "Chess Club",
      "2 weeks ago",
      true
    ),
  ];

  // track read status
  const [notifData, setNotifData] = useState(arr);
  //to count unread messages
  const [count, setCount] = useState(notifData.filter((n) => !n.read).length);

  // function to mark notifications as read
  const markRead = () => {
    //  a copy of the notification data with updated read status
    const updatedData = notifData.map((notifications) => ({
      ...notifications,
      read: true,
    }));

    setCount(0); //update count state, count = 0
    setNotifData(updatedData); // update the state with the new data
  };

  return (
    <div className="main">
      <Header count={count} markRead={markRead} />
      {notifData.map((e, i) => (
        <Notifications p={e} key={i} />
      ))}
    </div>
  );
}

export default App;
