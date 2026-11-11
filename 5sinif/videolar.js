// 🎬 Kelime Havuzu: videosu olmayan konulara kelime videoları (var olan videolar değişmez)
(function(){
const V={
en9k1:"LqEjVDgs-ms",en9k2:"YVIdJtPRMnw",en9k3:"Bj_zO0vDfcw",en9k4:"fhWCQ_8II1M",en9k5:"h1ldcOuDlTc",en9k6:"XueCy-LcOUM",
en9k8:"0nNJUtFeBWU",en9k9:"YmrPofPYg1Y",en9k10:"yZShB7bi5Jc",en9k11:"cv8Ewi3lVa4",en9k12:"0dMf0ysBzUY",en9k13:"5UhYMQi5YXE",en9k14:"GGFG47TPsSM",
en9k15:"RFYQ_7k21L0",en9k17:"WuS6HRBtDqc",en9k18:"XPAXI6h3un8",en9k19:"f7U4UW2BAvE"
};
try{for(const d of Object.values(ICERIK))for(const u of d.uniteler||[])for(const k of u.konular||[])if(!k.video&&V[k.id])k.video=V[k.id];}catch(e){}
})();
