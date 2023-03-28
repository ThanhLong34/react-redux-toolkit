import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJob } from "../../actions/job";
import styles from "./Home.module.css";
import JobList from "../../components/JobList/JobList";

function Home() {
	const jobList = useSelector((state) => state.job.list);
	const dispatch = useDispatch();
	const [jobName, setJobName] = useState("");
	const jobNameInputRef = useRef(null);

	const handleChangeJobName = (e) => {
		setJobName(e.target.value);
	};

	const handleAddJob = () => {
		const addJobAction = addJob(jobName);
		dispatch(addJobAction);

		setJobName("");
		jobNameInputRef.current.focus();
	};

	return (
		<div className={styles.wrapper}>
			<h1 className="page-title">JOB LIST</h1>
			<JobList jobList={jobList} />

			{/* Add job */}
			<label className={styles.label} htmlFor="jobName">
				Job name:
			</label>
			<input
				ref={jobNameInputRef}
				id="jobName"
				className={styles.input}
				type="text"
				value={jobName}
				onChange={handleChangeJobName}
			/>
			<button onClick={handleAddJob}>Add job</button>
		</div>
	);
}

export default Home;
