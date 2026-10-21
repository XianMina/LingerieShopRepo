import type { ButtonsProps } from "../interfaces/ButtonProps";

export function Button({ name }: ButtonsProps) {
    return (
        <button className="btn btn-ghost rounded-3xl border-violet-500">{name}</button>
    )
}
