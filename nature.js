// 🌿 Optimize Cloudinary
function optimizeCloudinary(url, width = 800) {
  return url.replace("/image/upload/", `/image/upload/w_${width},q_auto,f_auto/`);
}

// 🌿 IMAGE LINKS
const images = [
 
  
"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375922/macos-sierra-mountain-snow-alpenglow-scenery-445_0_f-phone-4k_hvpzqh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375922/25943985d0964c533cb614ea01571dd0_muasf9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375922/7866d2a4a026df31fef6d2aec5eebcf2_sphdbo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375921/HD-wallpaper-mountains-forest-landscape-peaks-snowy_vktnap.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375920/25340_otxrov.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375362/pexels-molnartamasphotography-35248583_fmvjyq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375360/pexels-parimoofarhaan-29434105_s11wea.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375359/pexels-plantpool-images-2222972-6316615_jqioo9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375359/lake_with_reflection_of_mountain_and_clouds_4k_hd_nature-1440x2560_xrort9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375359/pexels-molnartamasphotography-27724022_r6kbzv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375359/hd-4k-nature-mountain-landscape-with-trees-and-stars-18-09-2024-1726696344_p7r8nr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375356/483e94bebca8185159a4506a6cfe9ae7_skotyq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375354/pexels-parimoofarhaan-31453863_fiffuv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375348/pexels-santiago-sauceda-gonzalez-3426899-6315943_imny5b.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375344/pexels-pavel-danilyuk-6073116_ljbpvd.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375342/pexels-dilara-uygunadimdoga-67885961-9217915_bmgo6g.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375339/pexels-parimoofarhaan-29329806_gfxdbq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375336/pexels-njeromin-19383909_tbgrpd.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375334/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwMS1vbGl2ZXJyLTI0LWpvYjU5Ny5qcGc_oyba77.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375333/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLTE0LWx1a2VzdGFja3Bvb2xlOS1jb29sLXJvYWQtZi1qb2I1ODAuanBn_ocstnc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375332/nature-phone-creek-forest-0xfhq5y76492nwku_grz2on.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375332/HD-wallpaper-nature-night_tg4dmk.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375321/490d6d4576ebdbc3d8df6d7a6ea7346f_nialhn.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375320/tropical-forest-waterfall-green-landscape-france-1080x2340-6087_zsi7kw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375318/29d64451016c48aed066ab4ed6bde19b_rlu0ss.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375318/25943985d0964c533cb614ea01571dd0_fsdcmu.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375318/wp11300451_lfbqnw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375317/green-valley-in-the-countryside-wallpaper_p7mo1f.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375057/9781b1776b6e7b2002e19ab625cb89f2_z4b4p6.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375048/fc0603b8d204e0796821b24db4705312_zitzfe.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375046/2638b9a967220526d64fa682db00e9c1_hldtax.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375045/fa0bd791deab280c3786798363a180cb_uqlcqh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375044/06bd56586078f1e57b10de6724eb9d86_pizv8p.png",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375045/ed72344e97eddfcd8d4bd7325e937a8c_ktzrto.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375044/2b2c1f9117adcb092e402f28c02db4fa_jsepng.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375043/5a94e0b157debfca5059036cceccedf5_wzvarf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375043/8c2aa52d2a006165ac985eb0fd17a58a_cogsp7.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375035/d72008009db7e11ae594172569fd9af3_siik5q.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375034/3c8116ebb10401017f8f1a77db804f37_mzgl1q.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375033/d1773738302d52f3808b86385f461c49_hcpjye.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375033/2b69c488f003e8217640b4c2cd6bf0e8_arvt4z.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375032/4edce066339f0383952ab46c2b96b28f_ddutkq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375031/8adeba148e9e2d8e1cf920f9bb285f29_nliqtd.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375003/1cc7e720d21d6f40227dee7503959522_qlh7ij.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375003/1cc03b3488a013a5d7de7dbd1b021d4f_kftetr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375003/0aae29568091041a108c104368a81708_ka1lhq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375003/44be68b63f3ccb60438eecf879b91ed7_xylgn4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375003/339a9f12c6538d0e8669be3d45401082_xecmte.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375003/157d8f663fc3eaf13715e68f57d52002_y7zgvd.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375002/33dbfb95f2dcdac44afc4bfe690c6972_e5ahfj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375002/821a71ad84b2cfd1d507224db7eb722a_zp85ix.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375002/pexels-eberhardgross-1624497_jizwle.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375002/1213838091071dc9e3f5c347d5f8da84_xvfnko.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375002/92decd69c29cc238c73fc5cf3ba5d3ed_edlgti.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375001/bb9535d88c565a99934db296f75d645f_ez1ath.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375001/b0564979764a6a6049e6b644573b51e8_jj6w5b.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375001/ace64076d45f2d2714176787e1a88859_bnobub.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375001/pexels-lizromo24-1999579_vfbgca.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375000/pexels-eberhardgross-2088210_ntmdly.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375000/b5c83d362bf81b40df4e0aa45cb9858a_rjhzv9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374999/pexels-timmossholder-2184346_mdqcvi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770375000/bd806178726f3bb32974c76745c07b5b_tfk7px.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374999/b14f399346330254d29cc3a10c7ecab7_qlqbwr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374997/pexels-anntarazevich-6481621_jcqbjz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374997/pexels-evie-shaffer-1259279-4004375_upindi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374997/pexels-parimoofarhaan-29525757_rdjsec.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374997/pexels-burhanverse-17875617_dzzfux.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374996/pexels-aakash-gupta-1333226-2567011_dnegg9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374995/pexels-eberhardgross-1624360_hjpuau.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374994/pexels-scottwebb-1931155_iz0b1l.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374991/pexels-parimoofarhaan-29292801_z7jrqi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374989/pexels-selman-arif-golbasi-322737964-13721782_r9nfkm.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374987/pexels-oscar-sanchez197-11922007_mq2opt.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374985/pexels-84327456-8872315_qi9dtz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374985/pexels-egos68-1906658_mb72vq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374983/pexels-molnartamasphotography-27724034_lilnpe.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374982/pexels-tomtookit-1914663-3565742_moxqs0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374982/pexels-melike-nuran-seker-53798108-14441229_cohz08.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374977/pexels-ludvighedenborg-10583930_ltkvip.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374976/pexels-molnartamasphotography-27809987_as2l0l.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374974/pexels-eberhardgross-1624496_pvalzb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374974/pexels-tomtookit-1914663-3538721_uzxx2w.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374973/pexels-valentina-bondarenko-111153662-9680880_r0t1zb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374973/pexels-timfuzail-2187963_nifsbl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374972/pexels-6th-era-photography-1261885-15444913_qacnqg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374972/pexels-plantpool-images-2222972-6316615_xnmbxx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374970/pexels-molnartamasphotography-27724022_mvx9xs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374969/pexels-rpnickson-2486168_vwmjzf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374969/pexels-fotios-photos-3838850_sr8m6q.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374969/pexels-parimoofarhaan-31453863_e6fcea.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374968/pexels-parimoofarhaan-29434105_kd2gor.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374963/pexels-pavel-danilyuk-6073116_xnglpv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374962/pexels-parimoofarhaan-29329806_zbwyj0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374962/pexels-molnartamasphotography-35248583_oupjvb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374962/pexels-rachel-claire-7276946_tbhqnp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374961/pexels-alessio-cesario-975080-1906794_zpx7ic.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374961/pexels-santiago-sauceda-gonzalez-3426899-6315943_ez26bo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374957/pexels-njeromin-19383909_cfo5ri.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374956/pexels-dilara-uygunadimdoga-67885961-9217915_ldgchx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770374224/pexels-parimoofarhaan-33446808_qgslsy.jpg",

];

const gallery = document.getElementById("gallery");

// 🌿 CREATE CARDS
images.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "card shimmer";

  const image = document.createElement("img");
  image.src = optimizeCloudinary(img, 600);
  image.loading = "lazy";
  
  image.addEventListener("click", () => {
  window.open(img, "_blank");
});

  image.addEventListener("load", () => {
    image.classList.add("loaded");
    card.classList.add("loaded");
  });

  const btn = document.createElement("button");
  btn.className = "download-btn";
  btn.innerHTML = "⤓";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = optimizeCloudinary(img, 1200);
    a.download = `nature-${index+1}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  card.appendChild(image);
  card.appendChild(btn);
  gallery.appendChild(card);
});

// 🌿 SCROLL REVEAL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold:0.2 }
);

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});