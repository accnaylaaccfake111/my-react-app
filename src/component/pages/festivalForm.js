import { useState } from "react"
import { Button,TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

function FestivalForm() {
    const [showInput, setShowInput] = useState("");
    const [value, setValue] = useState("");

    const isToggle = () => {
        setShowInput(true);
    }
    const isSumbit = () => {
        if (value.trim() === ""){
            toast.error("INPUT FAILED!");
        } else {
            toast.success("INPUT SUCCESS!");
            setValue("")
        }
    }

    return(
        <div style={{ 
            textAlign: 'center',
            justifyContent: 'center'
        }}>
            <h1>THEM NOI DUNG VAO DI</h1>
            {!showInput && (
                <Button variant="outlined" onClick={isToggle}>
                Text
                </Button>
            )}

            {showInput && (
                <div style={{ marginTop: "20px" }}>
                    <TextField
                        label="Nhập nội dung"
                        variant="outlined"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <div style={{ marginTop: "10px" }}>
                        <Button variant="contained" color="primary" onClick={isSumbit}>
                        Submit
                        </Button>
                    </div>
                </div>
            )}

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default FestivalForm;