/*========== ButtonProps Interface ==========*/
import type { ButtonProps } from "../assets/data"

/*
- The Button component receives the following props:
  - {label}: The text to display inside the button.
  - {icon}: An OPTIONAL icon inside the button (can be a ReactNode).
  - disabled={disabled}: A boolean that determines if the button should be disabled (if true, the button is unclickable).
  - {...props}: Any other standard button props like (onClick, type, etc. (the spread operator takes all HTMLButtonElement attributes)).
*/

const Button = ({ label, icon, disabled, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`flex items-center gap-2  py-2 px-3 rounded-lg text-[1.2rem] text-amber-50 ${disabled ? 'bg-gray-500' : 'bg-oxford-blue hover:bg-blue-950 transition-colors duration-300 cursor-pointer'}`}>
            {label}
            {icon}
        </button>
    )
}

export default Button