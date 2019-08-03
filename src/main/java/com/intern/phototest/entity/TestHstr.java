package com.intern.phototest.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "TEST_HSTR")
public class TestHstr implements Serializable {

    @Id
    @Column(name = "test_name")
    private String testName;

    @Column(name = "test_result")
    private Long testResult;

    @Column(name = "test_date")
    private Timestamp testDate;

    public TestHstr() {

    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public Long getTestResult() {
        return testResult;
    }

    public void setTestResult(Long testResult) {
        this.testResult = testResult;
    }

    public Timestamp getTestDate() {
        return testDate;
    }

    public void setTestDate(Timestamp testDate) {
        this.testDate = testDate;
    }
}
