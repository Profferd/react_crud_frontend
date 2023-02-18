import React from "react";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '../Icon/AddCircle';
import { Link } from "react-router-dom";

export const NewBookButton = () => {
  return (
    <Button
      variant="outlined"
      endIcon={ <AddCircleIcon color="black" size={24}/> }
    >
      <Link to={{
        pathname: `/editor/?bookId=null`,
      }}>
        ADD NEW
      </Link>
    </Button>
  )
};

export default NewBookButton;
