package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Subject,Long> {
}
