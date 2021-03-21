@ECHO OFF 
REM крочь "C:\xampp" заменить на путь к вашему xampp
START /min C:\xampp\xampp_start.exe
rem START C:\xampp\xampp-control.exe
START /min npm run-script start-gulp
START /min npm start