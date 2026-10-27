// Konu videoları: tonguç 1. SINIF YouTube kanalı. Değer: kimlik ya da [[etiket, kimlik], ...]
window.VIDEO = {
  s1: [["a sesi", "H5Lbo0baTNo"], ["n sesi", "v4lXC97TsBY"], ["e sesi", "PqQMOpNRlKk"]], s2: [["t sesi", "7egtXVRCi9E"], ["i sesi", "MxkHsll1q6k"], ["l sesi", "zWJW3v1Z3wk"]],
  s3: [["o sesi", "fPMrHLMG61M"], ["k sesi", "rZfTNKRoVy4"], ["u sesi", "0RBMthaX-Dw"]], s4: [["r sesi", "upm4iI-xNnI"], ["ı sesi", "WFV8GIrhm6s"], ["m sesi", "XZhtMj6wNQA"]],
  s5: [["ü sesi", "W-JpLmlDJPc"], ["s sesi", "cgI7Y3yEX30"], ["ö sesi", "UPHEhaPb4go"]], s6: [["y sesi", "k08AF4-wvjk"], ["d sesi", "16nRyUbpvgo"], ["z sesi", "oDZd016nS8Q"]],
  s7: [["ç sesi", "xabwgGRiGuE"], ["b sesi", "ioZh4GYGU4g"], ["g sesi", "64yfntKVEx0"]], s8: [["c sesi", "P9ejZj9GlUA"], ["ş sesi", "tpLEkedAuWE"]],
  s9: [["p sesi", "NFVrf6tfDQY"], ["h sesi", "SCLs2oErcsQ"], ["v sesi", "eWcKgQshf-o"]], s10: [["ğ sesi", "F-GTBeFG3Mc"], ["f sesi", "SrqzSgYZyQ8"], ["j sesi", "hHcPuTfUQFI"]],
  t1: "qkavTc5pKqQ", t2: "QIhq-9qj0Mw", t3: "L8r9GqaCesY", t4: "laJhxt_x1gw", t5: "HsKDXnAXlg4", t6: "N4VOoXnBwXA",
  m1: "pdsH7q45Axc", m2: "TqNoZx9k7pc", m3: "fjTNmhIBpZ4", m4: "E9elzurEWEI", m5: "cXxKjeJtM8U", m6: "Vyj4wdqkxZ8", m7: "2mR3EmwajXA", m8: "GrJb_I8vfyg", m9: "gKJv2A7geOw", m10: "GOuxGcDnpNY", m11: "EWwOe47VWLg", m12: "biSDHHNEI-U", m13: "OoH_j4Q-C_w", m14: "-335AukT7n4", m15: "cAXSpHrlH2o", m16: "NxfO4He1rPI",
  h1: "WweyE22sXRg", h2: "rnYBSGDm0gc", h3: "w9CE8AfTDGI", h4: "Cdbsw4x9Dyk", h5: "3dFP2k_-Icw", h6: "hALiq65eDsg", h7: "mOm_rOLidgQ", h8: "eZ78MAaOiEI", h9: "2R9IIPPlmzI", h10: "V5DQFTpwJho", h11: "PWzv9F9_nn4", h12: "0FFxkiN9wQI", h14: "skqwQPB3BgU", h15: "rsXPa_ktgUU", h16: "iUFmxfFhOgY"
};
Object.values(window.DERS).forEach((d) => d.temalar.forEach((t) => t.konular.forEach((k) => { if (window.VIDEO[k.id]) k.video = window.VIDEO[k.id]; })));
