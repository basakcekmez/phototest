    
package com.intern.phototest.repository;

import com.intern.phototest.entity.TestHstr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestHstrRepo extends JpaRepository<TestHstr, String> {
}