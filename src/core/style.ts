/** 卡片与设置面板的全部样式，靠 <style id> 注入，不依赖宿主是否编进了某个 class */
export const CARD_STYLE = `
.bs-card{
  --bs-bg:#ffffff;
  --bs-border:rgba(15,23,42,.09);
  --bs-muted:#6b7280;
  --bs-chip:rgba(15,23,42,.045);
  --bs-max:100%;
  position:relative;display:block;width:100%;max-width:var(--bs-max);
  margin:10px 0 12px;border:1px solid var(--bs-border);border-radius:14px;
  background:var(--bs-bg);overflow:hidden;box-shadow:0 1px 2px rgba(15,23,42,.05);
  font-family:inherit;line-height:1.35;text-align:left;-webkit-tap-highlight-color:transparent;
}
html.dark .bs-card,[data-theme="dark"] .bs-card{
  --bs-bg:#17171a;--bs-border:rgba(255,255,255,.09);
  --bs-muted:#a1a1aa;--bs-chip:rgba(255,255,255,.06);box-shadow:none;
}
.bs-card .bs-head{display:flex;align-items:center;gap:6px;padding:7px 10px;
  border-bottom:1px solid var(--bs-border);background:var(--bs-chip);
  font-size:12px;color:var(--bs-muted);}
.bs-card .bs-logo{display:inline-flex;align-items:center;flex:0 0 auto;}
.bs-card .bs-kind{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.bs-card .bs-open{margin-left:auto;display:inline-flex;align-items:center;
  color:var(--bs-muted)!important;text-decoration:none!important;font-size:12px;
  border:1px solid var(--bs-border);border-radius:999px;padding:1px 9px;
  transition:color .15s,border-color .15s,background .15s;touch-action:manipulation;}
.bs-card .bs-open:hover{color:#1DB954!important;border-color:rgba(29,185,84,.5);
  background:rgba(29,185,84,.08);}
.bs-card .bs-frame{position:relative;width:100%;background:#121212;overflow:hidden;}
.bs-card .bs-skeleton{position:absolute;inset:0;display:flex;align-items:center;
  justify-content:center;background:linear-gradient(135deg,#1b1b1d,#101012);}
.bs-card .bs-frame.bs-loaded .bs-skeleton{display:none;}
.bs-card .bs-eq{display:inline-flex;align-items:flex-end;gap:3px;height:18px;}
.bs-card .bs-eq i{display:block;width:3px;height:6px;border-radius:2px;
  background:#1DB954;opacity:.85;animation:bs-eq 1s ease-in-out infinite;}
.bs-card .bs-eq i:nth-child(2){animation-delay:.15s;}
.bs-card .bs-eq i:nth-child(3){animation-delay:.3s;}
.bs-card .bs-eq i:nth-child(4){animation-delay:.45s;}
@keyframes bs-eq{0%,100%{height:5px}50%{height:16px}}
.bs-card .bs-iframe{position:absolute;inset:0;display:block;width:100%;height:100%;
  border:0;background:transparent;}
.bs-card .bs-tip{position:absolute;left:0;right:0;bottom:0;padding:5px 10px;
  font-size:11px;line-height:1.4;color:#d4d4d8;background:rgba(0,0,0,.55);text-align:center;}
/* 原生预览的隐藏交给 inline display:none（见 scanner.addCard），
   不再用 :has() 全局选择器，减少大 DOM 上的样式失效开销 */
@media (max-width:480px){
  .bs-card{border-radius:12px;margin:8px 0 10px;}
  .bs-card .bs-head{padding:6px 8px;font-size:11px;gap:5px;}
  .bs-card .bs-open{padding:2px 8px;font-size:11px;line-height:1.5;}
}

.bs-settings{display:flex;flex-direction:column;gap:12px;padding:4px 2px;font-size:13px;color:inherit;}
.bs-settings .bs-set-title{font-size:14px;font-weight:600;}
.bs-settings .bs-set-desc{font-size:12px;opacity:.6;line-height:1.5;margin-top:-4px;}
.bs-settings .bs-row{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;
  padding:10px 12px;border:1px solid rgba(127,127,127,.22);border-radius:10px;}
.bs-settings .bs-row-label{font-weight:500;}
.bs-settings .bs-row-hint{font-size:12px;opacity:.6;margin-top:3px;line-height:1.45;}
.bs-settings input[type="checkbox"]{width:16px;height:16px;accent-color:#1DB954;flex:0 0 auto;margin-top:2px;cursor:pointer;}
.bs-settings input[type="number"]{width:104px;padding:5px 8px;border-radius:8px;
  border:1px solid rgba(127,127,127,.3);background:transparent;color:inherit;font-size:13px;}
.bs-settings .bs-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:2px;}
.bs-settings button{padding:7px 16px;border-radius:9px;border:1px solid rgba(127,127,127,.28);
  background:transparent;color:inherit;font-size:13px;cursor:pointer;}
.bs-settings button.bs-primary{background:#1DB954;border-color:#1DB954;color:#fff;font-weight:600;}
.bs-settings button:disabled{opacity:.6;cursor:default;}
.bs-settings button:hover:not(:disabled){opacity:.88;}
`;
