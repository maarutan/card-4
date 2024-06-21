/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import styles from "./style.module.css";
const Cards = (props) => {
	return (
		<div>
			<div className={styles.cards}>
				<div className={styles.block1}>
					<img className={styles.img} src={props.src} />
				</div>
				<div className={styles.block2}>
					<h3 className={styles.title}>{props.title}</h3>
					<p className={styles.content}>{props.content}</p>
					<a className={styles.link} href="#">
						{"Читать ->"}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
