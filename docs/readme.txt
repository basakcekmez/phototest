npm run-script build


LIBRARYPATH=.:$TIMESTEN_ROOT/lib/
export LIBRARYPATH
java -Dspring.config.location="file:./application.yml" -Djava.library.path="$LIBRARYPATH" -jar ocs-dashboard.jar
mvn install:install-file "-Dfile=ttjdbc7.jar" "-DgroupId=com.oracle" "-DartifactId=ttjdbc7" "-Dversion=7" "-Dpackaging=jar"

jdbc:timesten:direct:tt_ngo


file:///C:/properties/application.yml
-Dspring.config.location=file:/application.xml

compiler.automake.allow.when.app.running






FCBS_MAINCLASS=com.i2i.fcbs.ocs.OCS
export FCBS_MAINCLASS

FCBS_MAINCONFIG=$MODULE_CONFIG_ROOT/ocs.conf
export FCBS_MAINCONFIG

