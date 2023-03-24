import { useRef } from "react";
import "./inputstyles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      '
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="write task here"
          className="input_field"
        />
        <button className="input_btn" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};

export default InputField;
