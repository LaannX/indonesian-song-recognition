// ═══════════════════════ DATA LAGU ═══════════════════════
const songs = [
  {
    id: 1,
    title: "Gundul-Gundul Pacul",
    region: "Jawa Tengah",
    island: "jawa",
    composer: "Sunan Kalijaga (R. Mas Syahid) & R.C. Hardjosubroto",
    year: "abad ke-15",
    image: "asset/images/gundul-pacul.png",
    description:
      "Lagu dolanan anak Jawa Tengah yang mengandung petuah para Wali Songo tentang kepemimpinan dan tanggung jawab.",
    color: "#FFD000",
    emoji: "🌾",
    lyrics: `Gundul-gundul pacul cul
Gembelengan
Nyunggi-nyunggi wakul kul
Gembelengan

Wakul ngglimpang
Segane dadi sak latar
Wakul ngglimpang
Segane dadi sak latar

(Artinya:)
Kepala gundul, cangkul, cangkul
Bergoyang (sombong/tidak hati-hati)
Menggendong bakul, bakul
Bergoyang (sombong/tidak hati-hati)

Bakul terjatuh
Nasinya tumpah ke seluruh halaman
Bakul terjatuh
Nasinya tumpah ke seluruh halaman

Makna: Lagu ini merupakan sindiran kepada pemimpin yang sombong dan tidak bertanggung jawab. Seorang pemimpin (kepala/gundul) yang tidak menjaga amanah rakyat (wakul/bakul = rakyat) maka nasib rakyat akan menderita (nasi tumpah ke seluruh halaman).`,
  },
  {
    id: 2,
    title: "Lir-Ilir",
    region: "Jawa Tengah",
    island: "jawa",
    composer: "Sunan Kalijaga (R. Mas Syahid)",
    year: "abad ke-15",
    image: "asset/images/lir-ilir.png",
    description:
      "Tembang macapat karya Sunan Kalijaga yang sarat dengan nilai-nilai spiritual Islam dan ajaran moral untuk umat manusia.",
    color: "#1DB85C",
    emoji: "🌱",
    lyrics: `Lir-ilir, lir-ilir
Tandure wus sumilir
Tak ijo royo-royo
Tak sengguh temanten anyar

Cah angon, cah angon
Penekno blimbing kuwi
Lunyu-lunyu penekno
Kanggo mbasuh dodotiro

Dodotiro, dodotiro
Kumitir bedhah ing pinggir
Dondomana, jlumatana
Kanggo seba mengko sore

Mumpung padhang rembulane
Mumpung jembar kalangane
Yo surako surak iyo!

(Artinya:)
Bangunlah, bangunlah
Tanaman sudah bertunas
Warnanya hijau royo-royo
Bak pengantin baru

Anak gembala, anak gembala
Panjatlah pohon belimbing itu
Meskipun licin tetap panjatlah
Untuk mencuci bajumu

Bajumu, bajumu
Sudah koyak di tepinya
Jahitlah, perbaikilah
Untuk menghadap nanti sore

Selagi terang rembulan
Selagi luas kesempatan
Ayo bersorak, sorak iya!

Makna: Lagu ini merupakan ajakan untuk bangkit dari kemalasan dan memperbaiki diri secara spiritual, mempersiapkan diri menghadap Sang Pencipta dengan amal baik.`,
  },
  {
    id: 3,
    title: "Ampar-Ampar Pisang",
    region: "Kalimantan Selatan",
    island: "kalimantan",
    composer: "Hamiedan AC",
    year: "1950-an",
    image: "asset/images/ampar-pisang.png",
    description:
      "Lagu daerah Banjar dari Kalimantan Selatan yang menggambarkan kebiasaan menjemur pisang dan kehidupan anak-anak di tepi sungai.",
    color: "#FFD000",
    emoji: "🍌",
    lyrics: `Ampar ampar pisang
Pisangku belum masak
Masak bigi dua tiga
Masak bigi dua tiga

Mangkuk laici
Bawa kawan bawa kawan
Nang mana bunyi burung
Kakan kakan

Ampar ampar pisang
Pisangku belum masak
Masak sabigi dua tiga
Masak sabigi dua tiga

Pukul batis kena tangga
Tangga di bawah
Pukul batis kena tangga
Tangga di bawah

Ampar-ampar pisang...

(Artinya dalam bahasa Indonesia:)
Jemur jemur pisang
Pisangku belum matang
Matang sebiji dua tiga
Matang sebiji dua tiga

Mangga dan leci
Dibawa kawan-kawan
Di mana suara burung
Kak-kak (bunyi burung)

Makna: Lagu ini menggambarkan aktivitas sehari-hari anak-anak Banjar yang menjemur pisang untuk dibuat makanan. Lagu ini juga mengandung pesan kebersamaan dan keceriaan masa kanak-kanak di tepi sungai Kalimantan.`,
  },
  {
    id: 4,
    title: "Bungong Jeumpa",
    region: "Aceh",
    island: "sumatra",
    composer: "Anonim (Lagu Rakyat Aceh)",
    year: "Tradisional",
    image: "asset/images/bungong-jeumpa.png",
    description:
      "Lagu kebanggaan masyarakat Aceh yang menceritakan keindahan bunga cempaka (jeumpa) sebagai simbol keanggunan dan keharuman budaya Aceh.",
    color: "#E63329",
    emoji: "🌸",
    lyrics: `Bungong jeumpa bungong jeumpa
Meugah di Aceh
Bungong teuleubeh teuleubeh
Indah lagoina

Bungong jeumpa bungong jeumpa
Puteh kuneng
Meujampu mirah ija
Keumang bak ruroh

Bek ta-anggap bek ta-anggap
Bungong nan nyan meugah
Oh bak geutanyoe bak geutanyoe
Teuingat selama

Bungong jeumpa bungong jeumpa
Harom bau nyan
Bak geutanyoe geutanyoe
Uroe malem

(Artinya:)
Bunga cempaka, bunga cempaka
Termasyhur di Aceh
Bunga yang melebihi semua
Indah parasnya

Bunga cempaka, bunga cempaka
Putih kuning
Berbaur merah
Semerbak harum

Janganlah kita anggap remeh
Bunga yang terkenal itu
Bagi kita semua
Diingat selama-lamanya

Bunga cempaka, bunga cempaka
Harum semerbak
Bagi kita semua
Siang dan malam

Makna: Lagu ini merupakan pujian terhadap bunga cempaka (jeumpa) sebagai simbol keindahan, keharuman, dan keagungan tanah Aceh. Lagu ini sering dinyanyikan dalam upacara adat dan perayaan budaya Aceh.`,
  },
  {
    id: 5,
    title: "Apuse",
    region: "Papua",
    island: "papua",
    composer: "Anonim (Lagu Rakyat Biak)",
    year: "Tradisional",
    image: "asset/images/apuse.png",
    description:
      "Lagu perpisahan yang menyentuh dari tanah Papua, mengisahkan seorang cucu yang berpamitan kepada kakek-neneknya untuk merantau jauh.",
    color: "#1A3FBF",
    emoji: "🌊",
    lyrics: `Apuse kokon dao
Yarabe soren doreri
Wuf lenso bani nema
Bani nema yoku

Apuse kokon dao
Yarabe soren doreri
Wuf lenso bani nema
Bani nema yoku

Arafabye aswarakwar
Arafabye aswarakwar

(Artinya dalam bahasa Indonesia:)
Kakek-nenek, aku pergi dulu
Ke tanah seberang, tempat yang jauh
Aku melambaikan sapu tangan tanda perpisahan
Tanda perpisahan kepadamu

Kakek-nenek, aku pergi dulu
Ke tanah seberang, tempat yang jauh  
Aku melambaikan sapu tangan tanda perpisahan
Tanda perpisahan kepadamu

Jauh, jauh sekali
Jauh, jauh sekali

Makna: "Apuse" berasal dari bahasa Biak yang berarti kakek-nenek. Lagu ini menggambarkan perasaan haru dan sedih seorang cucu yang harus meninggalkan kampung halamannya untuk merantau ke tanah yang jauh. Lagu ini mencerminkan nilai kasih sayang keluarga dan rasa rindu akan kampung halaman yang kuat dalam budaya Papua.`,
  },
  {
    id: 6,
    title: "Rasa Sayange",
    region: "Maluku",
    island: "maluku",
    composer: "Anonim (Lagu Rakyat Maluku)",
    year: "Tradisional",
    image: "asset/images/rasa-sayange.png",
    description:
      "Lagu rakyat Maluku yang paling dikenal dan menjadi simbol persahabatan, cinta kasih, dan kegembiraan masyarakat kepulauan rempah.",
    color: "#1DB85C",
    emoji: "💙",
    lyrics: `Rasa sayange rasa sayang sayange
He lihat nona dari jauh rasa sayang sayange

Kalau ada sumur di ladang
Boleh kita menumpang mandi
Kalau ada umur yang panjang
Boleh kita bertemu lagi

Rasa sayange rasa sayang sayange
He lihat nona dari jauh rasa sayang sayange

Mana kancil akan ku kejar
Masuk hutan lari-lari
Mana mungkin kan ku anggap
Anak orang ku sayang sendiri

Rasa sayange rasa sayang sayange
He lihat nona dari jauh rasa sayang sayange

Anak ayam turun sepuluh
Mati satu tinggal sembilan
Tuntut ilmu bersungguh-sungguh
Satu saat pasti berguna

Rasa sayange rasa sayang sayange
He lihat nona dari jauh rasa sayang sayange

Makna: Lagu ini merupakan ungkapan rasa cinta dan kasih sayang kepada sesama. "Rasa sayange" secara harfiah berarti "rasa cinta/kasih sayang". Lagu ini mengandung pesan tentang persaudaraan, harapan untuk bertemu kembali, dan pentingnya menuntut ilmu. Lagu ini telah menjadi identitas budaya Maluku yang diakui secara nasional.`,
  },
  {
    id: 7,
    title: "Manuk Dadali",
    region: "Jawa Barat",
    island: "jawa",
    composer: "Sambas Mangundikarta",
    year: "1963",
    image: "asset/images/manuk-dadali.png",
    description:
      "Lagu Sunda yang mengagungkan elang (manuk dadali) sebagai simbol keberanian, kebebasan, dan semangat juang rakyat Jawa Barat.",
    color: "#E63329",
    emoji: "🦅",
    lyrics: `Mesat ngapung luhur jauh di awang-awang
Meberkeun jangjangna bangun nu keur ngayang
Sukuna rangeuy dina mega meulah mega
Batan kapidara mending hiber Ka jauhna

Saha anu boga matak pikasieuneun
Elang perkasa siga nu ngahaneutan
Manuk dadali manuk panggagahna
Perlambang sakti Indonesia Jaya

Manuk dadali pangkakoncaranana
Ngandung siloka sinatria nu utama
Digjaya perkosa bisa ngalayang
Mikagungkeun salira tanah air urang

(Artinya:)
Terbang tinggi jauh di awang-awang
Mengembangkan sayapnya bagaikan sedang melayang
Cakarnya menembus awan membelah awan
Daripada takut lebih baik terbang ke kejauhan

Siapa yang punya yang membuatnya ditakuti
Elang perkasa bagaikan yang menghangatkan
Manuk dadali burung yang paling gagah
Lambang sakti Indonesia Jaya

Manuk dadali yang paling terkenal
Mengandung kiasan ksatria yang utama
Gagah perkasa bisa melayang
Mengagungkan diri tanah air kita

Makna: Lagu ini menggunakan metafora elang (manuk dadali/Garuda) untuk menggambarkan semangat nasionalisme dan kebanggaan terhadap Indonesia. Burung elang menjadi simbol keberanian dan kekuatan bangsa Indonesia.`,
  },
  {
    id: 8,
    title: "O Ina Ni Keke",
    region: "Sulawesi Utara",
    island: "sulawesi",
    composer: "Anonim (Lagu Rakyat Minahasa)",
    year: "Tradisional",
    image: "asset/images/o-ina-ni-keke.png",
    description:
      "Lagu rakyat Minahasa dari Sulawesi Utara yang bercerita tentang seorang anak yang merindukan ibunya, sarat dengan nilai kasih sayang keluarga.",
    color: "#1A3FBF",
    emoji: "🌊",
    lyrics: `O ina ni keke
Manga kumeke-keke
Di mana keke
Da rumana

O ina ni keke
Manga kumeke-keke
Di mana keke
Da rumana

Kuembah o ina
Tumangi o ina
Wia i mama
Mana da rumania

O ina ni keke
Manga kumeke-keke
Di mana keke
Da rumana

(Artinya:)
Oh ibu dari anak
Mengapa menangis
Di mana anak
Di rumah

Oh ibu dari anak
Mengapa menangis
Di mana anak
Di rumah

Aku merindukanmu ibu
Menangislah ibu
Kepada mama
Di mana rumahnya

Makna: Lagu ini menggambarkan kerinduan seorang anak kepada ibunya. Dalam budaya Minahasa, ikatan antara anak dan ibu sangat kuat. Lagu ini sering dinyanyikan untuk menggambarkan kasih sayang ibu yang tiada batas dan rasa rindu anak kepada orang tuanya.`,
  },
  {
    id: 9,
    title: "Yamko Rambe Yamko",
    region: "Papua",
    island: "papua",
    composer: "Anonim (Lagu Rakyat Papua)",
    year: "Tradisional",
    image: "asset/images/yamko-rambe-yamko.png",
    description:
      "Lagu daerah Papua dengan irama yang riang dan semangat yang memukau, menggambarkan kegembiraan dan kebebasan jiwa masyarakat Papua.",
    color: "#FFD000",
    emoji: "🌺",
    lyrics: `Hee yamko rambe yamko
Aronawa kombe
Hee yamko rambe yamko
Aronawa kombe

Teemi nokori nokori
Yamko rambe yamko
Teemi nokori nokori
Yamko rambe yamko

Honggu yahino
Honggu yahino
Honggu yahino
Honggu yahino

(Artinya Bebas dalam bahasa Indonesia:)
Hai bunga yang indah, bunga yang harum
Di tanah yang subur
Hai bunga yang indah, bunga yang harum
Di tanah yang subur

Tumbuh dan berkembang
Bunga yang indah
Tumbuh dan berkembang
Bunga yang indah

Penuh semangat
Penuh semangat
Penuh semangat
Penuh semangat

Catatan: Lagu ini menggunakan bahasa daerah Papua dan memiliki berbagai interpretasi. Secara umum, lagu ini merupakan nyanyian gembira yang menggambarkan keindahan alam Papua dan semangat hidup masyarakatnya. Ritme yang energik mencerminkan karakter masyarakat Papua yang penuh semangat dan dinamis.`,
  },
  {
    id: 10,
    title: "Sinanggar Tulo",
    region: "Sumatera Utara",
    island: "sumatra",
    composer: "Anonim (Lagu Rakyat Batak)",
    year: "Tradisional",
    image: "asset/images/sinanggar-tulo.png",
    description:
      "Lagu pergaulan tradisional Batak Toba yang penuh keceriaan, biasanya dinyanyikan saat pesta adat dan pertemuan pemuda-pemudi.",
    color: "#E63329",
    emoji: "🎭",
    lyrics: `Sinanggar tulo tulo
Sinanggar tulo tulo
Asa ninna rohamu
Asa ninna rohamu
Dang boi ninna rohamu
Dang boi ninna rohamu
Sinanggar tulo tulo
Sinanggar tulo tulo

Ai na soada do ito
Boru na denggan be
Ai na soada do ito
Boru na denggan be

Molo ro anggo ho
Molo ro anggo ho
Di huta on ate
Di huta on ate

Sinanggar tulo tulo
Sinanggar tulo tulo

(Artinya:)
Sinanggar tulo tulo
Sinanggar tulo tulo
Apa yang ada di hatimu
Apa yang ada di hatimu
Tidak bisa apa yang ada di hatimu
Tidak bisa apa yang ada di hatimu

Karena memang tidak ada, saudara
Gadis yang baik lagi
Karena memang tidak ada, saudara
Gadis yang baik lagi

Kalau kamu datang
Kalau kamu datang
Di kampung ini
Di kampung ini

Makna: Lagu ini merupakan nyanyian pergaulan pemuda-pemudi Batak yang menggambarkan suasana ceria dalam pertemuan adat. Lagu ini biasa dinyanyikan saat manortor (menari tor-tor) dalam pesta adat Batak Toba di tepi Danau Toba yang legendaris.`,
  },
  {
    id: 11,
    title: "Ayo Mama",
    region: "Maluku",
    island: "maluku",
    composer: "Anonim (Lagu Rakyat Maluku)",
    year: "Tradisional",
    image: "asset/images/ayo-mama.png",
    description:
      "Lagu rakyat Maluku yang ceria dan penuh semangat, menggambarkan keakraban hubungan antara ibu dan anak dalam kehidupan sehari-hari.",
    color: "#1DB85C",
    emoji: "🌴",
    lyrics: `Ayo mama jangan marah
Saya pergi tidak lama
Saya pergi ke sana ke sini
Mencari batu permata

Ayo mama jangan marah
Saya pergi tidak lama
Saya pergi di tepi pantai
Mencari ikan dan cangkang

Kalau kami sudah pulang
Kami bawa oleh-oleh
Buah mangga dan cengkeh
Dari kebun di sana

Ayo mama jangan marah
Saya pergi tidak lama
Nanti sore kami pulang
Membawa senyuman

Makna: Lagu ini menggambarkan kelincahan dan keceriaan anak-anak Maluku yang sering bermain di tepi pantai. Dengan nada yang riang, lagu ini juga mengandung pesan tentang kasih sayang kepada ibu dan tanggung jawab anak untuk selalu kembali ke rumah. Ini mencerminkan kehidupan sehari-hari masyarakat pesisir Maluku.`,
  },
  {
    id: 12,
    title: "Gending Sriwijaya",
    region: "Sumatera Selatan",
    island: "sumatra",
    composer: "Nungcik AR & Dahlan Mahibat",
    year: "1944",
    image: "asset/images/gending-sriwijaya.png",
    description:
      "Lagu resmi daerah Sumatera Selatan yang menceritakan kejayaan Kerajaan Sriwijaya sebagai kerajaan maritim terbesar di Asia Tenggara.",
    color: "#FFD000",
    emoji: "👑",
    lyrics: `Masa muda masa yang bercahaya
Penuh suka cita
Alam Sriwijaya di masa muda
Yang Berjaya

Sungguh elok alam Sriwijaya
Di lingkung pegunungan
Kota lama masa kejayaan
Negeri Sriwjaya

Di sinilah sang melayu berjaya
Dengan segala kemuliaan
Dengan budaya dengan tradisi
Milik bangsa mulia

Sriwijaya oh Sriwijaya
Jaya di masa lampau
Takkan lupa kami selalu
Akan jasamu

Bumi Musi bumi yang kaya
Tanahnya subur makmur
Padi menguning sawah membentang
Sungguh indah molek

(Artinya sudah dalam bahasa Indonesia)

Makna: Lagu ini merupakan himne kebanggaan masyarakat Sumatera Selatan yang mengangkat kejayaan Kerajaan Sriwijaya. Sriwijaya adalah kerajaan maritim Hindu-Buddha yang pernah menguasai perdagangan di Asia Tenggara pada abad ke-7 hingga ke-13 Masehi, berpusat di Palembang.`,
  },
  {
    id: 13,
    title: "Kicir-Kicir",
    region: "DKI Jakarta",
    island: "jawa",
    composer: "Anonim (Lagu Rakyat Betawi)",
    year: "Tradisional",
    image: "asset/images/kicir-kicir.png",
    description:
      "Lagu Betawi yang riang dan merdu, biasanya diiringi gambang kromong dan kerap dimainkan dalam pertunjukan ondel-ondel.",
    color: "#E63329",
    emoji: "🎪",
    lyrics: `Kicir-kicir ini lagunya
Lagu lama ya tuan dari Jakarta
Saya menyanyi ya tuan memang sengaja
Untuk menghibur ya tuan hati yang duka

Kicir-kicir buah kersen
Dibawa orang dari kebun
Siapa rajin ya tuan rajin bekerja
Hidupnya senang ya tuan semua tersedia

Oh ya tuan kicir-kicir
Lagu lama dari Jakarta
Kicir-kicir ini lagunya
Lagu lama ya tuan dari Jakarta

Buah semangka berdaun mentimun
Buah duku dari Palembang
Kalau ada ya tuan sudah ditentukan
Jodoh pasti ya tuan tidak akan hilang

Kicir-kicir kicir-kicir
Mari menyanyi dengan riang
Kicir-kicir lagu gembira
Betawi punya aslinya

Makna: "Kicir-kicir" adalah lagu gambang kromong khas Betawi yang menggambarkan keceriaan dan semangat hidup masyarakat Jakarta tempo dulu. Lagu ini mengandung pesan tentang ketekunan bekerja dan kepercayaan pada takdir, seiring dengan irama gambang yang riang.`,
  },
  {
    id: 14,
    title: "Sajojo",
    region: "Papua",
    island: "papua",
    composer: "Anonim (Lagu Rakyat Papua)",
    year: "Tradisional",
    image: "asset/images/sajojo.png",
    description:
      "Lagu dan tari pergaulan Papua yang energik dan menggembirakan, sering dibawakan dalam acara pesta dan penyambutan tamu.",
    color: "#1A3FBF",
    emoji: "🥁",
    lyrics: `Sajojo sajojo
Yumaisa ma yumaisa
Sajojo sajojo
Yumaisa ma yumaisa

Ema naku ye ye
Ema naku ye ye
Keke naku ye ye
Keke naku ye ye

Sajojo sajojo
Kumala kumala kumala
Sajojo sajojo
Kumala kumala kumala

Yu wena wena wena
Yu wena wena wena
Sa wena wena wena
Sa wena wena wena

(Artinya:)
Sajojo adalah nama seorang gadis cantik
Yang disenangi banyak orang
Sajojo, sajojo
Gadis yang disenangi semua orang

Ayahku, ayahku
Ibuku, ibuku
Saudaraku, saudaraku
Keluargaku, keluargaku

Mari kita bersama
Mari kita bersama
Bergembira bersama
Bergembira bersama

Makna: Lagu Sajojo adalah lagu dan tarian pergaulan dari Papua yang menggambarkan keceriaan dan persaudaraan. "Sajojo" adalah nama seorang gadis cantik yang disukai banyak pemuda. Tarian Sajojo dikenal dengan gerakannya yang dinamis, biasanya ditampilkan dalam penyambutan tamu dan perayaan budaya Papua.`,
  },
  {
    id: 15,
    title: "Suwe Ora Jamu",
    region: "Yogyakarta",
    island: "jawa",
    composer: "R.C. Hardjosubroto",
    year: "1940-an",
    image: "asset/images/suwe-ora-jamu.png",
    description:
      "Lagu dolanan Jawa yang manis berisi kerinduan terhadap seseorang yang sudah lama tidak berjumpa, dengan bahasa Jawa yang puitis.",
    color: "#1DB85C",
    emoji: "🌙",
    lyrics: `Suwe ora jamu
Jamu godhong tela
Suwe ora ketemu
Ketemu pisan gawe gela

Suwe ora jamu
Jamu godhong beluntas
Suwe ora ketemu
Ketemu pisan sumringah ati

Suwe ora jamu
Jamu godhong tela
Suwe ora ketemu
Ketemu pisan ngguyu bareng

Tak lali sira
Ora lali aku
Suwe ora ketemu
Kangen banget aku

(Artinya:)
Lama tidak minum jamu
Jamu daun singkong
Lama tidak bertemu
Bertemu sekali malah mengecewakan

Lama tidak minum jamu
Jamu daun beluntas
Lama tidak bertemu
Bertemu sekali senang hati

Lama tidak minum jamu
Jamu daun singkong
Lama tidak bertemu
Bertemu sekali tertawa bersama

Tak kulupakan dirimu
Jangan lupakan aku
Lama tidak bertemu
Sangat rinduku

Makna: Lagu ini menggambarkan kerinduan seseorang kepada sahabat atau orang yang disayangi yang sudah lama tidak bertemu. Dengan analogi minum jamu (minuman tradisional Jawa), lagu ini mengungkapkan betapa rindunya seseorang saat lama tidak berjumpa dengan orang yang dicintai.`,
  },
  {
    id: 16,
    title: "Cik Cik Periuk",
    region: "Kalimantan Barat",
    island: "kalimantan",
    composer: "Anonim (Lagu Rakyat Melayu)",
    year: "Tradisional",
    image: "asset/images/cik-cik-periuk.png",
    description:
      "Lagu anak-anak Melayu Kalimantan Barat yang lucu dan riang berisi tentang kehidupan sehari-hari dengan semangat bermain dan belajar.",
    color: "#FFD000",
    emoji: "🏡",
    lyrics: `Cik cik periuk
Periuk belanga
Isi dengan nasi
Nasi yang wangi

Cik cik periuk
Periuk belanga
Dimakan bersama
Satu keluarga

Adik berlari
Berlari ke taman
Mencari bunga
Bunga yang mekar

Ibu di dapur
Ayah di ladang
Kita semua
Kerja bersama

Cik cik periuk
Periuk belanga
Hidup bersama
Senang sentosa

(Artinya sudah dalam Bahasa Indonesia)

Makna: Lagu ini menggambarkan kehidupan harmonis sebuah keluarga di Kalimantan Barat. Dengan nada yang riang dan sederhana, lagu ini mengajarkan nilai-nilai kebersamaan, gotong royong dalam keluarga, dan keceriaan kehidupan sehari-hari masyarakat Melayu Kalimantan Barat.`,
  },
  {
    id: 17,
    title: "Tanduk Majeng",
    region: "Madura, Jawa Timur",
    island: "jawa",
    composer: "Anonim (Lagu Rakyat Madura)",
    year: "Tradisional",
    image: "asset/images/tanduk-majeng.png",
    description:
      "Lagu daerah Madura yang menggambarkan kehidupan nelayan dan semangat pria Madura dalam mengarungi lautan untuk mencari nafkah.",
    color: "#1A3FBF",
    emoji: "⛵",
    lyrics: `Tanduk majeng tanduk majeng
Lo mole lo mole
Jhalan perreng jhalan perreng
Lo mole lo mole

Mon e are mon e are
Tak lakoh bejeng
Mon e rame mon e rame
Tak lakoh bejeng

Tanduk majeng tanduk majeng
Lo mole lo mole
Jhalan perreng jhalan perreng
Lo mole lo mole

Aghi-laghi aghi-laghi
Abental omba'
Asapo' angin asapo' angin
Abental omba'

(Artinya:)
Berlayar maju, berlayar maju
Sudah pulang, sudah pulang
Berjalan terus, berjalan terus
Sudah pulang, sudah pulang

Kalau di sini, kalau di sini
Tidak berani bicara
Kalau ramai, kalau ramai
Tidak berani bicara

Berlayar maju...

Tiap hari, tiap hari
Berbantal ombak
Berselimut angin, berselimut angin
Berbantal ombak

Makna: Lagu ini menggambarkan kehidupan keras nelayan Madura yang harus merantau jauh ke laut untuk mencari nafkah. "Berbantal ombak, berselimut angin" adalah ungkapan puitis yang menggambarkan betapa keras dan berisiknya kehidupan pelaut Madura, namun mereka tetap semangat demi keluarga di kampung halaman.`,
  },
  {
    id: 18,
    title: "Gambang Suling",
    region: "Jawa Tengah",
    island: "jawa",
    composer: "Ki Nartosabdho",
    year: "1960-an",
    image: "asset/images/gambang-suling.jpg",
    description:
      "Tembang Jawa karya maestro Ki Nartosabdho yang menggambarkan keindahan musik gamelan dan suling Jawa yang mengalun syahdu di malam hari.",
    color: "#E63329",
    emoji: "🎶",
    lyrics: `Gambang suling
Kumandang swarane
Tulat tulit kumandhang swarane

Mung ngelik
Sedaling wengi
Tantangi wong kang lagi ngimpi

Tangi tangi
Konco konco padha tangi
Mbang sarat geger swara guyon

Gambang suling
Kumandang swarane
Tulat tulit kumandhang swarane

(Artinya:)
Gambang dan suling
Bergema suaranya
Tulat-tulit bergema suaranya

Hanya meraung
Sepanjang malam
Membangunkan orang yang sedang bermimpi

Bangun bangun
Teman-teman semua bangun
Ribut gembira suara gurau

Gambang dan suling
Bergema suaranya
Tulat-tulit bergema suaranya

Makna: Lagu ini menggambarkan keindahan bunyi instrumen gamelan, khususnya gambang (instrumen pukul dari kayu/bambu) dan suling (seruling bambu). Ki Nartosabdho menciptakan lagu ini sebagai penghormatan terhadap seni musik tradisional Jawa yang mengalun indah di malam hari, membangunkan semangat dan keceriaan.`,
  },
  {
    id: 19,
    title: "Kampuang nan Jauh di Mato",
    region: "Sumatera Barat",
    island: "sumatra",
    composer: "Anonim (Lagu Rakyat Minang)",
    year: "Tradisional",
    image: "asset/images/kampuang-nan-jauh.png",
    description:
      "Lagu Minangkabau yang penuh kerinduan tentang seorang perantau yang teringat kampung halamannya nan indah di Sumatera Barat.",
    color: "#1A3FBF",
    emoji: "🏔️",
    lyrics: `Kampuang nan jauh di mato
Gunuang sansai bakuliliang
Takana jo kawan-kawan
Tabayang-bayang siang malam

Kampuang nan jauh di mato
Gunuang sansai bakuliliang
Den takana jo kampuang
Di mano bakeh den basayang

Takana jo ayah jo ibu
Takana jo mamak urang-urang
Den takana jo saudaro
Induak bako di kampuang

Kampuang nan jauh di mato
Gunuang sansai bakuliliang
Kalau den pulang kampuang
Kampuang baitu indahnyo

(Artinya:)
Kampung yang jauh di mata
Gunung-gunung berjejer berkeliling
Teringat kepada kawan-kawan
Terbayang-bayang siang malam

Kampung yang jauh di mata
Gunung-gunung berjejer berkeliling
Aku teringat akan kampung
Di mana aku menyayangi

Teringat kepada ayah dan ibu
Teringat kepada mamak dan orang-orang
Aku teringat kepada saudara
Sanak famili di kampung

Kampung yang jauh di mata
Gunung-gunung berjejer berkeliling
Kalau aku pulang ke kampung
Kampung begitu indahnya

Makna: Lagu ini mengekspresikan kerinduan mendalam seorang perantau Minang kepada kampung halamannya. Budaya merantau (meninggalkan kampung untuk mencari ilmu dan kehidupan lebih baik) sangat kuat dalam adat Minangkabau, sehingga lagu ini menjadi simbol perasaan rindu yang universal bagi perantau Minang di seluruh dunia.`,
  },
  {
    id: 20,
    title: "Si Patokaan",
    region: "Sulawesi Utara",
    island: "sulawesi",
    composer: "Anonim (Lagu Rakyat Minahasa)",
    year: "Tradisional",
    image: "asset/images/si-patokaan.png",
    description:
      "Lagu rakyat Minahasa yang menyentuh hati, bercerita tentang kepergian seseorang yang dirindukan, sarat dengan perasaan kasih dan kehilangan.",
    color: "#1DB85C",
    emoji: "🌅",
    lyrics: `Si patokaan, si patokaan
Sayang disayang
Si patokaan, si patokaan
Sayang disayang

Tumeles-teles
Tumeles-teles
Ure si karore
Ure si karore

Mama, mama
O mama, mama
Sare wulahe
Sare wulahe

Si patokaan, si patokaan
Sayang disayang
Mama umahe
Mama umahe

Wulahe wulahe
Wulahe wulahe
Tumeles-teles
Tumeles-teles

(Artinya dalam Bahasa Indonesia:)
Si patokaan (sebutan sayang untuk seseorang)
Sayang disayang
Si patokaan
Sayang disayang

Pergi meninggalkan
Pergi meninggalkan
Menuju ke sana
Menuju ke sana

Ibu, ibu
Oh ibu, ibu
Sudah pergi
Sudah pergi

Makna: "Si Patokaan" adalah lagu haru yang menceritakan kepergian seseorang yang disayangi, mungkin karena kematian atau merantau jauh. Kata "patokaan" dalam bahasa Minahasa berarti "si sayang" atau panggilan kasih. Lagu ini menggambarkan kesedihan mendalam seorang ibu atau keluarga yang ditinggalkan.`,
  },
  {
    id: 21,
    title: "Bubuy Bulan",
    region: "Jawa Barat",
    island: "jawa",
    composer: "Anonim (Lagu Rakyat Sunda)",
    year: "Tradisional",
    image: "asset/images/bubuy-bulan.png",
    description:
      "Lagu Sunda yang romantis dan puitis tentang keindahan bulan dan kerinduan akan seseorang yang dicintai, diiringi melodi kacapi yang syahdu.",
    color: "#E63329",
    emoji: "🌕",
    lyrics: `Bubuy bulan
Bubuy bulan sangray bentang
Pangeuyeuk pangeuyeuk
Daun kalapa

Mulung muncang
Mulung muncang Laut kidul
Mending ngewa
Mending ngewa tibatan poho

Nimang-nimang
Nimang-nimang nu dirimang
Ngan ukur badan
Ngan ukur badan jeung panganggo

Pileuleuyan
Pileuleuyan anu manis
Muga jaga
Muga jaga urang papanggih

(Artinya:)
Memasak bulan
Memasak bulan memanggang bintang
Menenun, menenun
Daun kelapa

Memungut kemiri
Memungut kemiri di Laut Selatan
Lebih baik membenci
Lebih baik membenci daripada lupa

Mengayun-ayun
Mengayun-ayun yang diayun
Hanya badan
Hanya badan dan pakaian

Selamat tinggal
Selamat tinggal yang manis
Semoga kelak
Semoga kelak kita bertemu

Makna: Lagu Sunda yang romantis ini menggambarkan perasaan cinta yang dalam. Dengan bahasa Sunda yang puitis, lagu ini mengekspresikan lebih baik dicintai daripada dilupakan, dan harapan untuk bisa bertemu kembali dengan orang yang dicinta. Kacapi (alat musik petik Sunda) biasanya mengiringi lagu ini dengan melodi yang syahdu.`,
  },
  {
    id: 22,
    title: "Anging Mammiri",
    region: "Sulawesi Selatan",
    island: "sulawesi",
    composer: "Anonim (Lagu Rakyat Makassar)",
    year: "Tradisional",
    image: "asset/images/anging-mammiri.png",
    description:
      "Lagu daerah Makassar yang puitis, bercerita tentang angin sepoi-sepoi yang membawa pesan rindu antara dua insan yang saling mencintai.",
    color: "#1A3FBF",
    emoji: "🌬️",
    lyrics: `Anging mammiri kupasang
Pitujuku membalikan
Iyo ero inakke
Angingko mamminro

Rappokang anging ana'
Rappokang anging ana'
Pasangko sura'na
Ampikangnga ri butta lain

Anging mammiri kupasang
Kupasang pitujukku
Membalikan iyyo'na
Na manggaukan

Ri lalang kollong lontarak
Ri lalang kollong lontarak
Kutulis sura' hatiku
Mammiriki ri yero

(Artinya:)
Angin sepoi-sepoi yang kukirim
Kau bawa pesanku
Iya engkau, akulah ini
Anginlah yang membawa rindu

Bawa pesan angin anak
Bawa pesan angin anak
Sampaikan suratnya
Antarkan ke negeri lain

Angin sepoi-sepoi yang kukirim
Kukirim pesanku
Membawa berita, iya
Dan melaksanakannya

Di dalam tulisan lontarak
Di dalam tulisan lontarak
Kutulis surat hatiku
Terbawa angin sepoi

Makna: Lagu ini menggunakan metafora angin (mammiri) sebagai pembawa pesan cinta dan kerinduan. Dalam budaya Makassar, angin dianggap sebagai perantara yang membawa pesan dari satu hati ke hati yang lain. Lontarak yang disebutkan adalah aksara tradisional Bugis-Makassar, menambah nilai budaya yang mendalam pada lagu ini.`,
  },
  {
    id: 23,
    title: "Janger",
    region: "Bali",
    island: "bali-ntt",
    composer: "Anonim (Lagu Rakyat Bali)",
    year: "1920-an",
    image: "asset/images/janger.png",
    description:
      "Lagu dan tari pergaulan khas Bali yang lahir dari kesenian baris dan bedanya. Janger menggambarkan kemesraan alam Bali yang menawan.",
    color: "#FFD000",
    emoji: "🌺",
    lyrics: `Mekar sari kembang turi
Njenggurung di taman puri
Janger janger janger
Janger janger janger

Tari menari di tepi pantai
Bersenang-senang semua bersama
Yong yong yong cening janger
Nyoman janger Ngurah janger

Sekaa janger ke sekaa joged
Pada ngibing di tegalan
Janger janger janger
Janger janger janger

Bunga-bunga di taman sari
Semerbak harum mewangi
Gunung Agung berdiri tegak
Bali nan indah molek

Yong yong yong cening janger
Wayan janger Made janger
Janger janger cening janger
Janger janger janger

(Artinya sebagian besar sudah dalam bahasa Indonesia)

Makna: Janger adalah kesenian pergaulan muda-mudi Bali yang berkembang di tahun 1920-an. Bentuknya adalah nyanyian dan tarian yang dilakukan secara berpasangan antara kelompok pria (kecak) dan wanita. Lagu Janger menggambarkan keceriaan anak muda Bali dalam berinteraksi di tengah keindahan alam pulau Dewata.`,
  },
  {
    id: 24,
    title: "Poco-Poco",
    region: "Sulawesi Utara",
    island: "sulawesi",
    composer: "Yopie Latul",
    year: "1995",
    image: "asset/images/poco-poco.png",
    description:
      "Lagu dan tarian kreasi modern dari Manado yang menjadi fenomena nasional dan bahkan internasional, menggambarkan semangat dan kegembiraan.",
    color: "#1DB85C",
    emoji: "💃",
    lyrics: `Poco-poco poco-poco
Mama rela mama rela
Poco-poco poco-poco
Mama rela mama rela

Ade sayang ade sayang
Jangan cemburu jangan cemburu
Ade sayang ade sayang
Jangan cemburu jangan cemburu

Poco-poco poco-poco
Goyang badan goyang badan
Poco-poco poco-poco
Goyang badan goyang badan

Beta tresna beta tresna
Sama ade sama ade
Beta tresna beta tresna
Sama ade sama ade

Poco-poco poco-poco
Mama rela mama rela
Poco-poco poco-poco
Mari menari semua

Ay ay ay ay
Poco-poco poco-poco
Ay ay ay ay
Goyang semua!

(Artinya:)
Poco-poco (nama tarian)
Mama rela (ibu merelakan)
Poco-poco
Mama rela

Adik sayang, adik sayang
Jangan cemburu
Adik sayang, adik sayang
Jangan cemburu

Aku cinta, aku cinta
Kepada adik
Aku cinta, aku cinta
Kepada adik

Makna: Poco-poco adalah lagu dan tarian kreasi dari Manado, Sulawesi Utara, yang diciptakan oleh Yopie Latul pada tahun 1995. Tarian ini kemudian menjadi fenomenal di seluruh Indonesia bahkan tercatat di berbagai rekor dunia untuk tari massal. Poco-poco menggambarkan keceriaan, persahabatan, dan semangat hidup masyarakat Sulawesi Utara.`,
  },
  {
    id: 25,
    title: "Soleram",
    region: "Riau",
    island: "sumatra",
    composer: "Anonim (Lagu Rakyat Melayu Riau)",
    year: "Tradisional",
    image: "asset/images/soleram.png",
    description:
      "Lagu rakyat Melayu Riau yang merdu, bercerita tentang kasih sayang kepada anak kecil yang cantik jelita dengan nada yang lembut dan penuh cinta.",
    color: "#E63329",
    emoji: "⭐",
    lyrics: `Soleram soleram
Soleram anak yang manis
Anak manis janganlah dicium sayang
Kalau dicium merah pipinya

Soleram soleram
Soleram anak yang manis
Satu dua tiga dan empat
Lima enam tujuh yang manis

Kalau tuan mau pergi jauh
Tinggalkan adik jangan menangis
Kalau tuan mau pergi jauh
Tinggalkan adik jangan menangis

Soleram soleram
Soleram anak yang manis
Anak manis senyum selalu
Bagai bintang di langit malam

(Artinya sudah dalam Bahasa Indonesia)

Makna: "Soleram" adalah ungkapan sayang dalam bahasa Melayu Riau untuk anak kecil yang menggemaskan. Lagu ini menggambarkan kelucuan dan kemanisan seorang anak kecil yang begitu dicintai. Lirik "kalau dicium merah pipinya" menggambarkan betapa gemesnya si orang tua kepada sang anak. Lagu ini sering dinyanyikan sebagai pengantar tidur anak.`,
  },
  {
    id: 26,
    title: "Mana Dou",
    region: "Nusa Tenggara Timur",
    island: "bali-ntt",
    composer: "Anonim (Lagu Rakyat NTT)",
    year: "Tradisional",
    image: "asset/images/mana-dou.png",
    description:
      "Lagu daerah NTT yang menggambarkan keindahan alam dan kehidupan masyarakat di kepulauan Nusa Tenggara Timur dengan melodi yang khas.",
    color: "#1A3FBF",
    emoji: "🦎",
    lyrics: `Mana dou mana dou
Ka wali randa
Mana dou mana dou
Ka wali randa

Ita nara ita nara
Nara wali dou
Ita nara ita nara
Nara wali dou

Mbaru niang mbaru niang
Niang di kampung
Mbaru niang mbaru niang
Niang di kampung

Seka seka seka
Seka wali kita
Seka seka seka
Bersama semua

(Artinya):
Di mana teman, di mana teman
Kembali ke sini
Di mana teman, di mana teman
Kembali ke sini

Kita bersama, kita bersama
Bersama kawan
Kita bersama, kita bersama
Bersama kawan

Rumah adat, rumah adat
Ada di kampung
Rumah adat, rumah adat
Ada di kampung

Bersama, bersama
Bersama kita semua
Bersama, bersama
Bersama semua

Makna: Lagu ini menggambarkan rasa kebersamaan dan persatuan masyarakat NTT. "Mbaru niang" yang disebut dalam lagu adalah rumah adat khas suku Manggarai di Flores, NTT, yang berbentuk seperti kerucut. Lagu ini juga menggambarkan keindahan alam dan kekayaan budaya kepulauan NTT.`,
  },
];

let currentFilter = "semua";
let currentSearch = "";

// ═══════════════════════ RENDER CARDS ═══════════════════════
function renderCards() {
  const grid = document.getElementById("songsGrid");
  const noRes = document.getElementById("noResults");

  let filtered = songs.filter((s) => {
    const matchFilter = currentFilter === "semua" || s.island === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.region.toLowerCase().includes(q) ||
      s.composer.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noRes.style.display = "block";
    grid.style.display = "none";
  } else {
    noRes.style.display = "none";
    grid.style.display = "grid";
    filtered.forEach((song, i) => {
      const card = createCard(song, i);
      grid.appendChild(card);
    });
    observeReveal();
  }
}

function createCard(song, index) {
  const div = document.createElement("div");
  div.className = "song-card reveal";
  div.style.transitionDelay = `${(index % 6) * 60}ms`;

  const islandColors = {
    jawa: "#1DB85C",
    sumatra: "#E63329",
    kalimantan: "#1A3FBF",
    sulawesi: "#FFD000",
    papua: "#9333ea",
    "bali-ntt": "#f97316",
    maluku: "#06b6d4",
  };
  const badgeColor = islandColors[song.island] || "#0A0A0A";
  const badgeTxt =
    song.island === "bali-ntt"
      ? "Bali & NTT"
      : song.island.charAt(0).toUpperCase() + song.island.slice(1);

  div.innerHTML = `
      <div class="card-img-wrap">
        <img src="${song.image}" alt="${song.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'"/>
        <div class="region-badge" style="background:${badgeColor}; color:${badgeColor === "#FFD000" ? "#0A0A0A" : "#fff"};">${badgeTxt}</div>
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-2 mb-3">
          <div>
            <span class="text-2xl">${song.emoji}</span>
            <h3 class="font-black text-xl leading-tight mt-1">${song.title}</h3>
          </div>
          <div class="sticker shrink-0">${song.year}</div>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <span class="text-base">📍</span>
          <span class="font-semibold text-sm">${song.region}</span>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <span class="text-base">✍️</span>
          <span class="text-sm opacity-70 font-medium">${song.composer}</span>
        </div>
        <p class="text-sm leading-relaxed opacity-80 mb-5 line-clamp-3">${song.description}</p>
        <button class="neo-btn w-full justify-center py-3 text-sm bg-black text-white" onclick="openModal(${song.id})">
          Lihat Lirik Lengkap ♩
        </button>
      </div>
    `;

  div
    .querySelector(".card-img-wrap")
    .addEventListener("click", () => openModal(song.id));
  return div;
}

// ═══════════════════════ FILTER & SEARCH ═══════════════════════
function setFilter(el, filter) {
  document
    .querySelectorAll(".filter-tab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  currentFilter = filter;
  renderCards();
}

function filterSongs() {
  currentSearch = document.getElementById("searchInput").value;
  renderCards();
}

// ═══════════════════════ MODAL ═══════════════════════
function openModal(id) {
  const song = songs.find((s) => s.id === id);
  if (!song) return;

  const box = document.getElementById("modalBox");

  const islandColors = {
    jawa: "#1DB85C",
    sumatra: "#E63329",
    kalimantan: "#1A3FBF",
    sulawesi: "#FFD000",
    papua: "#9333ea",
    "bali-ntt": "#f97316",
    maluku: "#06b6d4",
  };
  const color = islandColors[song.island] || "#0A0A0A";

  const lyricsHTML = song.lyrics
    .split("\n\n")
    .map((stanza) => {
      return `<div class="lyric-stanza"><p class="whitespace-pre-line text-sm leading-relaxed font-medium">${stanza}</p></div>`;
    })
    .join("");

  box.innerHTML = `
      <!-- HEADER -->
      <div style="background:${color}; border-bottom:3px solid #0A0A0A;" class="p-6">
        <div class="flex justify-between items-start">
          <div>
            <div class="section-eyebrow" style="background:#0A0A0A; color:${color === "#FFD000" ? "#0A0A0A" : "#F5F0E8"}; margin-bottom:8px;">${song.region}</div>
            <h2 class="text-3xl font-black leading-tight">${song.emoji} ${song.title}</h2>
          </div>
          <button class="close-btn shrink-0 ml-4" onclick="closeModal()">✕</button>
        </div>
      </div>

      <!-- IMAGE -->
      <div style="border-bottom:3px solid #0A0A0A; height:200px; overflow:hidden;">
        <img src="${song.image}" alt="${song.title}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=680&h=200&fit=crop'"/>
      </div>

      <!-- INFO -->
      <div class="p-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div class="neo-box p-3 bg-white">
            <div class="text-xs font-bold opacity-60 uppercase tracking-wider mb-1">Asal Daerah</div>
            <div class="font-bold text-sm">📍 ${song.region}</div>
          </div>
          <div class="neo-box p-3 bg-white">
            <div class="text-xs font-bold opacity-60 uppercase tracking-wider mb-1">Tahun</div>
            <div class="font-bold text-sm">📅 ${song.year}</div>
          </div>
          <div class="neo-box p-3 bg-white col-span-2 sm:col-span-1">
            <div class="text-xs font-bold opacity-60 uppercase tracking-wider mb-1">Pencipta</div>
            <div class="font-bold text-sm">✍️ ${song.composer}</div>
          </div>
        </div>

        <p class="text-sm leading-relaxed opacity-80 mb-6 p-4 neo-box" style="background:#F5F0E8;">${song.description}</p>

        <!-- LIRIK -->
        <div class="section-eyebrow mb-4">🎵 Lirik Lengkap</div>
        <div class="p-4 neo-box" style="background:#FFFDF7;">
          ${lyricsHTML}
        </div>

        <div class="mt-6 flex gap-3 flex-wrap">
          <button class="neo-btn px-5 py-2 text-sm bg-black text-white" onclick="closeModal()">← Kembali</button>
          <button class="neo-btn px-5 py-2 text-sm" style="background:${color};" onclick="copyLyrics(${song.id})">📋 Salin Lirik</button>
        </div>
      </div>
    `;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e && e.target !== document.getElementById("modalOverlay")) return;
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function copyLyrics(id) {
  const song = songs.find((s) => s.id === id);
  if (!song) return;
  const text = `${song.title}\nAsal: ${song.region}\nPencipta: ${song.composer}\n\n${song.lyrics}`;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const btn = event.target;
      btn.textContent = "✅ Tersalin!";
      setTimeout(() => (btn.textContent = "📋 Salin Lirik"), 2000);
    })
    .catch(() => alert("Gagal menyalin"));
}

// ESC key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modalOverlay").classList.remove("open");
    document.body.style.overflow = "";
  }
});

// ═══════════════════════ SCROLL REVEAL ═══════════════════════
function observeReveal() {
  const els = document.querySelectorAll(".reveal:not(.visible)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => observer.observe(el));
}

// ═══════════════════════ BACK TO TOP ═══════════════════════
window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top");
  if (window.scrollY > 400) btn.classList.add("show");
  else btn.classList.remove("show");
});

// ═══════════════════════ SMOOTH SCROLL ═══════════════════════
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ═══════════════════════ INIT ═══════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});
