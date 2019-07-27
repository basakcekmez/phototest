npm run-script build

LIBRARYPATH=.:$TIMESTEN_ROOT/lib/
export LIBRARYPATH
java -Dspring.config.location="file:./application.yml" -Djava.library.path="$LIBRARYPATH" -jar ocs-dashboard.jar

jdbc:timesten:direct:tt_ngo


file:///C:/properties/application.yml
-Dspring.config.location=file:/application.xml

compiler.automake.allow.when.app.running


http://localhost:7080/phototest/
http://localhost:7080/phototest/service/getAllTest