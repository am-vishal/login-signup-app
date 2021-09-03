import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formGridContainer: {
    "& > div": {
      marginBottom: "30px",
    },
  },

  inputField: {
    fontSize: ".875rem",
    margin: "2em 0 0 0",
  },
  text: {
    fontSize: ".75rem",
  },
}));

export default useStyles;
