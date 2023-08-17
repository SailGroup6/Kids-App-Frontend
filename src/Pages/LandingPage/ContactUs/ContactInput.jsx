/* eslint-disable react/prop-types */
const ContactInput = (props) => {
    return (
      <div className="input-group relative">
        <input
          type={props.type}
          className={` bg-inherit border border-t-0 border-x-0 border-b-[#8D8D8D] font-semibold text-[--grey3] outline-none ${props.className}`}
          name={props.name}
          id={props.id}
          required={props.required}
          disabled={props.disabled}
          onClick={props.onClick}
          // eslint-disable-next-line react/no-unknown-property
          arial-label={props.arialLabel}
        />
        <label className=" font-semibold text-[#8D8D8D] text-lg pointer-events-none absolute left-4 top-[0%] transition-all">
          {props.label}
        </label>
      </div>
    );
  };
  
  export default ContactInput;
  