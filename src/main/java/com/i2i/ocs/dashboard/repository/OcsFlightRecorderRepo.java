package com.i2i.ocs.dashboard.repository;

import com.i2i.ocs.dashboard.entity.OcsFlightRecorder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OcsFlightRecorderRepo extends JpaRepository<OcsFlightRecorder, Long> {
   /* @Query("SELECT t.title FROM Todo t where t.id = :id")
    String findTitleById(@Param("id") Long id);

    @Query("SELECT t.title FROM Todo t where t.id = :id")
    Optional<String> findTitleById(@Param("id") Long id)*/

    /*@Async
    @Query("SELECT t.title FROM Todo t where t.id = :id")
    Future<String> findTitleById(@Param("id") Long id);

    @Async
    @Query("SELECT t.title FROM Todo t where t.id = :id")
    Future<Optional<String>> findTitleById(@Param("id") Long id);

      @Query("SELECT t FROM Todo t where t.title = ?1 AND t.description = ?2")
    public Optional<Todo> findByTitleAndDescription(String title, String description);

    @Query(value = "SELECT * FROM todos t where t.title = ?0 AND t.description = ?1",
        nativeQuery=true
    )
    */

    @Query("SELECT max(t.id) FROM  OcsFlightRecorder t ")
    Optional<Long> findMaxId();

    @Query(value = "select * FROM (SELECT * from OCS_FLIGHT_RECORDER q WHERE q.ID> ?1 order BY ID DESC) WHERE ROWNUM<=?2",nativeQuery = true)
    List<OcsFlightRecorder> findRecordsAfter(Long id,Integer recordCount);
}


