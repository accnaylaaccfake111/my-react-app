import React, { useState } from "react";
import { Button, TextField, Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FestivalPage() {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const [festivals, setFestivals] = useState([
    "TẾT NGUYÊN ĐÁN",
    "TRUNG THU",
    "LỄ HỘI DỪA",
  ]);

  const handleToggle = () => {
    setShowInput(true);
  };

  const handleSubmit = () => {
    if (value.trim() === "") {
      toast.error("INPUT FAILED!");
    } else {
      toast.success(`ĐÃ THÊM LỄ HỘI "${value}"!`);
      setFestivals([...festivals, value.trim()]);
      setValue("");
    }
  };

  const handleFestivalClick = (festivalName) => {
    toast.info(`BẠN ĐANG TÌM HIỂU "${festivalName}"`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // ✅ Hàm xóa lễ hội
  const handleDeleteFestival = (festivalName) => {
    setFestivals(festivals.filter((f) => f !== festivalName));
    toast.warn(`ĐÃ XÓA LỄ HỘI "${festivalName}"!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    width: "200px",
    ...theme.applyStyles?.("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <h1>THEM NOI DUNG VAO DI</h1>

      {!showInput && (
        <Button variant="outlined" onClick={handleToggle}>
          Text
        </Button>
      )}

      {showInput && (
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="input here"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div style={{ marginTop: "10px" }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      )}

      <div style={{ marginTop: "50px" }}>
        <h1>DANH SACH LE HOI</h1>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {festivals.map((festival, index) => (
            <Stack direction="row" spacing={2} sx={{ mb: 2 }} key={index}>
              <Item>{festival}</Item>
              <Button
                variant="outlined"
                color="info"
                onClick={() => handleFestivalClick(festival)}
              >
                DETAILS
              </Button>
              {/* ✅ Nút xóa */}
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteFestival(festival)}
              >
                DELETE
              </Button>
            </Stack>
          ))}
        </Box>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default FestivalPage;
