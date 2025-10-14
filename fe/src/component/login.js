import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography, CircularProgress } from "@mui/material";

export default function Login({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Vui lòng nhập username và password.");
      return;
    }

    const payload = { username: username.trim(), password };

    try {
      setLoading(true);
      if (typeof onSubmit === "function") {
        await onSubmit(payload);
      } else {
        // Mock login demo
        await new Promise((r) => setTimeout(r, 800));
        if (username === "admin" && password === "123456") {
          alert("Đăng nhập thành công (demo)!");
        } else {
          setError("Sai username hoặc password.");
        }
      }
    } catch (err) {
      setError("Đăng nhập thất bại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" align="center" mb={3}>
          Đăng nhập
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng nhập"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
