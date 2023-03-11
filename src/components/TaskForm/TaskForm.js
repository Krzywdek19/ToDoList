import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Form.scss";

const TaskForm = (props) => {
	const [displayBorder, setDisplayBorder] = useState(true);

	const handleResize = () => {
		if (window.innerWidth < 900) {
			setDisplayBorder(false);
		} else {
			setDisplayBorder(true);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});

	useEffect(() => {
		handleResize();
	}, []);

	return (
		<form className="wrapper-form" onSubmit={props.handleSubmit}>
			<label className="wrapper-form__label">
				<input
					placeholder={props.namePlaceholder}
					className="wrapper-form__input"
					type="text"
					value={props.nameValue}
					onChange={props.handleChangeName}
				></input>
			</label>
			<label className="wrapper-form__label">
				<input
					placeholder={props.contentPlaceholder}
					className="wrapper-form__input"
					type="text"
					value={props.contentValue}
					onChange={props.handleChangeContent}
				></input>
			</label>
			{displayBorder ? (
				<div className="wrapper-form__btn-border">
					<button className="wrapper-form__btn">
						<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
					</button>
				</div>
			) : (
				<button className="wrapper-form__pure-btn">
					<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
				</button>
			)}
		</form>
	);
};

export default TaskForm;
