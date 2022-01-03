import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherItemProps }) => (
    <button className="custom-button" {...otherItemProps} >
        {children}
    </button>
)

export default CustomButton;