import {AnimatePresence, motion} from "motion/react";
import Layout from "../common/Layout";
import {useState} from "react";

import styles from './yellow_box.module.css'
import {items} from "./data.ts";

const LayoutAnimation2 = () => {
  const [openedItemId, setOpenedItemId] = useState<null | string>(null);

  const currentOpenItem = items.find((item) => item.id === openedItemId);

  return (
	<Layout title="Shared layout animations #1" className={styles.wrapper}>
	  {openedItemId && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.layout} onClick={() => setOpenedItemId(null)}/>}
	  {
		items.map((item) => (
		  <motion.div
			layoutId={item.id}
			className={styles.small_square}
			  style={{backgroundColor: item.backgroundColor}}
			  key={item.id}
			  onClick={() => setOpenedItemId(item.id)}
			>
			  <motion.p layoutId={`text-${item.id}`}>{item.title}</motion.p>
			</motion.div>
		  ))
		}
		<AnimatePresence mode="wait">
		  {
			currentOpenItem && (
			  <motion.div
				layoutId={currentOpenItem.id}
				className={styles.big_square}
				onClick={() => setOpenedItemId(null)}
				key={currentOpenItem.id}
				style={{backgroundColor: currentOpenItem.backgroundColor}}
			  >
				<motion.p layoutId={`text-${currentOpenItem.id}`}>{currentOpenItem.title}</motion.p>
				<motion.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur dignissimos eaque id repudiandae vero vitae! Adipisci amet et ipsam laborum magni maiores natus non pariatur, placeat recusandae totam, veritatis.</motion.p>
			  </motion.div>
			)
		  }
		</AnimatePresence>
	</Layout>
  );
};

export default LayoutAnimation2;
