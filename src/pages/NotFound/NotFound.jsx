import css from "./NotFound.module.css";
import React from "react";
const NotFound = () => {
  return (
    <main className={css.main}>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page :( </p>
      <img
        src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/96396601_1378439585698325_179389539729539072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=ZYI42pA_xzwAX-XFIu8&_nc_ht=scontent-waw1-1.xx&oh=00_AfAgH3fkyKDllu283Cp51u74D1DJ_0iLGDpgcmMSPSzvdQ&oe=659C048B"
        alt="Upss"
        style={{ maxWidth: 500, padding: 20 }}
      />
    </main>
  );
};

export default NotFound;
