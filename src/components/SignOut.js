import React from 'react'
import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import CallIcon from "@mui/icons-material/Call";


export const SignOut = () => {
  return (
    <div className="header">
      <Button
        onClick={() => auth.signOut()}
        style={{ color: "white", fontSize: "15px" }}
      >
        Sign out
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  )
}
