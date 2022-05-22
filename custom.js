//script sayfasının en üstüne yazılırsa global olarak tanımlanır.
/*
JavaScript Reserve Edilmiş Kelimeler: Bunları kullanmamalısınız.
abstract	else	    instanceof	switch
boolean	    enum	    int	        synchronized
break	    export	    interface	this
byte	    extends	    long	    throw
case	    false	    native	    throws
catch	    final	    new	        transient
char	    finally	    null	    true
class	    float	    package	    try
const	    for	        private	    typeof
continue	function	protected	var
debugger	goto	    public	    void
default	    if	        return	    volatile
delete	    implements	short	    while
do	        import	    static	    with
double	    in	        super

*/

//var: Yazıldığı parantezin içerisinde her yerde aynı olan değişken türüdür. Bir parantez içerisinde tanımlansa bile dışarıya bilgi verir.

//let: Sadece yazıldığı parantez içerinde tanımlanan değişken türüdür. Dışarıya bilgi vermez.

//const: Sabit değer yapısıdır. Sadece bir kez atama yapılır. Boş halde yazılmaz.

const sabit = 154;
//sabit = 1544; //Hata verecektir.

var degisken = 15
degisken = 'ilker';
degisken = "ilker'in yeri";
degisken = 15.456;
degisken = true;
console.log(degisken);
for (var i = 0; i < 3; i++) {
    let degisken = "ilker turan"
    console.log(degisken, i);
    var son = 'En son: ' + i;
}
console.log(i); //Burada kullanılabilmesi için var ile tanımlanır.
console.log(degisken);
console.log(son);
//İlkel veri tipleri: strings, numbers, booleans.
var metin1 = "ilker'in yeri";
var metin2 = 'ilker "yolunda gerek" turan';
var metin3 = `Metin1: ${metin1}, Metin2: ${metin2}`;
console.log(metin1);
console.log(metin2);
console.log(metin3);

var sayi1 = 15;
var sayi2 = 15.456;
var sayi3 = 15 / 2;
console.log(sayi1, sayi2, sayi3);

var bool1 = true;
var bool2 = false;
var atanmamis = undefined;//false
var sifir = 0; //false
var yok = null; //false
var bos = "";//false
console.log(atanmamis ? "Atanmış" : "Atanmamış");
console.log(sifir ? "Sıfır değil" : "Sıfır");
console.log(yok ? 'Var' : 'Yok');
console.log(bos ? 'Dolu' : 'Boş');

var ay1 = 'Haziran'
var ay2 = '06'
var ay3 = 6

console.log(ay1, isNaN(ay1));
console.log(ay2, parseFloat(ay2), isNaN(ay2));
console.log(ay3, isNaN(ay3));

var s1 = ' 05 15'
var s2 = 'ilker 15'
var s3 = '06ankara'
var s4 = '58 sivas'
var s5 = 15.756
var s6 = "15.756"
var s7 = "15,756"
console.log(parseFloat(s1));
console.log(parseFloat(s2));
console.log(parseFloat(s3));
console.log(parseFloat(s4));
console.log(parseInt(s5));
console.log(parseFloat(s6));
console.log(parseFloat(s7));//',' özel karakter olduğu için string olarak gördü.

//Gelişmiş Veri Tipleri:
var bos_nesne = {} //JSON (JavaScript Object Notation) object
var nesne = {
    Marka: 'Arçelik',
    Model: 'NoFrost',
    Fiyat: 25000,
    Versiyon: 1.1,
    Taksit: false,
    Lokasyon: {
        Sokak: '19.',
        Mahalle: 'Acıbadem',
        Ilce: 'Kadıköy',
        Il: 'Istanbul'
    },
    Odeme: ['KK', 'PESIN', 'SENET']
}

//Arrays: Bu koleksiyon yapılarında boyut sabit değildir, ekleme ve çıkarma yoluyla boyut değişebilir.
var bos_arr = []
var arr = [1, 3, 4.5, true, 'ilker', "turan", "elma", "armut"]

var kimlikler = [
    { isim: 'ilker', soyisim: 'turan' },
    { isim: 'ilkay', soyisim: 'turan' },
    { isim: 'büşra', soyisim: 'turan' }
]
console.log(nesne);
console.log(arr);
console.log(kimlikler);

