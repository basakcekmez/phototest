package com.intern.dashboard.job;

//import com.intern.dashboard.repository.OcsFlightRecorderRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.*;

/**
 * Created by 7593 on 9.05.2018.
 */
@Service
public class OCSFlightFetcherJob {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Value("${dashboard.fetcher.recordCount}")
    Integer wantedRecordCount;
    Long maxId;
    /*@Autowired
    OcsFlightRecorderRepo ocsFlightRecorderRepo;*/
  //  private Cache<Long, OcsFlightRecorder> ocsFlightTable;


    @PostConstruct
    private void init() {
     /*   ocsFlightTable = CacheBuilder.newBuilder()
                .maximumSize(wantedRecordCount + 1000)
                .build();*/
    }


    public void startFetch() {

        new Thread(() -> {
            while (true) {
                try {
                   /* if (ocsFlightTable.size() < 1) {
                        Optional<Long> maxIdOp = ocsFlightRecorderRepo.findMaxId();
                        if (maxIdOp.isPresent()) {
                            maxId = maxIdOp.get();
                            putInitialRecords();
                        }
                    } else {
                        putNewerRecords();
                    }*/


                } catch (Exception e) {
                    logger.error("Error in fetching iteration", e);
                }finally {
                    try {
                        Thread.sleep(4000);
                    } catch (InterruptedException e) {
                        logger.error("Error in fetching", e);
                    }
                }
            }
        }).start();
    }


   /* private void putInitialRecords() {
        List<OcsFlightRecorder> ocsFlightRecorders = ocsFlightRecorderRepo.findRecordsAfter(maxId - (wantedRecordCount - 1), wantedRecordCount);
        pushRecordsToMap(ocsFlightRecorders);
    }

    private void putNewerRecords() {
        List<OcsFlightRecorder> ocsFlightRecorders = ocsFlightRecorderRepo.findRecordsAfter(maxId, wantedRecordCount);
        if (ocsFlightRecorders.size() > 100)
            logger.warn("This is not expected normally we are expecting 20 counts max for newer ocsFlightRecorders, " +
                    "currentCount:" + ocsFlightRecorders.size());
        pushRecordsToMap(ocsFlightRecorders);

    }

    private void pushRecordsToMap(List<OcsFlightRecorder> ocsFlightRecorders) {
        for (OcsFlightRecorder ocsFlightRecorder : ocsFlightRecorders) {
            ocsFlightTable.put(ocsFlightRecorder.getID(), ocsFlightRecorder);
            if (ocsFlightRecorder.getID() > maxId) {
                maxId = ocsFlightRecorder.getID();
            }
        }
    }

    public List<OcsFlightRecorder> getCurrentRecordsAfter(Long id) {
        List<OcsFlightRecorder> newRecords = new ArrayList<>();
        Collection<OcsFlightRecorder> ocsFlightRecorders = ocsFlightTable.asMap().values();
        for (OcsFlightRecorder record : ocsFlightRecorders) {
            if (id < record.getID()) {
                newRecords.add(record);
            }
        }

        Collections.sort(newRecords, (o1, o2) -> o1.getID().compareTo(o2.getID()));
        if (newRecords.size() > wantedRecordCount) {
            return newRecords.subList(newRecords.size() - 1 - (wantedRecordCount - 1), newRecords.size());
        } else
            return newRecords;
    }*/
}
