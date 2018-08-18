# 2. Dasar-Dasar Vue.js
Setiap framework memiliki sintaks dan aturan penulisan yang unik. Dibuat sedemikian rupa agar dipatuhi oleh pengguna framework tersebut. Begitu juga Vue, terdapat aturan yang harus dilakukan, mulai dari cara penulisan, peletakan, format, dan sebagainya.
## 2.1. Persiapan
Dalam membuat aplikasi-aplikasi berbasis framework Vue.js yang akan dipelajari pada website ini, kita membutuhkan beberapa file, yaitu:
1. File <b>vue.min.js</b>, merupakan inti dari program-program yang akan dipelajari. File ini dapat didownload, sesuai dengan cara pada [Bab 1](/content/bab1.html#_1-3-installasi-vue-js).
2. File <b>index.html</b>, merupakan file yang berfungsi sebagai tampilan (view) dan antarmuka yang user lihat di browser. 
	::: tip Kenapa namanya harus index.html?
	Karena file dengan nama itulah yang secara default akan dijalankan pertama kali pada web server (jika, pakai sih hehe :smiley:)
	:::
3. File <b>app.js</b>, merupakan file tempat kita menempatkan kode-kode Javascript berbasis Vue.js.
4. Sebuah, folder, merupakan sebuah tempat untuk ketiga file yang telah disebutkan diatas. Letakkan file <b>vue.min.js</b>, <b>index.html</b>, <b>app.js</b> ke dalam folder tersebut.
<a target="_blank" :href="$withBase('/image/bab2.1.JPG')">
  <img :src="$withBase('/image/bab2.1.JPG')" alt="survey StateOfJS"/>
</a>

## 2.2. Tahapan Membuat Aplikasi dengan Vue.js
Langkah pertama adalah editing file, kita mulai dari file <b>index.html</b> dahulu, buka filenya, lalu silahkan isi dengan kode berikut:
``` html {5,6}
<!DOCTYPE html> 
<html>
<head>
	<title>Belajar Vue.js Yuk</title>
	<script src="vue.min.js"></script>
	<script src="app.js"></script>
</head>
<body>
	<!-- script lainnya nanti dapat diletakkan disini -->
</body>
</html>
```
Langkah selanjutnya adalah membuat "rumah" tempat menampilkan data hasil olahan. Jadi, kita letakkan saja "rumah" ini pada file index.html. Dimana meletakkannya? Lihat kode di bawah bro!
``` html {3,4}
<body>
	<!-- script lainnya nanti dapat diletakkan disini -->
	<div id="app">
	</div>
</body>
</html>
```
"Rumah" yang akan kita bangun diletakkan pada tag div, dikarenakan secara default div tidak berisi format apapun, hanya tempat kosong yang isinya bermacam-macam, cocok untuk rumah deh jadinya.
Kemudian terdapat kode <b>id="app"</b>, yang merupakan atribut dalam HTML dan penanda bahwa namanya tidak boleh sama antara satu id dengan id lainnya. Pada contoh ini, kita mengggunakan id dengan nama app. Selanjutnya adalah mengaitkan "rumah" tersebut dengan vue. Langkah mengaitkan "rumah" disebut dengan 'instansiasi'. Mari kita buka <b>file app.js</b> nya dan isi dengan script berikut.
``` js
var app = new Vue({
	el:'#app',
	data:{
		pesan: 'Hello Vue.js!'
	}
})
```
Dari kode diatas, kata <b>el</b> (element) merupakan pengaitan <b>'#app'</b> yang merujuk pada tag div yang ber-id 'app' pada file index.html yang sebelumnya telah kita buat. Sedangkan data merupakan instansiasi data pada vue, yang dapat ditampilkan ke view. Untuk menampilkan datanya, vue memiliki beberapa cara yaitu, mustaches, directive v-text, dan directive v-html.

## 2.3. Mustaches
Mustaches merupakan cara menampilkan data pada vue dengan memanggil variabel datanya dan meletakkannya dalam kurung kurawal ganda. Jadi sudah paham kenapa dinamai dengan mustaches? :smiley: 
## 2.4. Berkenalan dengan v-text
sadasd
## 2.5. Format Tampilan dengan V-html
sadasdsa
## 2.6. Show Multidata
sadasd
## 2.7. Kombinasi Output
sadsad
## 2.8. Directive Rendering Tipe data lain
sdaa
another page