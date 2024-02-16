import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionsTypes } from "../redux/actionTypes/acttionTypes";
import { updateTodo } from "../redux/actions/todoActions";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    dispatch(updateTodo(updated));
  };
  const dispatch = useDispatch();
  return (
    <div className=" border shadow shadow-lg p-4 my-5 ">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={toggleIsDone} className="mx-3 btn btn-success">
        {todo.is_done ? "Devam Ediyor" : "Tamamlandı"}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DELETE",
            payload: todo.id,
          })
        }
        className="btn btn-danger"
      >
        Sil
      </button>

      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
