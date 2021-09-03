import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  error: {
    color: "#A20000",
    fontSize: "0.75rem",
    marginTop: "2px",
  },
}));

const FormError = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.error}>{children}</div>;
};

export default FormError;
