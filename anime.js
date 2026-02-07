function optimizeCloudinary(url, width = 800) {
  return url.replace(
    "/image/upload/",
    `/image/upload/w_${width},q_auto,f_auto/`
  );
}

// 🔹 STEP 1: YAHAN SIRF IMAGE LINKS ADD KARO
const images = [
 // add links...
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311481/fe6d495b-ea81-4ed6-b8c2-fbcf94a6f228_czb7vg.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311481/b08cf6ff-c1b5-4cf9-b7f4-ab6f1ca05730_iqvxxj.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311480/18818253-28ca-4d15-a7e5-4fed77e06ce4_oayzka.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311480/f9652366-26cd-46cd-85f2-4b1c14f5817b_szopiz.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311480/09b5f07b-33fa-4d4f-9696-60601d3ca57d_i3ujiw.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311480/b61c379a-1311-459a-becf-85c5fdf25793_yxnepq.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311479/c6925c16-df61-4b7d-a4c8-bc8396f8e10a_x0yhwm.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311479/068dfd8a-7983-4f49-bf54-c72c239e3ea6_hietfp.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311479/6f37c6d4-b1e7-421b-93fa-7eba47391a50_wsswki.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311465/dc187fba-7155-448d-8ea8-c42d5e7b2d03_rz2qvo.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311465/dd1ea6775007d957700d78a322a4802b_ttw6ai.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311465/f3833bb9-c09f-40ae-8897-39dd555bdc23_wr8l2c.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311464/471569612c07bc8a7019499c3bc88a25_lafl3m.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311454/dbd73c3958d015b1e4b154bdf83f80b8_yqxjhh.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311452/19618b1a65748eda57802ab620bb6da3_khc7bu.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311451/8438881a73f9ade99df93652e17ba4cc_r65tkl.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311450/2f5afaae7240baa0d5b70e606b911e59_jnokpr.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311449/cf94d6158075673b8d06e09c950a2bb3_e710lp.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311449/66c1e9f3dcee2a2f59497feccd76b4c9_zgqsap.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311444/63cdbb2674fa3023ba21c4e3e3a4bcce_ccweis.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311433/bf8b20c09d13b59afca80d198311b6d2_vci8fj.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311432/d5f074dc4f78b57364eb3ff423d73177_hoiwii.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311432/746927b732ad421bc648fa9dd4f9dec2_a8wsoq.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311431/f9c29ad8-ef06-481f-8209-6fbaa014ced9_qgzvtc.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311431/4ed3d4dfa9f37f2c15d19cec281898c6_ma6qhz.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311431/6ecf876974d6536fcefcb96fc6c8ab30_fk3thc.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311431/3025b04af8d33900bd8a4defa3727ac5_o3zczq.jpg",
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311431/3e8cc8c0-e4fa-4c5b-bff4-42c0c7b21600_cfmfaj.jpg",
   "https://res.cloudinary.com/dvypkvftc/image/upload/v1770311430/900993ff-86ef-462a-bf51-eddf13317575_cbgsoc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311413/5c6de7c6-fa76-4d19-9e39-0766067b2836_sps8yh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311412/86bd1035-cf21-44d6-85e9-f23313933ed2_tx24eo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311412/4fbd557b-d1ce-423b-a38b-cfdfd94d6f04_q9k18o.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311412/a6f6137b-ac39-4867-8d84-e216b3b58470_o92jve.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311411/4f357692-f939-4176-9f3d-7f130432cfff_js7cr5.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311411/aea8b83f-ace0-4045-93b6-8657fecd245b_veobq2.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311411/2cfae60c-7635-48bb-9fe1-0ef52ce215b3_mrchou.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311410/67fdefe3-872f-4573-97f9-825d9fd7ef9a_caulg7.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311410/fe22a1b4-09c5-4419-95a1-2b280bc28eab_m8nvax.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311410/46a8a4e0-5d2d-4cb9-9ccf-b9e0480e3aa2_vjxv95.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311409/4ba2e951-7336-42ae-b2a1-10109b9f1ed7_qfusos.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311410/cfed05b3-6b8b-41f7-abeb-8b1a0526285a_xu7j60.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311409/2b5e7b3c-e54a-4225-9ed2-e198e4fc0ad2_iu11fk.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311409/738e2d7e-baab-45cc-89f5-6c63cf585d2e_tpgwht.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311391/5fa090f5-1d8c-4b39-8af4-fbb1da23e07a_scdqa4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311391/ca1b8f4e-b5fb-4edc-8d1b-394ffd9e1d2a_wvknup.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311390/11189eb0b1f5a15deb132c2a8dc53610_vokem7.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311390/e3f963b4-1f34-4fb7-86b2-29c6c0d1707d_rn4d5j.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311390/2ab6dee4-048f-45b7-a029-7826545b5dfb_aju4zp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311389/432afa931ae70e93ab17be9060c239c8_vgcvsc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311389/1b43fba06d848f9b4c8cd5f248a9b6d9_ajnrbj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311389/7d29b151de16ce25446f2dca91ff9818_mecypp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311388/b439900897cad55fa318fa4420206d5a_jrh95g.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311389/d478f5b82801b52ff864f9e59c1d7d2f_mwphvj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311388/405b0c7e6ee6bf1752aa7a5a70fec03f_lgahe0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311388/ad67fb12be080b5b516cbc1a89e0c1b6_gbgexc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311387/546dd0447239e84d5a9c0bdba3072aa1_sqh17r.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311387/cefe589308c6c1ad0368236fb75004dc_p8u4cs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311387/0949a2e6b304785baecb7b17b32afdc6_w2hsns.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311387/1f6d5938db165ce898f699cc1b8a38e3_uynefk.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311386/545a7cf48898e09f64513718dddb1930_wlhddk.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311387/ec112cc157ae93dc06986b96b3580113_lt041e.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311386/d68ce9a6ab658b69c1ddd67dd4cb4ed3_ks6ohb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311386/5393b2fd2efd7bc4a714b47b92d0180e_tvrlv2.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770311386/47064bdf0666a2b4beea49b86c73a416_h1rtwm.jpg",  

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770316308/546dd0447239e84d5a9c0bdba3072aa1_skjonk.jpg",

 "https://res.cloudinary.com/dvypkvftc/image/upload/v1770344648/56f79de6-bbdf-45dc-893f-ed8bfc9c23fe_nucgpb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344646/419a9f55f89d7bbd1fa0ce426ba9ac6d_o2zb1b.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344643/5363a658-7182-4cc9-95b2-dc2f01e55479_flbkpl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344643/bda73360-7e7c-40d9-b908-41250fdf1360_tg6tva.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344642/3052e28b-b29c-4b99-a6f6-919de560cf9f_j9ontg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344639/8901eae7726ac28b45ce1f2085a48d43_ps8nnm.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344637/6a4d0d58a66db7f25b7ef0a4dc3d3d27_oyc7uv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344634/0799b98e995842e714f8b2dbcca0612f_swgsja.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344633/0c671a37cece879f349024e969884f29_przwpl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344632/59a57b6037e675c85716c06272e2c3e5_aomuim.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344631/a24c18f1f63c58b9e37aed1fa15e8fc9_sglxwc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344630/71f0e50e0054d6df6520034d72bece19_mmio1r.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344627/7dabf25b9a72e60a492acc6438e794c2_ubjfrg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344625/20de986655004bc337b996e667e0bd16_tqecda.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344625/64906346d6e41bb7577de3fcadde05ff_lkoyhi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344623/c0d19f67852cb44fe9bdbed793141790_x3r6mn.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344621/80c9eb80b0a6cf7dc683342fdeec7653_clw8ns.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344620/007b59cf94d92d2db5a18625e2aa0ece_pekweb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344617/1fe9c2be7daaeda8cd3f20ac5603e0f6_du70rv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344612/13b7e6c0721f5313a927873753128b80_v5utqc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344613/bc73b5895d5919c6cf4805c206f7f064_zdtxqq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344612/0f6180fbed6f2dffe33a8ff7a3fcb95b_wnr2gg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344612/1101ab41e397528d8d813b426741548c_mmpkul.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344603/cb80b8f05c10a01b8922d9d1061fca39_h4phj2.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344601/655a62c6b685f500e0b69a748df537ae_tzcby3.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344602/83b99e6f887777597905493feb9bdc92_pmidcs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344601/3a58f1286fbbbc7c9ac6963a7ac629a2_wfi5ro.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344601/7254d38508101251e95f17aa75aa3c37_b7r9f0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344602/a54e7e9e566ea8b90ee44fd5309352e8_hbejtj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344601/32316541418fcb0cd52f5726ced3056f_outsam.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770344601/ee5f322d32f35c8cdd3e55fb685cf157_n6vney.jpg",
];

// 🔹 STEP 2: IS CODE KO KABHI TOUCH NAHI KARNA
//const gallery = document.getElementById("gallery");

//images.forEach((img, index) => {

  // card
 // const card = document.createElement("div");
  //card.className = "image-card";

  // image
  //const imageElement = document.createElement("img");
 // imageElement.src = img;
  //imageElement.loading = "lazy";

  // download button
 // const downloadBtn = document.createElement("button");
 // downloadBtn.className = "download-btn";
 //downloadBtn.innerText = "Download";

 // downloadBtn.onclick = () => {
  //  const a = document.createElement("a");
  //  a.href = img;
   // a.download = `wallpaper-${index+1}.jpg`;
   // document.body.appendChild(a);
 //   a.click();
  //  document.body.removeChild(a);
//  };

 // card.appendChild(imageElement);
//  card.appendChild(downloadBtn);
  //gallery.appendChild(card);
//});//

// 🔹 GALLERY ELEMENT
const gallery = document.getElementById("gallery");

// 🔹 CREATE CARDS WITH DOWNLOAD BUTTON
images.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");

  // 🌿 SMART RESPONSIVE WIDTH (YAHI ADD KARO)
  const screenWidth = window.innerWidth;
  const imgWidth = screenWidth < 600 ? 400 : 700;

  image.src = optimizeCloudinary(img, imgWidth);
  image.loading = "lazy";

  const btn = document.createElement("button");
  btn.className = "download-btn";
  btn.innerHTML = "⤓";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = optimizeCloudinary(img, 1200);
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  card.appendChild(image);
  card.appendChild(btn);
  gallery.appendChild(card);
});

// 🔹 SCROLL ANIMATION (Intersection Observer)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show"); // CSS me .show ka effect apply hoga
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});