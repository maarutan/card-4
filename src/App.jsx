import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Title from "./components/Title/Title";
import { base } from "./assets/Database.js";
function App() {
	return (
		<>
			<Title />
			<div className={styles.cardsContin}>
				<Cards src="./cardimg1.png" title={base.title} content={base.content} />
				<Cards src="./cardimg1.png" title={base.title} content={base.content} />
				<Cards src="./cardimg2.png" title={base.title2} content={base.content2} />
			</div>
		</>
	);
}

export default App;
