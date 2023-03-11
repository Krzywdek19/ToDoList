import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Task from "../Task/Task";
import "./TasksList.scss";

const TasksList = (props) => {
	const { actualTasks, finishedTasks, removedTasks } = useContext(AppContext);

	const lists = [actualTasks, removedTasks, finishedTasks];

	const list = (index, controls = false) => {
		const className = `wrapper-tasks-list wrapper-tasks-list--${
			index === 0 ? "actual" : index === 1 ? "removed" : "finished"
		}`;

		return (
			<main className={className}>
				{lists[index].length != 0 ? (
					lists[index].map((item, index) => (
						<Task
							taskName={item.name}
							taskContent={item.content}
							id={item.id}
							key={index}
							controls={controls}
						/>
					))
				) : (
					<h2 className="wrapper-tasks-list__info">List is empty</h2>
				)}
			</main>
		);
	};

	return (
		<Routes>
			<Route exact path="/" element={<Navigate to="/actualTasks"></Navigate>} />
			<Route path="/actualTasks" element={list(0, true)} />
			<Route path="/removedTasks" element={list(1)} />
			<Route path="/finishedTasks" element={list(2)} />
		</Routes>
	);
};

export default TasksList;
