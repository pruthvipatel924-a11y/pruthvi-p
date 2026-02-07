// 🌿 Optimize Cloudinary
function optimizeCloudinary(url, width = 800) {
  return url.replace("/image/upload/", `/image/upload/w_${width},q_auto,f_auto/`);
}

// 🌈 IMAGE LINKS
const images = [
 "https://res.cloudinary.com/dvypkvftc/image/upload/v1770393722/e1b68615d58c0839a705f51854d79e54_cthtwp.png",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393716/fed6b5f301accc7bbda21d905307d31d_wuhnes.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393710/0617ee5569b1dfb10e4a79439ff2d033_gd162z.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393709/70057470520ac842235ff22d5335eecd_joleiu.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393707/6ce894dca7cd3ef0f03260247f26755d_rusmgi.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393704/e0827aa1c5649060015e69b6f04e8b5b_j2vcu2.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393702/f12188a2dffd1db46dda94d4364ea8fb_lz7xpu.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393700/47e1dd63d9ed6a211f913ed513dd51a6_lry2sw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393692/22fcf5f9445fa1b76f84d19757ac07b3_h4mnto.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393689/d7922a8fb9cd7bbe4600e144c563e915_qi3zju.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393688/d24dad2f5e6cad4c13fd52ca0285dad4_jvshw8.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393688/ef70e8a53f42992666bf06867e75c52a_joqtft.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393689/070634cd4bb1aae925b3b189c7928d32_mz9yte.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393686/b8e12c64d8c8ddabca9176bfcfe25307_gxpgki.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393683/9f8bf8664333af3ff5bb279a3f8bf314_ssed5z.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393676/ba21c2e75f811d48ef710ecff8224a43_k3ml1k.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393673/c737ee4767db0e5edd76ff7359ede283_qn1bzs.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393673/346e7ac45123572b94af0843a37a19d9_srd9w5.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393674/7d576ab3789e1a086575fa224d85ce8b_dp9jvz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393670/f73361619ed301ff68c3480720b73b1d_hmpsnt.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393668/e1de4f3bc5dd6623b874132c0c2384af_w1m4i3.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393659/54994c6f45e7eabe5a815503169fb8a3_a5zsi4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393656/2a98bd289cc65608e160b46bfa803659_b4vwrj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393657/e9e57aee95b807ac268c6bac06369449_fjmtua.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393656/c7f550943d3d27863554b710f6335106_bmotjj.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393656/af54df4f26cba724d59f79f36a1f0382_dbvfol.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393655/571fde26ab19a36019c01a58eb24e452_f5hysg.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393649/90a28c4d72ec667685500a5ba8d74bbd_bdgn3n.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393647/eca8110193c059e6881846d8d7f23ba6_pk9bqc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393646/a20e778588974302b67e67949b00241e_yabkgf.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393643/db3cb77319078a2a040a3351aa7af93a_akyayw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393641/c0c72e18126ebc601b42e5647da6f4f2_tsms33.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393632/ea8f4abe490adbd03f07d38818f2ee83_ic5jzb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393630/45b7cee9d39bf27eeebc5ba683c9a19e_pe5dka.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393630/ae44f204bf37a6b8a37e60598feef584_qeyjms.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393631/c9daaf967c3638ba0f48624088243333_cxppyo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393629/220af9433c643e1090739632ed98266e_zhfidv.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393629/18a10673421759a1e61a616e580e905d_rc3tae.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393616/06c09719cbaf88d2bd3c94527d011859_bdlp1v.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393618/b105a38910a5d136b9503b8890458dbf_dw5gme.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393615/644fcc2791e5bd94961df579d970dee7_xtsqmt.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393614/10a83c4fd7e6525b092666eae2a24828_ib6pvr.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393613/865b96ea0e57089cdad1c31f346d6833_pxqdfp.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393614/e9f5a5ad6b4dca72aa04d90e3725f2e8_smkefb.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393612/93f250cf38c199905558191666c744f0_yles9n.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393601/d9162cf496708f70a7580d04e6cb32c3_mgu9gw.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393595/0347092010894f4fdbaaebb50364eb96_flvzpo.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393595/6e42b8f9387ab1fa632c00019cc7eac6_ozozor.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393595/17a46c9da6d294a3ff3c5340d1889d76_qbqjba.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393595/c41a01b5a5b3c9e905f8570e6fba4501_owimym.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393589/26b6267f314d5ddd50bc61204d9adf73_xv3rwl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393585/f150dc48820be2b04d9b659e41786a72_pjaggh.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393585/9f1d0134c732a1023915df76ad9d7695_qcwnex.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393583/c1edb3b19da27a59c9e4c0256218c395_ornq9f.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393583/970543902e7e75930e37f9cb88a879b1_q4u0pl.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393581/27355d52872e62403492e05c454443b5_mthsb4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393578/7b1dc8ae85665da834f9be9073410d4a_qsycup.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393577/4ae089638009b3e9f910655f97f7efb7_ywciy4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393573/8667592a8747730589659486b24a0c9e_lvxfpc.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393572/b170a863766c64488caf2db836610048_uh1iis.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393571/2e959a6cc725a3bd6c2c0c6aca819be2_dttbps.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393568/0ce2522a98106cefac3a6c60987ad2c1_wrbkw4.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393563/032dc49ccaac57080df4146f9a98055f_h2ceva.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393562/50dd0d7b927612e760be4856a5a6eb5b_b6npcn.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393561/ee79809922ff482b5d5ee132a69aa6e0_fzqrkm.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393561/fcb97196ef4c410bc7b80a9ebbd50f09_ogipch.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393560/09eff1322715feabfcd930e12b7d5480_ukwiw7.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393554/87cb73860715e9629a28a9c1f87f6505_ad2c4k.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393553/cee2233095958b591f0fdebf56204613_omfuha.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393553/563dcf40f067497ad9bf9ded1d21fa99_w7ooet.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393552/3f40f56f6f0a4b338e2aecd6e066f246_lo1lma.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393547/79a7c2a3d22d85f5a31f76c5665e35ee_eohjax.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393546/c7211517cf48392d1ea16e8a69b9b25a_qv0fft.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393544/16fc73b892c30f4d1c72b2b8dac6e4e2_fmuany.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393545/2043295e5b4fa396c944577f137c157c_kbokg3.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393542/1f0ffd32874e89f2cc4ee63e71b2009f_k9updm.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393540/2136478997b6da23e451365180018182_hqujam.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393539/e5b897aa6c4a4594385c1de6fc2046cc_ylhthx.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393539/9d0b22eb421e45112d48e12ddd9b280f_ugfu8p.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393536/92726aa94295d3e887944503d3ccc2c3_xrmkej.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393535/b707ac71525cb7b9d3b97a50ac9e3981_dyvox0.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393533/431075af9da7837893dfa3617c17b766_kiejli.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393533/7f35e360d0bbf6e62229cd231ff03b5f_hcaneq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393533/a44d040f9553024f6d67845dbbf770cd_v2m6lz.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393533/b9ba1343b0a2dc88235e93cafea492d5_esnwzd.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393531/d40fd350fea418634d5c63ee08a58a3f_ybi9xq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393531/5b85160dfd4aebff80b4952dce98cb07_lyvv1y.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393531/b4beb746b9ee616660a2f247dbfb5288_v2mauq.jpg",

"https://res.cloudinary.com/dvypkvftc/image/upload/v1770393531/de0bbeea33672889a6cfc84f81c313a0_pzqtrq.jpg",
];

const gallery = document.getElementById("gallery");

// 🌿 CREATE CARDS
images.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "card";

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
    a.download = `abstract-${index+1}.jpg`;
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

// 🌈 ABSTRACT BACKGROUND ANIMATION
const canvas = document.getElementById('abstractCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let shapes = [];
const colors = ['#ff6ec4','#7873f5','#00ff99','#ffeb3b','#ff3c3c'];

for(let i=0;i<50;i++){
  shapes.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    radius:Math.random()*20+10,
    dx:(Math.random()-0.5)*1.5,
    dy:(Math.random()-0.5)*1.5,
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  shapes.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
    ctx.fillStyle = s.color;
    ctx.fill();
    s.x+=s.dx;
    s.y+=s.dy;
    if(s.x<0||s.x>canvas.width) s.dx=-s.dx;
    if(s.y<0||s.y>canvas.height) s.dy=-s.dy;
  });
  requestAnimationFrame(animate);
}
animate();

// Canvas resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});