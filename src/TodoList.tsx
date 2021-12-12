import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IToDo {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

function TodoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos(oldToDos => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          placeholder="Write a to do."
        />
      </form>
      <ul>
        {toDos.map(toDo => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
