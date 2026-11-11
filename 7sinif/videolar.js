// 🎬 7. sınıf: videosu olmayan konulara konu anlatım videoları (var olan videolar değişmez)
(function(){
const V={
m4k1:"njkvbHjwhJc",m5k2:"9czsGxmvKGE",m5k3:"qgRdUEIqbzk",m7k1:"uuJ5wKfomhw",m9k1:"-wCXt25_OG0",
f3k1:"92jxdJ64BXc",f3k2:"lZqS3HtSqck",f3k3:"9TUVivnRyz4",f3k4:"IBFX2DPDIyY",f6k1:"vo8HyqyxwT0",f7k1:"D0NUouDN230",f7k2:"xinT6Em97S8",
en1k2:"DR3zUVMb3fI",en2k1:"dZEFWlytBTE",en2k2:"jCpG2F81rSM",en3k2:"toYI-UQuSqA",en4k2:"CA2hvmVJa04",en5k2:"PHP3N0jrV3Y",en6k2:"J_isGwapXf4",
en9k1:"LqEjVDgs-ms",en9k2:"YVIdJtPRMnw",en9k3:"Bj_zO0vDfcw",en9k4:"fhWCQ_8II1M",en9k5:"h1ldcOuDlTc",en9k6:"XueCy-LcOUM",en9k7:"M8tckUyhLG0",
en9k8:"0nNJUtFeBWU",en9k9:"YmrPofPYg1Y",en9k10:"yZShB7bi5Jc",en9k11:"cv8Ewi3lVa4",en9k12:"0dMf0ysBzUY",en9k13:"5UhYMQi5YXE",en9k14:"GGFG47TPsSM",
en9k15:"RFYQ_7k21L0",en9k16:"tu7ErxmrZbA",en9k17:"WuS6HRBtDqc",en9k18:"XPAXI6h3un8",en9k19:"f7U4UW2BAvE",
s3k4:"PXHSJ02BCPE",s4k3:"BCiOh0EZde0",s5k2:"W3k_3SUq-mA",s6k2:"__Ftm1TDUqE",
d2k3:"ke5Tfpp32TE",d3k2:"d_L__dKti0M",d4k2:"hJrwO2InM5k",d4k3:"1iaszartNR4",d5k1:"RbV8Jyu7Drg",d5k2:"7yDA7vI9sww"
};
try{for(const d of Object.values(ICERIK))for(const u of d.uniteler||[])for(const k of u.konular||[])if(!k.video&&V[k.id])k.video=V[k.id];}catch(e){}
})();
