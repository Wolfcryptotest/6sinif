// Konu videoları: VIDEO[konuId] = YouTube kimliği ya da [[etiket, kimlik], ...]
window.VIDEO = Object.assign(window.VIDEO || {}, {
  t1: "lrFXVqt68no", t2: "umpdkOOcowc", t3: "5JLDVLkaSHI", t4: "0K9vCBwZ_AA", t5: "ZBPikG2gag0", t6: "ATprhQmXNrU", t7: "8OWjO-2nbuU", t8: "pJ3o7fkLcKU",
  t9: "7ubgbM3sIHY", t10: "FkpodhAxXig", t11: "b4RjM1sVRfs", t12: "NLBME7rkR10", t13: "RtoUnpm6w88", t14: "NSLEK9Xs_Vs", t15: "cq2DdMIYATM", t16: "PVoOr3NogDc",
  t17: "b_oWgViX1wA", m1: "EOctM6EJDbQ", m2: "ayfKPmifTFY", m3: "ntGvmIsI1ig", m4: "GyQ07l8ovtg", m5: "h_YLtUIkrf0", m6: "GnmtqI2dRP0", m7: "VESL6jYxtK4",
  m8: "dLHhWLEO__E", m9: "9hf-AlwALbY", m10: "D0D9YIqIl-s", m11: "GoFjayhvzJA", m12: "TgHCzwZDJi4", m13: "yNS3FU3a2CE", m14: "ada8_hMFZNk", m15: "XXWj_vRxv6k",
  m16: "5R5Icrzvy8I", m17: "wUgr_sIGvFk", m18: "ir-Q13e7rAg", m19: "MpeO4b8FXrY", m20: "qHqYskVwuy8", m21: "FF-_Lc_ivsY", m22: "5KZ4awDAYOA", h1: "07Xtwh_4lX8",
  h2: "d2YRa-ZUBfY", h3: "y06tubao3Og", h4: "QLGCUUCKsTo", h5: "PI71wcWp0ys", h6: "VpoyiYCE6YE", h7: "wggpbX6CNnk", h8: "L-NUzYX_XnI", h9: "ghZHHhPbPYQ",
  h10: "uBuQSX6HGbI", h11: "ovu1OvxmNBw", h12: "8JMAo2m-Iho", h13: "ytSG5O7YwTM", e1: "6D0Hz6-S9Ys", e2: "6eUkFa4wC8I", e3: "-DyVN_3WEVw", e4: "nvMZHVW_9OM",
  e5: "NGJwf4iRYs4", e6: "fIaY_LWBBg8", e7: "BcnboBYy-tA", e8: "GGVMFUZUu-k", e9: "GGVMFUZUu-k", e10: "lD3BhvE7s2I", e11: "lD3BhvE7s2I", e12: "FqoLt9hK48k",
  e13: "RoghNRL9sPc", e14: "1c1N_QNJ12U", e15: "LqEjVDgs-ms"
});
Object.values(window.DERS).forEach((d) => d.temalar.forEach((t) => t.konular.forEach((k) => { if (window.VIDEO[k.id]) k.video = window.VIDEO[k.id]; })));
