import Styles from "./Footer.module.css";
import { MdMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export const Footer = () => {
    const socialLinks = [
        {name: "Email", url: "mailto:wallgodds@gmail.com", icon: <MdMailOutline />},
        {name: "GitHub", url: "https://github.com/WallGodds", icon: <FaGithub />},
        {name: "LinkedIn", url: "https://www.linkedin.com/company/wallgodds", icon: <FaLinkedin />},
        {name: "Discord", url: "https://discord.gg/kTQ5KWANp8", icon: <FaDiscord />},
    ];

    return (
        <footer className={Styles.footer}>
            {/* Left */}
            <div className={Styles.left}>
                <div className={Styles.logoBox}>
                    <img src="/WallGodds_Favicon_Dark.png" alt="WallGodds Favicon" className={Styles.logoIcon} />
                </div>
                <span className={Styles.footerText}>A Community Initiative</span>
            </div>

            {/* Right */}
            <div className={Styles.socials}>
                {socialLinks.map((link, index) => (
                    <a href={link.url} title={`WallGodds's ${link.name}`} target="_blank" aria-label={link.name} className={Styles.iconBtn} key={index}>
                        {link.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
