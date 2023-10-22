import React from "react";
import styles from "./ProfileInfo.module.css"


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://goo.su/xQAY" alt="" />
      </div>
      <div className={styles.descriptionBlock}>
         ava+ description
        </div>
    </div>
  )
};
export default ProfileInfo;
