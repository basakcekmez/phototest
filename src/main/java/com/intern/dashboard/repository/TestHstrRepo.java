package com.intern.dashboard.repository;

import com.intern.dashboard.entity.TestHstr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TestHstrRepo extends JpaRepository<TestHstr, String> {
}


