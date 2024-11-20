import { useState } from "react";
import Layout from "../common/Layout";

import styles from './layout_animations.module.css';
import { motion } from "motion/react";

const LayoutAnimation1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isShowMotion, setIsShowMotion] = useState(false);

  const toggleActive = () => setIsActive(!isActive);
  const toggleShowMotion = () => setIsShowMotion(!isShowMotion);

  return (
	<Layout title="Shared layout animations #1">
	  <div className={styles.controls}>
		<button onClick={toggleActive}>
		  Click me
		</button>

		<label htmlFor="show_motion">
		  Enable motion
		  <input id="show_motion" type="checkbox" checked={isShowMotion} onChange={toggleShowMotion}/>
		</label>
	  </div>

	  {!isShowMotion ? (
		<>
		  {
			isActive ? <div className={styles.big_box}/> : <div className={styles.small_box}/>
		  }
		</>
	  ) : (
		<>
		  {
			isActive ? <motion.div layoutId="box" className={styles.big_box}/> :
			  <motion.div layoutId="box" className={styles.small_box}/>
		  }
		</>
	  )}

	</Layout>
  );
};

export default LayoutAnimation1;
