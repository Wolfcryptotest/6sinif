// 🎬 Seçmeli dersler: videosu olmayan konulara konu videoları (var olan videolar değişmez)
(function(){
const V={
om_m1a:"1KMXhfCWIbw",om_m1b:"_vWHsLLwNmc",om_m2a:"iFMGz8Ahc1U",om_m2b:"FdjjfNQ1-Vk",
ok_k1a:"52sd4RagC5U",ok_k1b:"bmpBJLdB1vY",ok_k2a:"8pmuYRhEzE0",ok_k2b:"QSotoSNFpzc",
ot_t1a:"gjhR7g7xdSk",ot_t1b:"0mO_JrlOjjU",ot_t2a:"Iet0wwagRA8",ot_t2b:"kPiwFA2KIBI",
omu_1a:"JM7SSDsflxk",omu_2a:"U4LAItAop7k",omu_2b:"tybIRh1swWQ",
ofu_1a:"caPcp1h8YGs",ofu_1b:"jQZtU95V46Q",ofu_2a:"H92uFULwTd8",
oo_o1a:"YNgJhMJVT00",oo_o1b:"HhZpkCxya44",oo_o2a:"-Nns0QH2T4w",
oy_y1a:"QB0AdDl7pT0",oy_y1b:"JSZ64CpkKtI",oy_y2a:"npS7EO-fAW8",
oa_a1a:"6480t7Y_Hl4",oa_a2a:"pvrpzEBmGPs",oa_a2b:"m7DQRD62Vj8",
osa_1a:"doEIhQun54I",osa_1b:"RsoRZOxcrHg",osa_2a:"FI1qOBGIEKA",osa_2b:"lxsB-4jT2tA",
lp1a:"bPkdVhgE5uE",lp1b:"Een35UmSOY0",lp1c:"7MP_N4Kr8_0",
ls1a:"hEM23314MDg",ls1b:"aVAOJSDMxag",ls1c:"fnoMDRT0kpo",
lm1a:"xvifLtTNCL8",lm1b:"fdzU6DP91K4",lm2a:"vMQF-ThHdo4",
la1a:"a3RqKNfqLA0",la1b:"dDVj3mn5w6s",la1c:"fZLDgoZlZtk",
lst1a:"SGaLBqGOh7U",lst1b:"EgN4LQ1_nwc",
lsy1a:"w_zrSpYBi-w",lsy2a:"chgEL6HAXww"
};
try{for(const [dk,d] of Object.entries(ICERIK)){if(!/^s_/.test(dk))continue;for(const u of d.uniteler||[])for(const k of u.konular||[])if(!k.video&&V[k.id])k.video=V[k.id];}}catch(e){}
})();
