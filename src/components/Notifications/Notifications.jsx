import "./notifications.css";

function Notifications({ p }) {
  const notifClass = p.read ? "notif" : "notif unread";
  const ovalClass = p.read ? "" : "oval";

  return (
    <div className={notifClass}>
      <img src={p.img} alt="img" className="pfp" />
      <div className="content">
        <div className="cont">
          <div>
            <span className="name">{p.name}</span>
            <span className="text">{p.text}</span>
            {/* {if type is message and img dont show it here} */}
            {p.type === "message" || p.type === "img" ? null : (
              <span className={p.type}>{p.typeCont}</span>
            )}
            <div className={ovalClass}></div>
          </div>
          {/* show image here */}
          {p.type === "img" ? (
            <div className="ig">
              <img src={p.typeCont} alt="img" className="notif-img" />
            </div>
          ) : null}
        </div>
        <span className="time">{p.time}</span>
        {/* show message here */}
        {p.type === "message" ? (
          <span className={p.type}>{p.typeCont}</span>
        ) : null}
      </div>
    </div>
  );
}

export default Notifications;
