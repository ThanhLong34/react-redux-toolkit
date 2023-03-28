import PropTypes from "prop-types";
import styles from "./JobList.module.css";

JobList.propTypes = {
	jobList: PropTypes.array,
};

function JobList({ jobList }) {
	return (
		<ul className={styles.list}>
			{jobList &&
				jobList.map((job, idx) => (
					<li className={styles.item} key={idx}>
						{job}
					</li>
				))}
		</ul>
	);
}

export default JobList;
