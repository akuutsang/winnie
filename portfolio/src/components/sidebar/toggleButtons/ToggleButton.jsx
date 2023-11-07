// eslint-disable-next-line react/prop-types
const ToggleButton = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>Button</button>;
};
export default ToggleButton;
