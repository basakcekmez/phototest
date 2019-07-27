package com.i2i.ocs.dashboard;

import com.i2i.ocs.dashboard.entity.OcsFlightRecorder;
import com.i2i.ocs.dashboard.job.OCSFlightFetcherJob;
import com.i2i.ocs.dashboard.repository.OcsFlightRecorderRepo;
import com.zaxxer.hikari.HikariDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;
import java.util.Locale;
import java.util.Optional;

/**
 * Created by 7593 on 7.05.2018.
 */
@SpringBootApplication
public class SpringBootConsoleApplication implements CommandLineRunner {
    private static Logger logger = LoggerFactory.getLogger(SpringBootConsoleApplication.class);
   /* @Autowired
    DataSource dataSource;*/
    @Autowired
    OcsFlightRecorderRepo ocsFlightRecorderRepo;
    @Autowired
    OCSFlightFetcherJob ocsFlightFetcherJob;

    public static void main(String[] args) throws Exception {
        Locale.setDefault(new Locale("en", "EN"));

        if(System.getProperty("dashBoardFolder") == null){
            System.setProperty("dashBoardFolder",".");
        }

        logger.info("spring.config.location:"+ System.getProperty("spring.config.location"));
        logger.info("dashBoardFolder:"+System.getProperty("dashBoardFolder"));

        SpringApplication.run(SpringBootConsoleApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // System.out.println("DATASOURCE = " + dataSource);
        // If you want to check the HikariDataSource settings
        //HikariDataSource newds = (HikariDataSource) dataSource;
        //System.out.println("DATASOURCE = " + newds.getMaximumPoolSize());
        //ocsFlightFetcherJob.putToMap();
        ocsFlightFetcherJob.startFetch();

    }
}