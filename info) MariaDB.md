<hr>

<p align="center">
<h2 align="left"> ๐ข mariaDB์ MYSQL ๊ณตํต์ </h2>
<img src="https://user-images.githubusercontent.com/101113265/162025253-ce164476-4897-4245-a97c-9e77d72c174b.JPG" width="500" height="330">
<br/>

<p align="center">
<h2 align="left"> ๐ข mariaDB์ MYSQL ์ฐจ์ด์ </h2>
<img src="https://user-images.githubusercontent.com/101113265/162024666-2a09adc3-1273-40f1-955b-546f718b16a2.JPG" width="500" height="400">
<br/>

<p align="center">
<h2 align="left"> ๐ข mariaDB์ ์ฅ์  </h2>
<h4> โข ์๋์ผ๋ก ์ ๊ท ๋ธ๋๋ฅผ ์ถ๊ฐํด์ค๋ค.<br/>
  โข ์ฝ๊ธฐ/์ฐ๊ธฐ ๋ชจ๋ ํ์ฅ์ด ๊ฐ๋ฅํ๋ค.<br/>
  โข ํด๋ผ์ด์ธํธ์ ๋๊ธฐ์๊ฐ์ด ์ค์ด๋ ๋ค.<br/>
  โข ์๋ฒฝํ ๋ณ๋ ฌ๊ตฌ์กฐ๋ก ๋ฐ์ดํฐ๋ฅผ ํ๋จ์๋ก ๋ณต์ ํด์ค๋ค.</h4>
<hr>
<br/>


<p align="center">
<h2 align="left"> 1๏ธโฃ mariaDB ์ค์น๊ณผ์  </h2>
<img src="https://user-images.githubusercontent.com/101113265/162025783-70f1144a-bc84-409f-b91b-b82141a8c60f.JPG" width="500" height="400">
<h4 align="left"> 1) MariaDB Repository ์ถ๊ฐ<br>
  : $ sudo apt-get install software-properties-common <br>
  $ sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc' <br>
  $ sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] https://mirror.yongbok.net/mariadb/repo/10.5/ubuntu focal main' <br>
โ ์ ๋ช๋ น์ด๋ค์ ์์๋๋ก ์๋ ฅํ์ฌ repository ์ถ๊ฐ๋ฅผ ํด์ค๋ค. </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162028257-20a3851f-42cd-442c-87a7-2e267a0016b5.JPG" width="500" height="400">
<h4 align="left"> 2) MariaDB server ์ค์น <br>
  : $ sudo apt update; <br>
  $ sudo apt install mariadb-server <br>
  โ ์ ๋ช๋ น์ด๋ค์ ์์๋๋ก ์๋ ฅํ์ฌ ์ค์น๋ฅผ ํด์ค๋ค.
</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162028347-b81f8d9d-4323-4df0-87bc-ba471e2160f7.JPG" width="500" height="300">
<h4 align="left"> 3) MariaDB client ์ค์น <br>
  : $ sudo apt install mariadb-client <br>
  โ ์ ๋ช๋ น์ด๋ฅผ ์๋ ฅํ์ฌ ์ค์น๋ฅผ ํด์ค๋ค.
</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162028968-1894637f-c2b6-4f5a-92fd-c9c1160d8672.JPG" width="500" height="400">
<h4 align="left"> 4) MariaDB secure ์ค์  <br>
  : $ sudo mysql_secure_installation <br>
  โ Secure ์ค์ ์ Unix socket authentification ํ์ฑํ, root password ์ค์ , anonymous users ํ์ฑํ ์ฌ๋ถ,<br>
  ์๊ฒฉ์ผ๋ก root login ์ฌ๋ถ, test DB ์ญ์  ์ฌ๋ถ๋ฅผ ์๋ ฅํ  ์ ์๋ค.<br>
  ๋๋ถ๋ถ์ ๊ธฐ๋ณธ ๊ฐ์ผ๋ก ์ค์ ํด๋ ๋ฌด๋ฐฉํ๋ Default ๊ฐ์ผ๋ก ์ค์ ํ๊ณ , ์ถํ SQL ๋ช๋ น์ด๋ ํ๊ฒฝ ํ์ผ์ ํตํด์ ๋ณ๊ฒฝ ๊ฐ๋ฅํ๋ค. 
</h4>
<hr>
<br/>

<p align="center">
<h2 align="left">  2๏ธโฃ mariaDB ๊ธฐ๋ณธ๋์ ํ์ธ </h2>
<img src="https://user-images.githubusercontent.com/101113265/162030043-2c0cf474-c110-4530-91d2-78823cb5b6e9.JPG" width="500" height="400">
<h4 align="left"> ๊ธฐ๋ณธ๋์ ํ์ธ <br>
  : ์ ๋ช๋ น์ด๋ค์ ์์๋๋ก ์๋ ฅํ์ฌ ๊ธฐ๋ณธ๋์์ ์ด์์ ๋ฌด๋ฅผ ํ์ธํด์ค๋ค. </h4>
  
<br/>
<hr>
