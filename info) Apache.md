<hr>
<p align="center">
<h2 align="left"> ๐ข APACHE์ ์ฅ์  </h2>
<h4> โข ํด๋ผ์ด์ธํธ ์์ฒญ์ ์ฒ๋ฆฌํ๊ธฐ ์ํด ๋ฉํฐ์ค๋ ๋ ๋ฐฉ์์ ๋ฐ๋ฅธ๋ค.<br/>
  โข ์น ์๋ฒ ์์ฒด ๋ด์์ ๋์  ์ปจํ์ธ ๋ฅผ ์ฒ๋ฆฌํ๋ค. <br/>
  โข ๋ชจ๋์ ๋์ ์ผ๋ก ๋ก๋ ๋ฐ ์ธ๋ก๋ํ๋ค.</h4>
<hr>
<br/>

<p align="center">
<h2 align="left"> 1๏ธโฃ ์ฐ๋ถํฌ ์ด์์ฒด์ ์์ APACHE ์น ์๋ฒ ์ค์น </h2>
<img src="https://user-images.githubusercontent.com/101113265/162013127-f0774761-a332-4f83-8186-2094c9937f6d.JPG" width="400" height="350">

<hr>
<br/>

<p align="center">
<h2 align="left"> 2๏ธโฃ APACHE ์ค์น๊ณผ์  </h2>
<img src="https://user-images.githubusercontent.com/101113265/162014087-f0f30bc7-71e9-4d07-b50e-3a5eb8600008.JPG" width="500" height="400">
<h4 align="left"> 1) ํฐ๋ฏธ๋์ ์ด์ฉํด apt ์๋ฐ์ดํธ<br>
  : ์ฐ์  ์ํ์น ์ค์น์  ์ต์ ๋ฒ์ ์ผ๋ก ๋ค์ด ๋ฐ๊ธฐ ์ํด apt๋ฅผ ์๋ฐ์ดํธ ํด์ค๋๋ค.<br>
  ($ sudo apt-get update ์๋ ฅ) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162014489-e10062fd-47a2-4ec9-9770-e588c9c4fd7a.JPG" width="500" height="400">
<h4 align="left"> 2) apache2 ์ค์น <br>
  : ์ฐ๋ฆฌ๊ฐ ์ฌ์ฉํ๊ณ  ์๋ OS๋ ์ฐ๋ถํฌ์ด๊ธฐ ๋๋ฌธ์ apache๊ฐ ์๋ apache2๋ฅผ ์ค์นํฉ๋๋ค.<br>
  ($ sudo apt-get install apache2 ์๋ ฅ) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162015506-0e265ba0-6b6f-4ae9-9460-70429ed3997c.JPG" width="500" height="400">
<h4 align="left"> 3) apache2 ์ค์น ํ์ธ<br>
  : apache2 ์ค์น๋ฅผ ํ์ธํด์ค๋๋ค. <br>
  ($ apache2 -v์ ์๋ ฅ) </h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162015742-acb9d19c-40d6-4f99-9bde-81f91ea6f89a.JPG" width="500" height="400">
<h4 align="left"> 4) apache2 ๊ตฌ๋ ํ์ธ<br>
  : 80ํฌํธ๊ฐ LISTEN์ค์์ ํ์ธํ  ์ ์์ต๋๋ค.<br>
  ($ netstat -ntlp ์๋ ฅ)<br><br> 

-- ํน์ ์ํ์น๊ฐ ๊ตฌ๋์ค์ด์ง ์๋ค๋ฉด ๋ฐ์ ๋ช๋ น์ด๋ฅผ ์ด์ฉํด์ค๋๋ค.<br>
์์ : $ sudo service apache2 restart <br>
์ฌ์์ : $ sudo service apache2 restart <br>
์ข๋ฃ : $ sudo service apache2 stop</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162017033-be8da54f-e715-460d-b192-e63b7851ea92.JPG" width="500" height="400">
<h4 align="left"> 5) ์น ํ๋ฉด ํ์ธ <br/>
  : ์ฐ๋ถํฌ ๋ด์ firefox ์น ๋ธ๋ผ์ฐ์ ์ 'localhost'๋ฅผ ํ์ดํํ๋ฉด ํ์ธ ๊ฐ๋ฅํฉ๋๋ค.</h4>
<br/>

<img src="https://user-images.githubusercontent.com/101113265/162022462-cfef74af-b8f7-41d4-bcbc-420e9ed3bd15.JPG" width="500" height="400">
<h4 align="left"> 6) ์ธ๋ถ ์น ์๋ฒ์์๋ ํ๋ฉด ํ์ธ <br/>
  : โ  index.html์์ title ์์ KimHoosung์ ์๋ ฅํ๊ณ  ์ ์ฅํ๋ค. ($ls ์๋ ฅ ์ดํ $ sudo gedit index.html ์๋ ฅ) <br>
โก ํฐ๋ฏธ๋์์ ifconfig๋ฅผ ํตํด ip(192.168.111.128) ์์๋ธ๋ค. ($ ifconfig ์๋ ฅ) <br>
โข window ์ด์์ฒด์  cmd์์ ํํ์คํธ๋ฅผ ํด๋ณด๊ณ  ์ด์์์์ ํ์ธํ๋ค. <br>
โฃ window์์ ์ธํฐ๋ท์ ๋ค์ด๊ฐ์ ip(192.168.111.128) ์๋ ฅํด์ title ์์ kimHoosung ๋จ๋ ๊ฑฐ๋ฅผ ํ์ธํ๋ค.<br>
โ ์ธ๋ถํ๊ฒฝ์์๋ ์ ์๊ฐ๋ฅํ ๊ฒ์ ํ์ธ </h4>
<br/>
<hr>
