package com.intern.dashboard;

import com.intern.dashboard.job.OCSFlightFetcherJob;
//import com.intern.dashboard.repository.OcsFlightRecorderRepo;
import com.intern.dashboard.repository.TestHstrRepo;
import com.zaxxer.hikari.HikariDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Sort;

import javax.sql.DataSource;
import java.util.Locale;

/**
 * Created by 7593 on 7.05.2018.
 */
@SpringBootApplication
public class SpringBootConsoleApplication implements CommandLineRunner {
    private static Logger logger = LoggerFactory.getLogger(SpringBootConsoleApplication.class);
    @Autowired
    DataSource dataSource;
    @Autowired
    TestHstrRepo testHstrRepo;
    @Autowired
    OCSFlightFetcherJob ocsFlightFetcherJob;

    public static void main(String[] args) throws Exception {
        Locale.setDefault(new Locale("en", "EN"));

        if (System.getProperty("projectFolder") == null) {
            System.setProperty("projectFolder", ".");
        }

        logger.info("spring.config.location:" + System.getProperty("spring.config.location"));
        logger.info("projectFolder:" + System.getProperty("projectFolder"));

        SpringApplication.run(SpringBootConsoleApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // System.out.println("DATASOURCE = " + dataSource);
        // If you want to check the HikariDataSource settings
        HikariDataSource newds = (HikariDataSource) dataSource;
        System.out.println("DATASOURCE = " + newds.getMaximumPoolSize());
        testHstrRepo.findAll(Sort.by(Sort.Order.desc("testDate")));

        //ocsFlightFetcherJob.putToMap();
        //ocsFlightFetcherJob.startFetch();

    }
}