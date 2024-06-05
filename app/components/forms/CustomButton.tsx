interface CustomButtonProps {
    label: string;
    onClick?: ()=>void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick}) =>{
    return (
        <div onClick={onClick} className="w-full py-4 hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer">
            {label}
        </div>
    )
}

export default CustomButton;