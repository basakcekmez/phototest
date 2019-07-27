package com.intern.dashboard.repository;
/*
import com.intern.dashboard.entity.OcsFlightRecorder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OcsFlightRecorderRepo extends JpaRepository<OcsFlightRecorder, Long> {


    @Query("SELECT max(t.id) FROM  OcsFlightRecorder t ")
    Optional<Long> findMaxId();

    @Query(value = "select * FROM (SELECT * from OCS_FLIGHT_RECORDER q WHERE q.ID> ?1 order BY ID DESC) WHERE ROWNUM<=?2",nativeQuery = true)
    List<OcsFlightRecorder> findRecordsAfter(Long id,Integer recordCount);
}*/


