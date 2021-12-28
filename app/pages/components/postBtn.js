import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class PostBtn extends Component {
  render(click) {
    return (
        <>
            <div className="postBtnContainer">

            <IconButton onClick={click}>
                <AddCircleIcon />
            </IconButton>

           
</div>
        </>
    )
  }
}

export default Sidebar;