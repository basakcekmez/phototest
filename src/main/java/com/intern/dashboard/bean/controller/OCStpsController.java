package com.intern.dashboard.bean.controller;

import com.google.common.cache.Cache;
import com.intern.dashboard.bean.config.AppSpringConfiguration;

import com.intern.dashboard.job.OCSFlightFetcherJob;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by 7593 on 7.05.2018.
 */
@RestController
@RequestMapping("/service")
public class OCStpsController {
    @Autowired
    AppSpringConfiguration dataSource;//todo datasource'a gerek yoksa kaldir
   /* @Autowired
    OcsFlightRecorderRepo ocsFlightRecorderRepo;*/
    @Autowired
    OCSFlightFetcherJob ocsFlightFetcherJob;

    Logger logger = LoggerFactory.getLogger(this.getClass());
   // Cache<Long, OcsFlightRecorder> ocsFlightTable;

    public OCStpsController() {

    }

    @RequestMapping(value = "/checkDatasource")
    public Boolean checkDatasource() {
        try {
            ResultSet resultSet = dataSource.dataSource().getConnection().createStatement().executeQuery("SELECT 1 from DUAL");
            while (resultSet.next()) {
                {
                    logger.info("" + resultSet.getInt(1));
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return true;
    }


 /*   @RequestMapping(2value = "/getLatestOCSfrs", method = RequestMethod.GET)
    public @ResponseBody  List<OcsFlightRecorder> getLatestOCSfrs(@RequestParam("id") Long id) {

        return ocsFlightFetcherJob.getCurrentRecordsAfter(id);
    }

    public Cache<Long, OcsFlightRecorder> getOcsFlightTable() {
        return ocsFlightTable;
    }*/
}
