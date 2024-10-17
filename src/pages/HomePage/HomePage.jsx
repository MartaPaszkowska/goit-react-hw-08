import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={styles.bg}>
			<div className={styles.centerContent}>
				<p className={styles.title}>Phone Book</p>

				<img
					src="/src/images/phonebook.jpg"
					alt="Open Book"
					className={styles.bookImage}
				/>
			</div>
		</div>
	);
};

export default HomePage;
