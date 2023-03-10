import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext, defaultValues } from "../context/AppContext";
import Footer from "./Footer";
import Heading from "./Heading";
import Nav from "./Nav";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const App = () => {
	//Form

	const defaultPlaceholder = "Type task name";
	const defaultContentPlaceholder = "Type task content";

	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [namePlaceholder, setNamePlaceholder] = useState(defaultPlaceholder);
	const [contentPlaceholder, setContentPlaceholder] = useState(
		defaultContentPlaceholder
	);
	const handleChangeName = (ev) => setName(ev.target.value);
	const handleChangeContent = (ev) => setContent(ev.target.value);

	const validation = (ev) => {
		let flag = true;
		if (name.length < 4) {
			setName("");
			setNamePlaceholder("Name length cannot be shorter than 4 letters");
			flag = false;
		}
		if (!/\s/.test(content)) {
			setContent("");
			setContentPlaceholder("Content must consist of at least two words");
			flag = false;
		}

		return flag;
	};

	const handleAddTask = (ev) => {
		ev.preventDefault();
		if (validation()) {
			let tasks = actualTasks;
			tasks.push({
				name: name,
				content: content,
				id: tasks.length + 1 * (Math.random() + 5),
			});
			setActualTasks(tasks);
			setName("");
			setContent("");
			setNamePlaceholder(defaultPlaceholder);
			setContentPlaceholder(defaultContentPlaceholder);
		}
	};

	//Form

	//Logic
	const [actualTasks, setActualTasks] = useState(defaultValues.actualTasks);
	const [removedTasks, setRemovedTasks] = useState(defaultValues.removedTasks);
	const [finishedTasks, setFinishedTasks] = useState(
		defaultValues.finishedTasks
	);
	const [arrayChanger, setArrayChanger] = useState(0);

	const getIndex = (arr, id) => {
		let i = 0;
		while (actualTasks[i].id != id) {
			i++;
		}
		return i;
	};

	const handleRemoveTask = (ev) => {
		const id = ev.currentTarget.id;
		let removed = removedTasks;
		let task = actualTasks[getIndex(actualTasks, id)];
		removed.push(task);

		let tasks = actualTasks;
		tasks.splice(getIndex(tasks, id), 1);

		setActualTasks(tasks);
		setRemovedTasks(removed);
		setArrayChanger((prev) => prev + 1);
	};

	const handleFinishTask = (ev) => {
		const id = ev.currentTarget.id;

		let finished = finishedTasks;
		let task = actualTasks[getIndex(actualTasks, id)];
		finished.push(task);

		let tasks = actualTasks;

		tasks.splice(getIndex(tasks, id), 1);

		setActualTasks(tasks);
		setFinishedTasks(finished);
		setArrayChanger((prev) => prev + 1);
	};

	//Logic

	return (
		<AppContext.Provider
			value={{
				actualTasks,
				removedTasks,
				finishedTasks,
				handleAddTask,
				finishTask: handleFinishTask,
				removeTask: handleRemoveTask,
			}}
		>
			<Heading />
			<Nav />
			<TasksList />
			<Routes>
				<Route
					path="/actualTasks"
					element={
						<TaskForm
							nameValue={name}
							contentValue={content}
							handleChangeName={handleChangeName}
							handleChangeContent={handleChangeContent}
							handleSubmit={handleAddTask}
							namePlaceholder={namePlaceholder}
							contentPlaceholder={contentPlaceholder}
						/>
					}
				/>
				<Route path="*" element={<Footer />} />
			</Routes>
		</AppContext.Provider>
	);
};

export default App;
