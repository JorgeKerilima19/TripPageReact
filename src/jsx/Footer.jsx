import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="list-column">
          <h3>Contact Info</h3>
          <li>
            <strong>Contact: </strong> myFakeAccount@gmail.com
          </li>
          <li>
            <strong>Address: </strong>My conform place :D
          </li>
          <li>
            <strong>Phone: </strong>+1 23456789
          </li>
          <li>Help Center</li>
        </ul>

        <ul className="list-column">
          <h3>Follow Us</h3>
          <li className="list-item-link">
            <TiSocialFacebook />
            <span>Facebook</span>
          </li>
          <li className="list-item-link">
            <TiSocialTwitter />
            <span>Twitter</span>
          </li>
          <li className="list-item-link">
            <TiSocialInstagram />
            <span>Instagram</span>
          </li>
          <li className="list-item-link">
            <TiSocialYoutube />
            <span>Youtube</span>
          </li>
        </ul>

        <ul className="list-column">
          <h3>About</h3>
          <li>About us</li>
          <li>Privacy Policy</li>
          <li>Terms and COnditions</li>
        </ul>
      </footer>
    </>
  );
}
