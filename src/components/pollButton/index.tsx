interface PollButton {
  value: string;
  buttonstyle: string;
  type: "submit";
}

const PollButton = (props: PollButton) => {
  const { value, buttonstyle, type } = props;

  return (
    <button type={type} className={buttonstyle}>
      {value}
    </button>
  );
};

export default PollButton;
