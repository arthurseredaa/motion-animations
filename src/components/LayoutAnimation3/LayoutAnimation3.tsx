import {AnimatePresence, motion} from "motion/react";
import Layout from "../common/Layout";
import styles from './layout_animation.module.css'
import {useState} from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
}

const data: Item[] = [
  {
	id: 'angry_rabbits',
	title: 'Angry rabbits',
	description: 'They are coming for you!',
	fullDescription: 'The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.'
  },
  {
	id: 'ghost_town',
	title: 'Ghost town',
	description: 'Scary ghosts',
	fullDescription: 'In this game, players explore a deserted town, uncovering its eerie past and the mysteries behind its sudden abandonment. The gameplay combines puzzle-solving, exploration, and narrative elements and something else.'
  },
  {
	id: 'the_oddysey',
	title: 'The Oddysey',
	description: 'Explore unknown galaxies',
	fullDescription: 'Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.',
  },
  {
	id: 'pirates',
	title: 'Pirates in the jungle',
	description: 'Find the treasure',
	fullDescription: 'You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals. Some filler text to make it longer. Maybe even longer, because it looks better.',
  }
];

type AppInfoItemProps = {
  item: Exclude<Item, 'fullDescription'>;
  handleClick?: () => void;
  layoutId?: string;
}

// TODO: add border bottom
// FIX: border added to last item when modal open

const AppInfoItem = ({item, handleClick, layoutId}: AppInfoItemProps) => (
  <motion.div className={styles.item} layoutId={layoutId} onClick={handleClick}>
	<motion.img className={styles.image} src={`/images/games/${item.id}.png`} alt={item.title}
				layoutId={`image-${item.id}`}/>
	<div className={styles.item_info}>
	  <div>
		<motion.h2 className={styles.title} layoutId={`title-${item.id}`}>{item.title}</motion.h2>
		<motion.p className={styles.description} layoutId={`description-${item.id}`}>{item.description}</motion.p>
	  </div>
	  <motion.button layoutId={`button-${item.id}`} className={styles.button}>Get</motion.button>
	</div>
  </motion.div>
)

// TODO: add overlay with animation
const LayoutAnimation3 = () => {
  const [openedItem, setOpenedItem] = useState<null | string>(null);

  const openedItemData = data.find((item) => item.id === openedItem);

  return (
	<Layout className={styles.container} title="Shared layout animations #3">
	  <div className={styles.content}>
		<AnimatePresence>
		  {data.map((item) => <AppInfoItem item={item} key={item.id} layoutId={item.id}
										   handleClick={() => setOpenedItem(item.id)}/>)}
		  {
			openedItemData && (
			  <>
				<motion.div key={openedItemData.id} className={styles.item_modal} layoutId={openedItemData.id}
							onClick={() => setOpenedItem(null)}>
				  <AppInfoItem item={openedItemData}/>
				  <motion.p className={styles.description}>
					{openedItemData.fullDescription}
				  </motion.p>
				</motion.div>
			  </>
			)
		  }
		</AnimatePresence>
	  </div>
	</Layout>
  );
};

export default LayoutAnimation3;
