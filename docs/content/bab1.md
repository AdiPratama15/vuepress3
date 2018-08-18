# 1. Selamat Datang di Dunia Vue.js
<p>
	Selama bertahun-tahun, Javascript telah memberi wana pada sebuah halaman web. Halaman web akan menjadi lebih dinamis dan powerfull. Javascript juga merupakan bahasa pemrograman web terpopuler dan mempunyai tingkat portabilitas yang baik.
</p>
<p>
	Javascript merupakan bahasa pemrograman berbasis client side. Kode Javascript akan dikirimkan dari server menuju browser untuk diolah dan tentu saja akan meninggalkan beribu-ribu baris kode yang berhubungan dengan HTML dan CSS yang bervariasi. Hal tersebut, menjadi kurang efektif dalam pengembangan aplikasi web dinamis.
</p>
<p>
	Para developer web pengguna Javascript sadar akan hal itu dan inilah yang menjadi cikal bakal dikembangkannya sebuah 'pengorganisasian'. Beberapa telah mencoba membuat hal tersebut dengan meramu Javascript menjadi beragam modul dan fungsi siap pakai. Sekarang 'pengorganisasian' tersebut lebih dikenal dengan sebutan framework Javascript.
</p>
<p>
	Saat ini terdapat banyak framework Javascript, sebut saja AngularJS, ReactJS, EmberJS, MeteorJS, Vue.js, dan lain-lain. Namun, Vue.js hadir dengan beberapa keunggulan dari framework Javascript lain, diantaranya:
	<ul>
		<li>
			<b>Approachable</b> (pendekatan yang mudah, cukup dengan menguasai dasar HTML, CSS, dan Javascript)
		</li>
		<li>
			<b>Maintainable</b> (pemeliharaan yang mudah)
		</li>
		<li>
			<b>Versatile</b> (serba guna, terdapat banyak library dan fitur yang lengkap)
		</li>
		<li>
			<b>Reactive</b> (terhadap perubahan data)
		</li>
		<li>
			<b>Performant</b> (dengan ukuran kecil menghasilkan performa yang cepat)
		</li>
		<li>
			<b>Testable</b> (pengujian yang relatif mudah)
		</li>
	</ul>
</p>
<p>
	Selain itu, Vue.js juga menyediakan antarmuka Vue CLI agar dapat mengembangkan website dengan lebih mudah dan cepat.
</p>
<p>
	Tingkat popularitas Vue.js terus merambat naik dari waktu ke waktu. Berikut ini merupakan data hasil survey yang dilakukan oleh <a href="https://stateofjs.com/2017/front-end/results/" target="_blank">StateOfJS</a> tahun 2017.
</p>
<a target="_blank" :href="$withBase('/image/survey.JPG')">
  <img :src="$withBase('/image/survey.JPG')" alt="survey StateOfJS"/>
</a>

Selamat datang di dunia Vue.js kawan, ini langkah pertama kita dalam menguasai dan mempelajari salah satu framework Javascript terbaik dan terpopuler saat ini. Semoga bermanfaat :smile: :smile: :smile:

## 1.1. Apa itu Vue.js
<p>
	Vue (dibaca:vyuu atau viuu) merupakan sebuah framework Javascript progresif yang digunakan untuk membangun tampilan user interface. Difokuskan hanya pada view layer dan sangat mudah diimplementasikan dan diintegrasikan dengan library lain ataupun juga dengan project yang sudah ada sebelumnya.
</p>
<p>
	VueJS merupakan proyek open-source dengan lisensi MIT yang diciptakan oleh Evan You pada bulan Februari 2014, setelah sebelumnya dia bekerja untuk Google dalam proyek AngularJS yang merupakan merupakan framework Javascript besutan Google. Sehingga, banyak konsep dalam AngularJS yang diadaptasi oleh VueJS, misalnya konsep expression dan directive. 
</p>


## 1.2. Apa saja yang dibutuhkan
1. PC/Laptop :computer: :100:
2. Niat untuk belajar :smiley:
3. Waktu :alarm_clock:
4. Aplikasi Browser (Google Chrome atau Mozilla Firefox, dll)
5. Text Editor (SublimeText, Komodo Edit, Brackets, Atom, Microsoft Visual Code, dll)
6. Sedikit koneksi internet (untuk mendownload atau menginstall Vue)
7. Siap? Mantap Gan !!! :+1:

## 1.3. Installasi Vue.js

Untuk dapat menggunakan Vue.js, cara yang paling mudah adalah dengan membuat file index.html, kemudian meng-include-kan Vue ke dalamnya. Ada beberapa cara untuk meng-include-kan Vue, diantaranya:

1. Jika komputer Anda terhubung ke internet, dapat menggunakan via CDN dengan menerapkan include langsung pada tag script pada file index.html
	``` html
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	```
2. Selain melalui via CDN, dapat dengan menggunakan VueJS via unpkg.
	``` html
	<script src="https://unpkg.com/vue"></script>
	```
3. Namun jika Anda ingin komputer tidak terhubung internet, ada alternatif lain yaitu dengan mendownload terlebih dahulu file VueJS.
<ul>
	<li>
		Unduh file vue di <a href="https://vuejs.org/js/vue.min.js" target="_blank">https://vuejs.org/js/vue.min.js</a>
	</li>
	<li>
		Simpan file <b>vue.min.js</b> pada folder yang sama dengan letak file <b>index.html</b>
	</li>
	<li>
		Melakukan include pda tag script pada file <b>index.html</b>
	</li>
</ul>
	``` html
	//posisi file pada index.html
	<script src="vue.min.js"></script>
	```

::: tip Hanya sebuah informasi 
Pada pembelajaran website ini, penulisan script vue, mengacu pada cara Nomor 3, yaitu file vue.min.js di download terlebih dahulu, karena diharapkan walaupun tanpa koneksi internet, proses koding akan selalu berjalan.
:::