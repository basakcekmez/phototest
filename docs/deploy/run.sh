#!/usr/bin/env bash
LIBRARYPATH=.:$TIMESTEN_ROOT/lib/
export LIBRARYPATH
nohup java -Dloader.path=lib -Dspring.config.location="file:./application.yml" -Djava.library.path="$LIBRARYPATH"  -jar ocs-dashboard.jar >/dev/null 2>&1 &

#!/usr/bin/env bash
nohup java -DprojectFolder="$PROJECT_FOLDER" -Dloader.path="$PROJECT_FOLDER"/lib -Dspring.config.location="file:$PROJECT_FOLDER/application.yml"  -jar $PROJECT_FOLDER/phototest.jar >/dev/null 2>&1 &