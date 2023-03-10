import { createContext } from "react";

export const defaultValues = {
	actualTasks: new Array(),
	finishedTasks: new Array(),
	removedTasks: new Array(),
	addTask: () => {},
	removeTask: () => {},
	finishTask: () => {},
};

export const AppContext = createContext(defaultValues);
