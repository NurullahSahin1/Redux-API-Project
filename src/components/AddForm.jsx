import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionsTypes } from "../redux/actionTypes/acttionTypes";
import { addTodo } from "../redux/actions/todoActions";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    dispatch(addTodo(newTodo));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="örn. typescript projesi yap"
        type="text"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
