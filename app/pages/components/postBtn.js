import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class PostBtn extends Component {
  render(click, classId) {
    return (
      <>
        <div className="postBtnContainer">
          <IconButton onClick={() => window.location.href = 'https://www.devneo.wtf/new'} variant="contained" size="large" style={{ fontSize: '75px', color: '#eb64b9', size: '75px' }}>
            <AddCircleIcon className={classId} style={{ color: '#eb64b9', fontSize: '40px' }} />
          </IconButton>


        </div>
      </>
    )
  }
}

export default PostBtn;