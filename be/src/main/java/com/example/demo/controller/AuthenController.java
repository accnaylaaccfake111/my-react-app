package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/api")

public class AuthenController {
    @Autowired
    private UserRepository userRepository;

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
}
