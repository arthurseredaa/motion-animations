import Layout from "../common/Layout";
import {AnimatePresence, motion} from "motion/react";

import styles from './layout_animations.module.css';
import {useState} from "react";

const links = ['Saved Sites', 'Collections', 'Discover', 'Profile'];

const LayoutAnimation4 = () => {
  const [activeLink, setActiveLink] = useState('')

  return (
	<Layout title="Shared layout animations #4">
	  <div className={styles.content}>
		<AnimatePresence>
		  {
			links.map((link) => (
			  <motion.div
				onFocus={() => setActiveLink(link)}
				onMouseOver={() => setActiveLink(link)}
				onMouseLeave={() => setActiveLink(link)}
				key={link}
				className={styles.link_container}
			  >
				<motion.a className={styles.link} href="#">{link}</motion.a>
				{activeLink !== link ? null : (
				  <motion.div
					layout
					layoutId="decoration"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={styles.decoration}
				  />
				)}
			  </motion.div>
			))
		  }
		</AnimatePresence>
	  </div>
	</Layout>
  );
};

export default LayoutAnimation4;
