import {FC, ReactNode} from "react";
import styles from './layout.module.css';
import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
}

const Layout: FC<Props> = ({ children, title, className = '' }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8 }} viewport={{ amount: .8, once: true }} className={`${styles.container} ${className}`}>
    {title && <h1>{title}</h1>}
    {children}
  </motion.div>
)

export default Layout;
