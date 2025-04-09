
DIRNAME="$(dirname $0)"
aliasName="$1"
keyPath="$DIRNAME/keystores/$aliasName.keystore"
JAVA_BIN="$JAVA_HOME/bin"
cd $JAVA_BIN

if [ -f "$keyPath" ]; then
	exit
fi

pass=${aliasName:0:6}

keytool -genkey -alias $aliasName -keyalg "RSA" -validity "10000" -deststoretype "pkcs12" -dname "CN=Technology,OU=Internet,O=Company,L=shengzhen,ST=guangdong,C=cn"  -keystore $keyPath -keypass $pass -storepass $pass

exit

