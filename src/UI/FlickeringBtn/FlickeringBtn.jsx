import classes from './FlickeringBtn.module.css'

const FlickeringBtn = ({text, onClick}) => {
  return (
    <h1 className={classes.flickering_btn}
      onClick={onClick}
    >
      {text}
    </h1>
  );
};

export default FlickeringBtn;
