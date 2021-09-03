import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  label: {
    fontSize: ".875rem",
  },
}));

const Label = ({ htmlFor, children }) => {
  const classes = useStyles();

  return (
    <label htmlFor={htmlFor} className={classes.label}>
      {children}
    </label>
  );
};

export default Label;
