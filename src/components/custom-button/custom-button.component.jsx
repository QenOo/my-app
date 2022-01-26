import './custom-button.styles.scss';

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherItemProps
}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`}
        {...otherItemProps}
    >
        {children}
    </button>
);

export default CustomButton;
