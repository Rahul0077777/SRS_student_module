package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.Subject;
import com.codewitharjun.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* Created by Arjun Gautam */
@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
Subject newUser(@RequestBody Subject  newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<Subject > getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    Subject  getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    Subject  updateUser(@RequestBody Subject  newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setSubname(newUser.getSubname());
                    user.setCredit(newUser.getCredit());
                    user.setSubjectcode(newUser.getSubjectcode());
                    user.setBasket(newUser.getBasket());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }



}
