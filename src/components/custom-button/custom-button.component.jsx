import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherItemProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherItemProps} >
        {children}
    </button>
)

export default CustomButton;