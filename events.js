//Events (Olaylar): Bir olay gerçekleştirildiği zaman ne yapacağımız javascript yapısının yönünü belirler.

//Function Object (Fonksiyon/metot nesnesi):
var sayac = 0;
//Lambda ifadesi ile yazım (Önerilen).
var button_click1 = () => {
    sayac++;
    console.log('Lambda: Tıklandı\nSayaç:', sayac);
};

//function ifadesi ile yazım:
var button_click2 = function () { console.log('Function Name: Tıklandı'); }

//İsimlendirerek yazım: Bazı altyapılarda kabül görmemektedir.
function button_click3() { console.log('Function: Tıklandı'); }

var red = () => {
    let ps = document.getElementsByTagName('p');
    //C# foreach yerine geçer.
    for(const p of ps){
        //classList: Belirlenmiş etiketin/elementin tüm sınıflarını tutar, ekleme veya çıkarma yapılabilir.
        p.classList.add('text-danger')
    }; 
}

var green = () => {
    let prs = document.getElementsByClassName('pr');
    for (const pr of prs) {
        p.classList.add('text-ilker')
    }
}

var yellow = () => {
    let p1 = document.getElementById('p1');
    p1.classList.add('text-warning')
}