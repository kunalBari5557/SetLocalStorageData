import React from "react";
import './SignInSignUp.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Draggable from "react-draggable";
import TodoList from "../components/TodoList";

function Home() {
    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            <h1>Dashboard Page </h1>
            <Stack direction="row">
                <Avatar sx={{ marginLeft: "57rem", marginTop: "-3.4rem" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Button sx={{ marginTop: "-3.2rem", marginLeft: "2rem" }} variant="contained" color="success" onClick={logout} className="logout">LogOut</Button>
                <Button sx={{ marginTop: "-3.2rem" }} variant="contained" color="error" onClick={deleteAccount} className="delete">Delete</Button>
            </Stack>
            <Draggable>
                <TodoList />
            </Draggable>
        </div>
    );
}
export default Home;