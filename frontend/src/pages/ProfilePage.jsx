import { useState } from "react";
import Footer from "../component/Layout/Footer";
import Header from "../component/layout/Header";
import ProfileContent from "../component/profile/ProfileContent";
import ProfileSidebar from "../component/profile/ProfileSidebar";
import styles from "../styles/Styles";

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[300px] 800px:w-[335px] sticky 800px:mt-0 mt-[15%]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
