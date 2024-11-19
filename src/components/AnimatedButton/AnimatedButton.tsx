import {useState} from "react";
import Layout from "../common/Layout";

import styles from './animated_button.module.css'
import Loader from "../common/Loader";
import { AnimatePresence, motion } from "motion/react";

type Status = 'idle' | 'loading' | 'success';

const buttonCopy: Record<Status, string | JSX.Element> = {
  idle: 'Send me a login link',
  loading: <Loader />,
  success: 'Login link sent!',
};

const AnimatedButton = () => {
  const [buttonState, setButtonState] = useState<Status>('idle');

  const handleClick = () => {
	setButtonState('loading');

	setTimeout(() => {
	  setButtonState('success');
	}, 1750);

	setTimeout(() => {
	  setButtonState('idle');
	}, 3500);
  };

  return (
	<Layout title="Animated Button">
	  <button
		className={styles.button}
		onClick={handleClick}
		disabled={buttonState !== 'idle'}
	  >
		<AnimatePresence mode="popLayout" initial={false}>
		  <motion.span
			key={buttonState}
			transition={{type: 'spring', duration: 0.3, bounce: 0}}
			initial={{opacity: 0, y: -25}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 25}}
		  >
			{buttonCopy[buttonState]}
		  </motion.span>
		</AnimatePresence>
	  </button>
	</Layout>
  )
};

export default AnimatedButton;
