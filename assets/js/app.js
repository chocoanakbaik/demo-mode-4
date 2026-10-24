(()=>{"use strict";const toast=document.getElementById("toast"),shade=document.getElementById("noticeShade");let timer;function note(text){toast.textContent=text;toast.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove("show"),3000)}function open(text){document.getElementById("noticeCopy").textContent=text||"A session reminder is ready to review.";shade.classList.add("open");shade.setAttribute("aria-hidden","false")}function close(){shade.classList.remove("open");shade.setAttribute("aria-hidden","true");note("Notice dismissed. Nothing was sent or saved.")}document.getElementById("signIn").addEventListener("click",()=>open("This sign-in screen is a local visual preview. No account service is connected."));document.getElementById("continue").addEventListener("click",()=>open("The provider hand-off is simulated and will not open another service."));document.getElementById("forgot").addEventListener("click",event=>{event.preventDefault();open("Password recovery is represented for layout testing only.")});document.getElementById("join").addEventListener("click",event=>{event.preventDefault();open("Account creation is represented for layout testing only.")});document.getElementById("togglePassword").addEventListener("click",()=>{const input=document.getElementById("password"),visible=input.type==="password";input.type=visible?"text":"password";document.getElementById("togglePassword").textContent=visible?"Hide":"Show"});document.getElementById("noticeClose").addEventListener("click",close);document.getElementById("noticeLater").addEventListener("click",close);document.getElementById("noticeContinue").addEventListener("click",()=>{close();document.getElementById("email").focus()});shade.addEventListener("click",event=>{if(event.target===shade)close()});setTimeout(()=>open("A session reminder appeared in this interface preview. Check the page before continuing."),16000)})();

/* Aggressive stacked popup simulation; local-only and responsive. */
(()=>{"use strict";window.__demoPopupTheme="purple";window.__demoPopupItems=[["PESAN BARU","Ada aktivitas komunitas contoh untuk diperiksa.","Lihat pesan"],["SESI AKAN BERAKHIR","Pengingat sesi palsu muncul dalam simulasi ini.","Periksa sesi"],["KABAR CONNECTLY","Notifikasi baru sedang menunggu perhatianmu.","Buka notifikasi"],["AKUN MEMBER","Ada pembaruan contoh pada panel akun.","Lihat pembaruan"]];})();

(()=>{"use strict";
const items=window.__demoPopupItems||[]; if(!items.length)return;
const style=document.createElement("style");
style.textContent=`
.demo-ad-layer{position:fixed;inset:0;z-index:9000;pointer-events:none;font-family:Arial,sans-serif}
.demo-ad-pop{position:fixed;width:min(310px,calc(100vw - 28px));padding:15px 15px 13px;background:#fff;color:#202636;border:1px solid #d6dbe5;border-radius:12px;box-shadow:0 18px 55px #10182842;pointer-events:auto;animation:demoPopIn .22s ease-out;overflow-wrap:anywhere}
.demo-ad-pop:before{content:"SIMULASI POPUP";display:block;font-size:9px;letter-spacing:1.2px;font-weight:800;color:#667085;margin-bottom:9px}
.demo-ad-pop .demo-ad-x{position:absolute;right:8px;top:7px;width:27px;height:27px;border:0;border-radius:50%;background:#eef1f6;color:#344054;font-size:20px;line-height:1;cursor:pointer}
.demo-ad-pop strong{display:block;padding-right:22px;font-size:14px;line-height:1.3;margin-bottom:6px}
.demo-ad-pop p{font-size:12px;line-height:1.45;color:#596579;margin:0 0 12px}
.demo-ad-pop .demo-ad-action{border:0;border-radius:7px;padding:9px 11px;width:100%;font-size:11px;font-weight:800;cursor:pointer;background:#344f9b;color:#fff}
.demo-ad-pop .demo-ad-foot{display:block;font-size:9px;color:#8a93a3;margin-top:9px}
.demo-ad-pop.gold .demo-ad-action{background:#a66a13}.demo-ad-pop.green .demo-ad-action{background:#08795e}.demo-ad-pop.purple .demo-ad-action{background:#6844b5}
.demo-ad-pop:nth-child(1){right:20px;top:94px}.demo-ad-pop:nth-child(2){left:22px;top:42%;transform:rotate(-1deg)}.demo-ad-pop:nth-child(3){right:7%;bottom:30px;transform:rotate(1deg)}.demo-ad-pop:nth-child(4){left:9%;top:18%;transform:rotate(1deg)}
@keyframes demoPopIn{from{opacity:0;translate:0 12px;scale:.96}to{opacity:1;translate:0 0;scale:1}}
@media(max-width:600px){.demo-ad-pop{width:min(270px,calc(100vw - 24px));padding:13px}.demo-ad-pop:nth-child(1){right:12px;top:82px}.demo-ad-pop:nth-child(2){left:12px;top:34%;transform:rotate(-1deg)}.demo-ad-pop:nth-child(3){right:12px;bottom:18px;transform:rotate(1deg)}.demo-ad-pop:nth-child(4){left:12px;top:17%;transform:rotate(1deg)}.demo-ad-pop strong{font-size:13px}.demo-ad-pop p{font-size:11px}}
@media(prefers-reduced-motion:reduce){.demo-ad-pop{animation:none}}
`;
document.head.appendChild(style);
const layer=document.createElement("div");layer.className="demo-ad-layer";layer.setAttribute("aria-label","Simulasi popup agresif");document.body.appendChild(layer);
let next=0;const delays=[1200,2450,3900,5600];
function spawn(){if(next>=items.length)return;const data=items[next];const card=document.createElement("section");card.className="demo-ad-pop "+(window.__demoPopupTheme||"blue");card.setAttribute("role","dialog");card.setAttribute("aria-label",data[0]);card.style.zIndex=String(9001+next);card.innerHTML='<button class="demo-ad-x" type="button" aria-label="Tutup popup">×</button><strong></strong><p></p><button class="demo-ad-action" type="button"></button><small class="demo-ad-foot">Contoh antarmuka · tidak membuka situs lain</small>';
card.querySelector("strong").textContent=data[0];card.querySelector("p").textContent=data[1];card.querySelector(".demo-ad-action").textContent=data[2];
card.querySelector(".demo-ad-x").addEventListener("click",()=>{card.remove();if(next<items.length)setTimeout(spawn,500)});
card.querySelector(".demo-ad-action").addEventListener("click",()=>{card.querySelector("p").textContent="Ini hanya simulasi. Tidak ada akun, hadiah, atau transaksi sungguhan.";card.querySelector(".demo-ad-action").textContent="Mengerti";card.querySelector(".demo-ad-action").onclick=()=>card.remove()});
layer.appendChild(card);next++}
delays.forEach(delay=>setTimeout(spawn,delay));
})();


/* ChocoScan educational adware simulation: all interactions stay on this page. */
(()=>{"use strict";
if(document.getElementById("cs-aggressive-sim"))return;
const css=document.createElement("style");
css.textContent=`
#cs-aggressive-sim{position:fixed;inset:0;z-index:12000;pointer-events:none;font-family:Arial,sans-serif}#cs-aggressive-sim:before{content:"";position:fixed;inset:0;background:rgba(0,0,0,.78);pointer-events:none}
.cs-sim-card{position:fixed;pointer-events:auto;box-sizing:border-box;width:min(350px,calc(100vw - 22px));background:#fff;border:3px solid #ef4444;color:#171717;box-shadow:0 20px 70px #0009;border-radius:10px;padding:17px;animation:csShakeIn .2s ease-out}
.cs-sim-card strong{display:block;font-size:15px;line-height:1.3;margin:5px 28px 8px 0}
.cs-sim-card p{font-size:12px;line-height:1.45;margin:0 0 13px;color:#3d3d3d}
.cs-sim-card .cs-sim-icon{font-size:28px;line-height:1}
.cs-sim-card .cs-sim-x{position:absolute;right:6px;top:6px;border:0;background:#fee2e2;color:#991b1b;border-radius:5px;width:29px;height:29px;font-size:22px;cursor:pointer}
.cs-sim-card .cs-sim-btn{display:block;width:100%;border:0;border-radius:5px;padding:10px;margin-top:7px;background:#dc2626;color:white;font-size:11px;font-weight:900;cursor:pointer}
.cs-sim-card .cs-sim-btn.alt{background:#facc15;color:#211900}
.cs-sim-label{font-size:9px;letter-spacing:1px;font-weight:900;color:#991b1b}
.cs-sim-push{position:fixed;right:12px;top:12px;width:min(310px,calc(100vw - 24px));background:#f8fafc;border:1px solid #94a3b8;border-radius:10px;padding:13px;box-shadow:0 12px 35px #0003;color:#172033;pointer-events:auto}
.cs-sim-push b{font-size:12px}.cs-sim-push p{font-size:11px;line-height:1.4;margin:7px 0}
.cs-sim-push button{border:0;padding:7px 9px;margin:3px 4px 0 0;border-radius:5px;cursor:pointer}
@keyframes csShakeIn{from{opacity:0;transform:scale(.94) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
@media(max-width:600px){.cs-sim-card{width:calc(100vw - 18px);padding:13px}.cs-sim-card strong{font-size:14px}.cs-sim-card p{font-size:11px}.cs-sim-push{right:9px;top:9px;width:calc(100vw - 18px)}}
@media(prefers-reduced-motion:reduce){.cs-sim-card{animation:none}}
`;
document.head.appendChild(css);
const root=document.createElement("div");root.id="cs-aggressive-sim";root.setAttribute("aria-label","Simulasi adware ChocoScan");document.body.appendChild(root);
let round=0;const spots=[{top:"23%",left:"max(9px, calc(50% - 175px))"},{top:"36%",right:"4%"},{bottom:"7%",left:"5%"},{top:"8%",left:"5%"}];
const messages=[
{title:"PERINGATAN KEAMANAN PALSU",copy:"Simulasi: halaman mencoba membuat pengunjung panik dengan peringatan perangkat.",btn:"SCAN NOW"},
{title:"IZINKAN NOTIFIKASI?",copy:"Simulasi tampilan permintaan notifikasi. Ini bukan dialog izin browser sungguhan.",btn:"ALLOW"},
{title:"DOWNLOAD NOW",copy:"Simulasi tombol unduhan yang mendesak. Tidak ada file yang diunduh.",btn:"DOWNLOAD"},
{title:"SESI AKAN BERAKHIR",copy:"Pesan urgensi contoh yang digunakan untuk mengalihkan perhatian.",btn:"CONTINUE"}
];
function spawn(){const data=messages[round%messages.length],pos=spots[round%spots.length];const card=document.createElement("section");card.className="cs-sim-card";card.setAttribute("role","dialog");card.setAttribute("aria-label","Simulasi: "+data.title);Object.assign(card.style,pos);card.style.zIndex=String(12001+round);
card.innerHTML='<span class="cs-sim-icon" aria-hidden="true">⚠️</span><button type="button" class="cs-sim-x" aria-label="Tutup simulasi">×</button><div class="cs-sim-label">SIMULASI CHOCOSCAN · BUKAN PERINGATAN ASLI</div><strong></strong><p></p><button type="button" class="cs-sim-btn"></button><button type="button" class="cs-sim-btn alt">CONTINUE</button>';
card.querySelector("strong").textContent=data.title;card.querySelector("p").textContent=data.copy;card.querySelector(".cs-sim-btn").textContent=data.btn;
const loop=()=>{card.remove();round++;setTimeout(spawn,280)};
card.querySelector(".cs-sim-x").addEventListener("click",loop);
card.querySelectorAll(".cs-sim-btn").forEach(btn=>btn.addEventListener("click",()=>{card.querySelector("p").textContent="Interaksi dicatat secara lokal untuk demo. Tidak ada redirect, unduhan, atau pengiriman data.";btn.textContent="SIMULASI AKTIF";btn.disabled=true}));
root.appendChild(card);round++}
function push(){const p=document.createElement("aside");p.className="cs-sim-push";p.innerHTML='<b>🔔 Notifikasi contoh</b><p>Halaman demo menampilkan notifikasi tiruan, bukan izin browser asli.</p><button type="button">Izinkan (simulasi)</button><button type="button">Nanti</button>';p.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{p.remove();setTimeout(spawn,200)}));root.appendChild(p);setTimeout(()=>{if(p.isConnected)p.remove()},6500)}
setTimeout(push,900);setTimeout(spawn,1700);setTimeout(spawn,2900);setTimeout(spawn,4100);
document.addEventListener("click",function(e){if(e.target.closest("#cs-aggressive-sim"))return;if(round<8&&Math.random()<.28)setTimeout(spawn,100)},true);
})();