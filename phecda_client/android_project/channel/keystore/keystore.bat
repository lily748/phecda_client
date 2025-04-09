
set DIRNAME=%~dp0
set aliasName=%1
set keyPath=%DIRNAME%\keystores\%aliasName%.keystore 
set JAVA_BIN=%JAVA_HOME%/bin

cd %JAVA_BIN%
%JAVA_BIN:~0,2%

if exist %keyPath% (
   exit 0
) 

keytool -genkey -alias %aliasName% -keyalg "RSA" -validity "10000" -deststoretype "pkcs12" -dname "CN=Technology,OU=Internet,O=Company,L=shengzhen,ST=guangdong,C=cn"  -keystore %keyPath% -keypass "jx2022" -storepass "jx2022"

exit 0

