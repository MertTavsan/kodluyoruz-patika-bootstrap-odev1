var isim = prompt("Adınız nedir?");
document.getElementById("myName").innerHTML=isim;
function haftaninGunleriniAl(gun) {
  let gunler = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

  return gunler[gun];
}
function showTime(){
        
 var tarih=new Date();
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	   
        document.getElementById("myClock").innerHTML=saat+":"+dakika+":"+saniye+" "+haftaninGunleriniAl(gun);

}
showTime();