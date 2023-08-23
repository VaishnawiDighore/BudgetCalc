import React from 'react'

const Profile = (props) => {
    const getProf = () => {
        alert("hello");
    }
  return (
    <div>
        <h3 onClick={getProf}>
            {/* {props.text} */}
            {props.text.name}
            {props.data}
        {/* Profile Component */}
        </h3>
    </div>
  )
}

export default Profile
