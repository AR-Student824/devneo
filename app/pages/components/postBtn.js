import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';

const Styles = makeStyles((theme) => ({
  pink: {
    color: "#eb64b9 !important"
  }
}));

class PostBtn extends Component {
  render(click, classId) {
    return (
        <>
            <div className="postBtnContainer">

            <IconButton onClick={click} variant="contained" size="large" style={{fontSize: '75px'}} className={Styles().pink}>
                <AddCircleIcon />
            </IconButton>

           
</div>
        </>
    )
  }
}

export default PostBtn;