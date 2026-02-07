// 🌟 Optimize Cloudinary
function optimizeCloudinary(url, width = 800) {
  return url.replace("/image/upload/", `/image/upload/w_${width},q_auto,f_auto/`);
}

// 🌟 CAR IMAGES
const images = [
  "https://res.cloudinary.com/dvypkvftc/image/upload/v1770428796/pexels-introspectivedsgn-12920312_vnytbs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428796/pexels-tima-miroshnichenko-6872161_c1wfif.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428797/pexels-bekirdonmeez-8932430_lmtmvy.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428793/pexels-highervibration-10215508_vdfnla.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428792/pexels-jacobmooreimages-12522900_scwkce.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428789/pexels-sostene-costantino-67116340-8861342_fdctl9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428791/pexels-muhammad-muzamil-60710999-16964093_tl3fed.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428789/pexels-skelm-7856822_fmscog.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428789/pexels-alshreef-29111446_rpn79l.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428788/pexels-dpranka-12644285_hark0y.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428785/pexels-skelm-7856847_pbtxoz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428784/pexels-joegun-13886802_d4wxly.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428784/pexels-introspectivedsgn-13712005_yfc9y9.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428784/pexels-highervibration-6640213_fdryth.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428784/pexels-njeromin-11583816_tenhon.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428782/pexels-egeardaphotos-2148533277-32557355_nyha0a.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428781/pexels-egeardaphotos-2148533277-32557360_diwqkx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428776/pexels-dpranka-12644290_wcponh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428773/pexels-ishankulshrestha69-12726925_beohp4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428773/pexels-chickenbunny-102941452-14009215_yb3ope.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428769/pexels-dpranka-12644281_vjry0n.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428768/pexels-jacobmooreimages-12565910_k5qol4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428767/pexels-julian-largo-622163228-17377384_be6ia8.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428766/pexels-jacobmooreimages-11110426_wsrfzx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428761/pexels-julian-largo-622163228-17377373_rukunf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428759/pexels-akshay-mehra-302736-10563226_txqndl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428755/pexels-04iraq-1272398525-31543966_tmjwdf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428753/pexels-julian-largo-622163228-17377376_ksyfwr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428749/pexels-yuraforrat-13965981_onkv4y.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428745/pexels-julian-largo-622163228-17377372_ueixct.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428733/pexels-04iraq-1272398525-29098433_ftkfjx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428733/pexels-introspectivedsgn-12590806_vkq2ri.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428701/pexels-julian-largo-622163228-17377387_smwwvg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428703/pexels-egeardaphotos-2148533277-32761927_cu1lhq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428704/pexels-bob-ronald-334686276-14655884_q3bnfp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428704/pexels-imperioame-13359837_dg0rov.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428702/pexels-dantemunozphoto-16259486_euow8n.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428702/pexels-julian-largo-622163228-17377378_m73szh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428703/pexels-audrius-strikaitis-31613974-13357113_op2jhx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428702/pexels-julian-largo-622163228-17377374_ak4rou.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428700/pexels-asish-aji-16113190-13648917_bgv2gc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428700/pexels-egeardaphotos-2148533277-30550144_ile7ye.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428699/pexels-julian-largo-622163228-17377377_dna5so.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428700/pexels-memet-oz-296480690-35689657_ut6oib.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428698/a70e993d-f7a7-4e2f-8f93-6e37c5de0a9d_uoane0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428698/BMW_ky5ozy.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428698/a2aeaf6f-bcb7-476f-a84f-365370590add_z95dys.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428698/BMW_M5___Wallpaper_qz02u5.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428698/17144b1e-50c3-482c-8503-1e7d247499c1_boli9j.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428698/pexels-04iraq-1272398525-29615581_ltkh4j.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428697/b77169a3-117b-4a16-9f41-28f7222f487d_rfieia.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428696/guao_j8mdij.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428694/pexels-04iraq-1272398525-29098431_dxbhbx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428696/Porsche_911_Carrera_parked_in_the_sun_with_trees_in_the_background_aksdku.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428697/blaaaa_opufwr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428694/pexels-stefan-schulze-2148912985-30369948_s1mpfg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428695/ad4e0f22-6a54-4adb-910d-1a3d56ed80d7_qfx5r3.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428696/2e99a9c1-7792-400a-8d73-31780df7bf58_zqjk7p.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428697/1eb5f7cf-c407-4ca5-8682-538ceab14955_zqsky1.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428696/84c578e8-0133-45da-b2f1-a2b75b62d484_rgxrnc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428694/HD-wallpaper-sports-car-car-black-street_dsjbqn.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428695/67f7345e1561379063d69bf2229823ef_ddnr7h.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428697/8cf8851d-5e86-46dc-a460-967951bf3635_kdqd10.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428697/Car_q4nb3f.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428696/5c63deca-cc21-475a-9933-b4ab9fa695c5_uj7ofq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428695/bidg_dreams_ni4dvc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428696/fdadea24-e331-426b-903b-e69f226628d8_nobfkm.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428694/pexels-04iraq-1272398525-29098238_abcpj6.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428695/8a30e94c-8f9b-401e-a293-5c56735eded9_y2rtda.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428695/7cc7c306aeb3b1b645d8bfa9806decec_axeoqx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428695/Ferrari-GTC4lusso-4K-Ultra-HD-Mobile-Wallpaper_p4plds.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428694/pexels-zsolt-joo-483255-2882234_kboywg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428694/pexels-jacobmooreimages-11110523_h8y0li.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428692/pexels-sleeba-thomas-156395977-30788730_totm2g.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428692/7f6a23873f2fbb75da9f0d6f2ff679fe_lppit6.jpg" ,

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428692/wp11635182_ykyhog.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428691/pexels-tarun-reddy-362129-28919559_ncaohq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428690/pexels-ivo-mukkulainen-1617629-7664033_e68ntp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428691/pexels-wyatt-rossi-383792769-14648962_ygxa1l.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428690/pexels-lee-chinyama-92380529-9703460_chnlcn.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428689/pexels-egeardaphotos-2148533277-30256929_d9smgg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428689/pexels-sleeba-thomas-156395977-30788718_kcawq3.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428688/pexels-pikxlz-20220875_ffpevs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428688/pexels-smepictures-34262977_hhvz2n.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428688/pexels-pudding-31626783_bo4ydb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428687/pexels-ceesz-284432587-29044298_nchog8.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428687/pexels-tarasov_film_ph-162805844-11154046_xr1sdr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428686/pexels-haydn-dalton-736237834-19963400_fztbtt.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428685/pexels-akshay-mehra-302736-10563213_s6dzho.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428685/pexels-senansperspective-29390578_trsrkk.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428685/pexels-andrei-l-335499537-31145401_eifsdr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428684/pexels-ishankulshrestha69-9074847_dyqlav.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428684/pexels-andrei-l-335499537-31145399_frznvs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428683/pexels-mortywalker-5669387_qdvewa.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428680/pexels-andrei-l-335499537-31145404_iuycib.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428678/pexels-harrisonhaines-2834653_blg00h.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428678/pexels-andrei-l-335499537-31145418_sa9kjb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428676/pexels-yasin-onus-520099596-34121191_ewe53h.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428676/pexels-zachtheshoota-2568539_npmsun.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770428675/pexels-trvlust-3221145_cdyzxr.jpg",
];

const gallery = document.getElementById("gallery");

// 🌟 CREATE CARDS
images.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "card shimmer";

  const image = document.createElement("img");
  image.src = optimizeCloudinary(img, 600);
  image.loading = "lazy";

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
    a.download = `car-${index+1}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  card.appendChild(image);
  card.appendChild(btn);
  gallery.appendChild(card);
});

// 🌟 SCROLL REVEAL
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