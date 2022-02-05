import styles from "styles/navbar/social.module.scss";
import SocialIcon from "./SocialIcon";
import contactInfo from "./ContactInfo";

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      {contactInfo.map((socialMedia) => (
        <SocialIcon
          key={socialMedia.link}
          link={socialMedia.link}
          Icon={socialMedia.Icon}
        />
      ))}
    </div>
  );
}

export default SocialMedia;