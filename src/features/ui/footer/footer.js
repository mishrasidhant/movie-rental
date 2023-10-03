import { LoginButton } from "../../authentication";
import { Copyright, Placeholder, SocialsButton } from "../../ui";
import "./footer.css";

export default function Footer() {
  const socialMediaLinks = [
    "Tiktok",
    "Instagram",
    "Twitter",
    "Youtube",
    "Facebook",
  ].map((social) => <SocialsButton placeholderText={social} />);

  return (
    <div className="footer-container">
      <div className="signin-container center">
        <LoginButton />
      </div>
      <div className="social-media-container center">{socialMediaLinks}</div>
      <div className="copyright-container center">
        <Copyright />
      </div>
    </div>
  );
}
