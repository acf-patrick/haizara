import "./index.scss";
import logo from "../../../Assets/Images/logo.svg";
import twitter from "../../../Assets/Images/twitter.svg";
import facebook from "../../../Assets/Images/facebook.svg";
import linkedin from "../../../Assets/Images/linkedin.svg";
import instagram from "../../../Assets/Images/instagram.svg";
import {ReactComponent as Worldwide} from "../../../Assets/Images/worldwide.svg";

function Footer() {
  const medias: string[][] = [
    [facebook, "#"],
    [twitter, "#"],
    [instagram, "#"],
    [linkedin, "#"],
  ];

  const links: { [key: string]: string }[] = [
    {
      about: "#",
      "about us": "#",
      "learner stories": "#",
      careers: "#",
      press: "#",
      leadership: "#",
      "contact us": "#",
    },
    {
      categories: "#",
      development: "#",
      Business: "#",
      "Finance & accounting": "#",
      "IT & software": "#",
      "office productivity": "#",
      design: "#",
      marketing: "#",
    },
    {
      "": "#",
      lifestyle: "#",
      "photography & video": "#",
      "health & fitness": "#",
      music: "#",
      "UX design": "#",
      seo: "#",
    },
    {
      support: "#",
      documentation: "#",
      FAQs: "#",
      dashboard: "#",
      contact: "#",
    },
  ];

  return (
    <footer>
      <div className="content">
        <div className="heading">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>Haizara</span>
          </div>
          <div className="medias">
            <div>follow us on social media</div>
            <div className="links">
              {medias.map((link, i) => {
                return (
                  <span key={i}>
                    <a href={link[1]}>
                      <img src={link[0]} alt="link" />
                    </a>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="links">
          {links.map((link, i) => (
            <div className={link[0]} key={i}>
              {Object.entries(link).map(([label, link], i) => {
                return i ? <a href={link}>{label}</a> : <span>{label}</span>;
              })}
            </div>
          ))}
          <div>
            <span>get in touch</span>
            <p>We don't send spam so don't worry.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="email" name="email" id="email" placeholder="Email..." />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="misc">
          <div>© 2022 Educrat. All Right Reserved.</div>
          <div>
            <span><a href="#">Help</a></span>
            <span><a href="#">Privacy Policy</a></span>
            <span><a href="#">Cookie Notice</a></span>
            <span><a href="#">Security</a></span>
            <span><a href="#">Terms of Use</a></span>
            <span><a href="#" className="language"><Worldwide /> <span>English</span></a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
