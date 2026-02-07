function optimizeCloudinary(url, w=800){
  return url.replace("/image/upload/",`/image/upload/w_${w},q_auto,f_auto/`);
}

const images = [
  // 🚀 YAHAN SPACE WALLPAPERS ADD KARO

   "https://res.cloudinary.com/dvypkvftc/image/upload/v1770434872/pexels-luck47-544268_xlxyum.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434871/pexels-alex-andrews-271121-816608_gvq2ec.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434868/pexels-semws-2670898_zezzzo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434863/pexels-adi-k-182036-3222255_hrxjop.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434863/pexels-philippedonn-1257860_v9r9fs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434862/pexels-welio-carvalho-43720259-7824024_e1xipv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434859/pexels-samkolder-2387877_b286zh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434858/pexels-free-nature-stock-1376766_itve4t.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434854/pexels-lauragafforelli-5627435_hazgyp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434853/pexels-eberhardgross-2098427_tcprs7.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434848/pexels-brett-sayles-3110354_ocqasu.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434846/4813dabf-f1c1-4b10-94e4-70e9645cbbc7_utktag.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434834/05cf8906-5b22-499d-9b9f-df9e537017b3_qw9moe.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434833/db708384-f9d4-45f7-814e-af319721f68a_ijilip.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434833/c01578bb-51ec-4966-8608-ad2c1a7f0c52_pse9it.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434833/18f57750-fc2a-4786-8563-fc5f07a64fb5_dd1fmi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434832/65685306-fc43-42ab-a975-55670ede134c_jxg8lu.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434832/85accb33-9227-4ddb-8cf9-4ce1cba8d580_gskzw2.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434832/175c87eb-3043-4672-9a77-0ec3953b9c09_tsvjej.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434819/d316b99e-bef8-4b43-b22f-4b608ee5ada6_yxkuqw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434818/848e8fc6-73ea-4012-94e9-e6b3d2f4c6c6_xz7l9f.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434818/173d6ec7-d87c-4b36-80b7-7a771f79781c_hnpgyv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434818/d6f78521-0877-440a-89db-79bcaedb6c5a_vtloux.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434818/d1a1f597-95ec-44cb-9f1a-00cf2bad67d1_dfvtfq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434818/63376775-0933-446d-b817-3274d7562602_wnrz3h.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434817/feca7b8a-ce38-4157-853e-b205dc99ac75_kwqwaw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434817/dab8e4d7-0d24-4945-85e3-3d6113d60882_co8gvv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434817/903d6a76-c22d-41f5-8ff2-6e56400f3c2c_jnvrrz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434810/8d911bf0-ae78-4b4a-8e64-c57e9f8bf9f2_hgy9pf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434810/f56a0038-4343-4019-a84c-7de4282bf1be_uwsnda.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434809/f3fccf34-c6e7-4c80-b650-978c68c1e054_ievpzc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434808/309bed74-3f17-4cbd-bcf3-a99447119868_jfpr22.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434806/e5a27c60-671a-49a7-9230-5694d9263f2c_requqz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434798/d5e2b76e-f063-4add-85c7-6c05b62e3747_w9a4qv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434792/821d3c89-96ae-4be0-80f7-7ea83318c0a6_sdxn7y.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434791/cab07da4-c36a-4cc8-bcca-f64739569840_vcz5sf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434791/46a9fbbc-5e52-4fd2-a8cb-e5d683792bfc_qhjxdt.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434791/9914d9f7-bfef-48f8-ac19-6056f3fad584_faq6lz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434791/12883caf-3a21-484a-bd3b-160b40d612a9_ueac2a.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434791/21ffaffa-d962-45de-bf07-efb3d8c13fdf_dpxo7v.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434790/1aa6486e-6152-40b9-ad8d-bf78c74b9bc3_wduybr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434790/cadc9640-4c22-45f1-b673-3c828ea136d2_l1r7bs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434790/7c7ecc98-8c87-42a9-9a93-b3c39f282242_jybrvp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434790/6960ef53-0bd8-4f54-bdd9-1fc4f725fab2_drzvax.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434782/dac07ddd-81d4-429c-9042-b817babf05e4_kcfufc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434782/01f939ad-a942-42ef-b719-293079179005_oc3sa4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434780/8a69b239-0404-4140-8819-7f38733a40ba_uqnnmc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434780/8a765824-528e-4db1-99fc-000fab696b48_ei7t7o.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434780/e7367282-32c9-48d1-a174-8422003313c7_oro1ze.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434777/e6911733-5afd-4328-a4a6-ec0746eb132d_qmdcsb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434773/0b2d7993-c2de-476d-98e2-ce91a313b285_sjazwn.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434773/27c07ccc-21ea-4488-80c6-c2821cd6dff8_k4qifr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434772/6848c1d9-d8bd-4d58-a9cd-51dba876f08b_nq7zmu.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434771/f6f1391d-8350-463c-a0d6-f354d437c08e_w8pgzs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434768/c24f19ed-fa5f-478e-9f48-ec09ab923427_x2gapb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434767/788d2bbb-4cdd-48f3-ab34-a812c452f192_wnug09.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434766/e40a36bb-ac9b-475e-b0e0-c862b946e4d3_dhwbu0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434763/b445f820-9647-4af7-ac7c-8dd07de8363b_mck94l.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434761/001051fd-3414-401b-92d7-f8ef00828e80_ztcpgy.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434760/bdfc323d-d3f3-4d43-b3b0-dc80b0c82658_upbrwi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434758/a12740cb-75d0-4e38-b054-7ee250002784_eu7x61.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434757/67033a8a-6522-4b56-9c0f-3e74be62ce97_m4k5ms.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434757/33eb490a-7f73-4e8d-bf4c-99e62c3c4657_xpqjwq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434756/4462506c-a071-49f9-aeef-e612bcc5e08c_pqyw7g.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434754/6a7828fb-cee8-4a74-a981-1a7535febc05_kecjha.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434751/d8276e58-5525-4bf4-b32c-7fbe5f957d66_isnubk.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434751/b41f1cea-a533-482a-a1cd-9296b0c7a4df_t6ppq5.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434750/ef88d80b-df1c-481e-944b-af1b0a94f833_wwkrmw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434750/9574c53a-44f1-41ad-92c3-54a6460eba15_cob95k.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434747/89eb72c2-d55a-45b1-aa2e-88263e641ddb_nw6bah.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434745/9789ee76-1c41-4959-bdaf-955db7af2d73_v5puxz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434744/9ee57518-22bb-4f6f-9009-fe4dcd5151da_nbfybj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434744/e8008fee-780a-4c8a-915b-6f46aa0b0998_aremvs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434743/a3f0045e-e101-494e-820e-b1fe20901757_kjapeo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434743/2bca42bc-e54b-4a99-a021-6800396b2826_rzjk7l.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434738/bbe684b3-4ebe-4842-99ae-bd94be2b7b08_ahtakx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434736/77e877b6-61be-4ac4-aafe-b98ac187b37d_dhgdaj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434736/2887203e-3f0f-459a-b0fc-2af0322fd033_rwyiri.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434736/space_andromeda_galaxy_stars_glow_4k_hd_galaxy-1440x2560_mhfd2d.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434736/e6ce333f-519b-4015-9fca-cfd6223cfc57_vjismr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434736/67629159-f43f-4ab7-b92a-6c966396151b_e3kjx3.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434735/space-4k-phone-x797hr5e8lvh8mmw_bieeiq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434735/earth-nebula-galaxy-milky-way-stars-purple-background-1080x1920-2469_xtvumg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434735/vibrant-galaxy-phone-wallpaper-34_f6jm8g.webp",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434735/2fc597b6e64b3e0fbcddd1a53240c7c3_fcjklg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434734/195372-2160x3840-iphone-4k-outer-space-background_evonaz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434730/galaxys-center-in-space-4k-phone-zc3behcalzh4grmz_v3gqza.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434730/HD-wallpaper-space-war-galaxy_no10u5.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434730/space_galaxy_astronomical_universe_helix_4k_hd_space-1440x2560_brkbut.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434730/minimal-line-art-galaxy-mobile-wallpaper-design_53876-97355_hsbluj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434730/xlieJ1zY9HCMItPg_bG8-cgpBstCxpFGhRifHB-5IGg_dgvwnm.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434729/78060276641855957-68157704392992090_yaobtr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434729/37d9df37866db73e92036d7abc421632_kdotnl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434729/fd15ec21082b787a08567b28cd437bc1_ntnz5i.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434729/wp12522107_eto9wf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434729/vibrant-galaxy-phone-wallpaper-3_nbxucd.webp",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434729/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtYWtlLTAwMS5qcGc_kbtx3e.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434728/cosmic-dance-space-background_23-2151955891_g7ukdy.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434728/113996adb0c50e267c81e178863be2e5_tmlmcw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770434728/26321_yjvuaz.jpg",

];

const gallery = document.getElementById("gallery");

images.forEach((img,i)=>{
  const card=document.createElement("div");
  card.className="card";

  const image=document.createElement("img");
  image.src=optimizeCloudinary(img,600);
  image.loading="lazy";

  const btn=document.createElement("button");
  btn.className="download-btn";
  btn.innerHTML="🚀";

  btn.onclick=(e)=>{
    e.stopPropagation();
    const a=document.createElement("a");
    a.href=optimizeCloudinary(img,1200);
    a.download=`space-${i+1}.jpg`;
    a.click();
  };

  card.append(image,btn);
  gallery.append(card);
});

/* SCROLL REVEAL */
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>{
    if(x.isIntersecting){
      x.target.classList.add("show");
      obs.unobserve(x.target);
    }
  })
},{threshold:.2});

document.querySelectorAll(".card").forEach(c=>obs.observe(c));