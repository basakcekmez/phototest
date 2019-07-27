package com.i2i.ocs.dashboard.bean.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import javax.sql.DataSource;

/**
 * Created by 7593 on 7.05.2018.
 */

@Configuration
@ComponentScan(basePackages = "com.i2i.ocs.dashboard")
@PropertySource("classpath:application.yml")
public class AppSpringConfiguration {
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }
}
