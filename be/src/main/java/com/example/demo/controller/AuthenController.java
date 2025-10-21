package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class AuthenController {

    @Autowired
    private UserRepository userRepository;

    // 🟢 LOGIN
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        Map<String, Object> response = new HashMap<>();

        if (username == null || password == null || username.isEmpty() || password.isEmpty()) {
            response.put("success", false);
            response.put("message", "Vui lòng nhập username và password.");
            return response;
        }

        Optional<User> user = userRepository.findByUsernameAndPassword(username, password);
        if (user.isPresent()) {
            response.put("success", true);
            response.put("message", "Đăng nhập thành công!");
            response.put("user", user.get());
        } else {
            response.put("success", false);
            response.put("message", "Sai username hoặc password.");
        }

        return response;
    }

    // 🟢 REGISTER
    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        Map<String, Object> response = new HashMap<>();

        if (username == null || password == null || username.isEmpty() || password.isEmpty()) {
            response.put("success", false);
            response.put("message", "Vui lòng nhập username và password.");
            return response;
        }

        // Kiểm tra username trùng
        Optional<User> existingUser = userRepository.findAll().stream()
                .filter(u -> u.getUsername().equals(username))
                .findFirst();

        if (existingUser.isPresent()) {
            response.put("success", false);
            response.put("message", "Username đã tồn tại. Vui lòng chọn tên khác.");
            return response;
        }

        // Tạo user mới
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password); // ⚠️ Thực tế nên mã hóa password
        userRepository.save(newUser);

        response.put("success", true);
        response.put("message", "Đăng ký thành công!");
        response.put("user", newUser);

        return response;
    }
}
