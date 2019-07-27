#!/usr/bin/env bash
LIBRARYPATH=.:$TIMESTEN_ROOT/lib/
export LIBRARYPATH
nohup java -Dloader.path=lib -Dspring.config.location="file:./application.yml" -Djava.library.path="$LIBRARYPATH"  -jar ocs-dashboard.jar >/dev/null 2>&1 &



#!/usr/bin/env bash
nohup java -DdashBoardFolder="$DASHBOARD_FOLDER" -Dloader.path="$DASHBOARD_FOLDER"/lib -Dspring.config.location="file:$DASHBOARD_FOLDER/application.yml" -Djava.library.path="$TIMESTEN_ROOT/lib/" -jar $DASHBOARD_FOLDER/ocs-dashboard.jar >/dev/null 2>&1 &