import type { ButtonsProps } from "../interfaces/ButtonProps";

export function Button({ name }: ButtonsProps) {
    return (
        <button className="btn btn-ghost w-[7rem] rounded-3xl border-violet-500 font-rozha">{name}</button>
    )
}
