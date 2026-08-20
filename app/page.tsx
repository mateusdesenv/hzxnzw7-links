"use client";
import { useState } from "react";
const links = [
 { name:"TikTok", label:"Me segue no TikTok", handle:"@hzxt2997", url:"https://www.tiktok.com/@hzxt2997", icon:"♪", color:"#ff315b" },
 { name:"YouTube", label:"Inscreva-se no YouTube", handle:"Vídeos & lives", url:"https://www.youtube.com/@hzxnzw7", icon:"▶", color:"#ff3434" },
 { name:"Twitch", label:"Assista na Twitch", handle:"Lives de Minecraft", url:"https://www.twitch.tv/hzxnzw7", icon:"▣", color:"#9b6cff" },
];
export default function Home() {
 const [copied,setCopied]=useState(false);
 async function copyNick(){ await navigator.clipboard.writeText("hzxnzw7"); setCopied(true); window.setTimeout(()=>setCopied(false),1800); }
 return <main className="world">
  <div className="sky-noise" aria-hidden="true"/><div className="cloud cloud-one" aria-hidden="true"/><div className="cloud cloud-two" aria-hidden="true"/>
  <section className="profile-card" aria-label="Links do streamer hzxnzw7">
   <div className="card-topbar"><span className="status"><i/> AO VIVO AGORA</span><button className="share" onClick={()=>navigator.share?.({title:"hzxnzw7",url:window.location.href})} aria-label="Compartilhar página">↗</button></div>
   <div className="avatar-wrap"><div className="avatar" aria-label="Avatar pixelado do streamer"><span>H</span></div><span className="emerald" aria-hidden="true">◆</span></div>
   <div className="intro"><p className="eyebrow">STREAMER DE MINECRAFT</p><h1>hzxnzw7</h1><p className="bio">Construindo mundos, quebrando blocos<br/>e fazendo live quase todo dia.</p></div>
   <div className="links">{links.map(link=><a className="link-button" href={link.url} target="_blank" rel="noreferrer" key={link.name} style={{"--accent":link.color} as React.CSSProperties}><span className="platform-icon">{link.icon}</span><span className="link-copy"><strong>{link.label}</strong><small>{link.handle}</small></span><span className="arrow">→</span></a>)}</div>
   <button className="nick" onClick={copyNick} aria-live="polite"><span>⛏</span><span><small>NICK NO MINECRAFT</small><strong>{copied?"COPIADO!":"hzxnzw7"}</strong></span><span className="copy-symbol">▣</span></button>
   <footer><span>◆</span> ENTRE NA LIVE E MANDA UM SALVE <span>◆</span></footer>
  </section><div className="ground" aria-hidden="true"><div className="grass"/></div>
 </main>;
}
