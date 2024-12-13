import { isSelected } from "react";

export default function Task({task,isSelected}) {
    const [isSelected, setIsSelected] = useState(isSelected);
    
    return(
        <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
        </li>
    );
}