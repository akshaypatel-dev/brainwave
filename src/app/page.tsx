import styles from "./page.module.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import EastIcon from "@mui/icons-material/East";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InsightsIcon from "@mui/icons-material/Insights";
import InstagramIcon from "@mui/icons-material/Instagram";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
	FormControlLabel,
	FormGroup,
	Switch,
	alpha,
	styled,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<h2 className={styles.headerText}> Brainwave.io</h2>
					<nav className={styles.navigation}>
						<ul>
							<li>
								{" "}
								<a href="">Demos</a>
							</li>
							<li>
								{" "}
								<a href="">Pages</a>
							</li>
							<li>
								{" "}
								<a href="">Support</a>
							</li>
							<li>
								{" "}
								<a href="">Contact</a>
							</li>
							<li>
								{" "}
								<a href="">|</a>
							</li>
							<li>
								{" "}
								<a href="">Sign in</a>
							</li>
							<li>
								{" "}
								<a href="">
									<button className={styles.signupbtn}> Sign up</button>
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<section className={styles.headerSection}>
						<h1 className={styles.mainHeaderText}> Pricing & Plans </h1>
						<p className={styles.para}>
							{" "}
							With lots of unique blocks, you can easily build a page without
							coding. Build your next consultancy website within few minutes.
						</p>
					</section>
					<section>
						<div className={styles.toggleSection}>
							<span className={styles.monthlyLabel}>Monthly</span>
							<FormGroup>
								<FormControlLabel
									control={<Switch defaultChecked={false} />}
									label="Yearly"
								/>
							</FormGroup>
							<span className={styles.save}>SAVE 25% </span>
						</div>
						<div className={styles.priceSection}>
							<div>
								<p className={styles.save}>STARTER</p>
								<span>
									{" "}
									<span>$</span>
									<span className={styles.largeFont}>19</span>
									<span>/month</span>
								</span>
								<p className={styles.para}>billed monthly </p>
								<ul className={styles.list}>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> HTML+ Template support</span>
									</li>
									<li className={styles.alignList}>
										<ClearIcon />
										<span className={styles.para}>6 Month Premium support</span>
									</li>
									<li className={styles.alignList}>
										<ClearIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignTrial}>
										<span className={styles.save}> Start Free Trial</span>
										<EastIcon />
									</li>
									<li>
										<p className={styles.para}> No credit card Required</p>
									</li>
								</ul>
							</div>
							<div>
								<p className={styles.save}>STANDARD</p>
								<span>
									{" "}
									<span>$</span>
									<span className={styles.largeFont}>19</span>
									<span>/month</span>
								</span>
								<p className={styles.para}>billed monthly </p>
								<ul className={styles.list}>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> HTML+ Template support</span>
									</li>
									<li className={styles.alignList}>
										<ClearIcon />
										<span className={styles.para}>6 Month Premium support</span>
									</li>
									<li className={styles.alignList}>
										<ClearIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignTrial}>
										<span className={styles.save}> Start Free Trial</span>
										<EastIcon />
									</li>
									<li>
										<p className={styles.para}> No credit card Required</p>
									</li>
								</ul>
							</div>
							<div>
								<p className={styles.save}>PREMIUM</p>
								<span>
									{" "}
									<span>$</span>
									<span className={styles.largeFont}>19</span>
									<span>/month</span>
								</span>
								<p className={styles.para}>billed monthly </p>
								<ul className={styles.list}>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignList}>
										<CheckIcon />
										<span className={styles.para}> HTML+ Template support</span>
									</li>
									<li className={styles.alignList}>
										<ClearIcon />
										<span className={styles.para}>6 Month Premium support</span>
									</li>
									<li className={styles.alignList}>
										<ClearIcon />
										<span className={styles.para}> Commercial Life</span>
									</li>
									<li className={styles.alignTrial}>
										<span className={styles.save}> Start Free Trial</span>
										<EastIcon />
									</li>
									<li>
										<p className={styles.para}> No credit card Required</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className={styles.headerSection}>
						<h1 className={styles.mainHeaderText}> Check our features</h1>
						<p className={styles.para}>
							{" "}
							With lots of unique blocks, you can easily build a page without
							coding. Build your next consultancy website within few minutes.
						</p>
					</section>
					<section className={styles.feature}>
						<div>
							<div className={styles.featureSection}>
								<TuneIcon fontSize="large" /> <h3>Quick setup process</h3>
							</div>

							<p className={styles.para}>
								{" "}
								With lots of unique blocks, you can easily build a page without
								coding. Build your next consultancy website within few minutes.
							</p>
						</div>
						<div>
							<div className={styles.featureSection}>
								<TuneIcon fontSize="large" /> <h3>Create Custom Orders</h3>
							</div>

							<p className={styles.para}>
								{" "}
								With lots of unique blocks, you can easily build a page without
								coding. Build your next consultancy website within few minutes.
							</p>
						</div>
						<div>
							<div className={styles.featureSection}>
								<LoyaltyIcon fontSize="large" /> <h3>Multiple coupons</h3>
							</div>

							<p className={styles.para}>
								{" "}
								With lots of unique blocks, you can easily build a page without
								coding. Build your next consultancy website within few minutes.
							</p>
						</div>
						<div>
							<div className={styles.featureSection}>
								<ShoppingCartIcon fontSize="large" />{" "}
								<h3>Organize your campaigns</h3>
							</div>

							<p className={styles.para}>
								{" "}
								With lots of unique blocks, you can easily build a page without
								coding. Build your next consultancy website within few minutes.
							</p>
						</div>
						<div>
							<div className={styles.featureSection}>
								<ManageAccountsIcon fontSize="large" />{" "}
								<h3>Manage customers</h3>
							</div>

							<p className={styles.para}>
								{" "}
								With lots of unique blocks, you can easily build a page without
								coding. Build your next consultancy website within few minutes.
							</p>
						</div>
						<div>
							<div className={styles.featureSection}>
								<InsightsIcon fontSize="large" /> <h3>Track Progress Fast</h3>
							</div>

							<p className={styles.para}>
								{" "}
								With lots of unique blocks, you can easily build a page without
								coding. Build your next consultancy website within few minutes.
							</p>
						</div>
					</section>
				</main>
				<footer className={styles.footer}>
					<section className={styles.footerSections}>
						<div>
							{" "}
							<p className={styles.para}>Company</p>
							<ul>
								<li>About us </li>
								<li>Contact us</li>
								<li>Careers</li>
								<li>Press</li>
							</ul>
						</div>
						<div>
							{" "}
							<p className={styles.para}>Company</p>
							<ul>
								<li>Features</li>
								<li>Pricing</li>
								<li>News</li>
								<li>Help desk</li>
								<li> Support</li>
							</ul>
						</div>
						<div>
							<p className={styles.para}>Company</p>
							<ul>
								<li>Digital Marketing </li>
								<li>Content Writing</li>
								<li>SEO for Business</li>
								<li>UI Design</li>
							</ul>
						</div>
						<div>
							<p className={styles.para}>Company</p>
							<ul>
								{" "}
								<li>Privacy Policy</li>
								<li>Terms & Conditions</li>
								<li>Return Policy</li>
							</ul>
						</div>
						<div>
							{" "}
							<p className={styles.para}>Company</p>
							<ul>
								<li>Support@Brainwave.io </li>
								<li>+133-3430-332021</li>
							</ul>
						</div>
					</section>
					<hr />
					<div className={styles.socialIcons}>
						<p className={styles.para}>
							© 2024 Copyright, All Right Reserved, Made by Akshay Patel
						</p>
						<div className={styles.alignIcons}>
							<TwitterIcon />
							<FacebookIcon />
							<InstagramIcon />
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
