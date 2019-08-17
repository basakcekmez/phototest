package com.intern.phototest.bean.controller;


import com.intern.phototest.bean.config.AppSpringConfiguration;
import com.intern.phototest.entity.TestHstr;
import com.intern.phototest.job.OCSFlightFetcherJob;

import com.intern.phototest.repository.TestHstrRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by 7593 on 7.05.2018.
 */
@RestController
@RequestMapping("/service")
public class TestService {
    @Autowired
    AppSpringConfiguration dataSource;//todo datasource'a gerek yoksa kaldir
    @Autowired
    TestHstrRepo testHstrRepo;
    @Autowired
    OCSFlightFetcherJob ocsFlightFetcherJob;

    Logger logger = LoggerFactory.getLogger(this.getClass());
    // Cache<Long, OcsFlightRecorder> ocsFlightTable;

    public TestService() {
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

    @RequestMapping(value = "/getAllTest", method = RequestMethod.GET)
    public @ResponseBody
    List<TestHstr> getLatestOCSfrs() {
        return testHstrRepo.findAll(Sort.by(Sort.Order.desc("testDate")));
    }

   /* public @ResponseBody  List<OcsFlightRecorder> getLatestOCSfrs(@RequestParam("id") Long id) {
       
	   return ocsFlightFetcherJob.getCurrentRecordsAfter(id);
    }*/

   /* public Cache<Long, OcsFlightRecorder> getOcsFlightTable() {
        return ocsFlightTable;
    }*/
}