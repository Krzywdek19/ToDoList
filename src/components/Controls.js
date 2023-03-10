import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

import "../styles/TasksList.css";

const Controls = (props) => {
	const { finishTask, removeTask } = useContext(AppContext);
	return (
		<div className="wrapper-tasks-list-task-controls">
			<button
				className="wrapper-tasks-list-task-controls__btn wrapper-tasks-list-task-controls__btn--finish"
				id={props.id}
				onClick={finishTask}
			>
				<FontAwesomeIcon id={props.id} icon={faCheck} />
			</button>
			<button
				className="wrapper-tasks-list-task-controls__btn wrapper-tasks-list-task-controls__btn--delete"
				id={props.id}
				onClick={removeTask}
			>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	);
};

export default Controls;
