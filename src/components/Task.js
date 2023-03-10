import { Route, Routes } from "react-router-dom";
import Controls from "./Controls";

import "../styles/TasksList.css";

const Task = (props) => (
	<div className="wrapper-tasks-list-task">
		<h2 className="wrapper-tasks-list-task__title">{props.taskName}</h2>
		<p className="wrapper-tasks-list-task__content">{props.taskContent}</p>
		{props.controls ? <Controls id={props.id} /> : null}
	</div>
);

export default Task;
