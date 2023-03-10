import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Form.css";

const TaskForm = (props) => {
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
			<div className="wrapper-form__btn-border">
				<button className="wrapper-form__btn">
					<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
