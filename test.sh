node -r ./test/helper test/commonjs;

node -r babel-register -r ./test/helper test/es2015;

tsc -p test/typescript && node -r ./test/helper test/typescript;
