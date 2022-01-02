import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherItemProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherItemProps} />
        {
            label ?
                (<label className={`${otherItemProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label} 
                </label>)
                : null
        }
    </div>
)

export default FormInput;