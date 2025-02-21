function a(e){const t=typeof e=="string"?parseInt(e,10):e;return isNaN(t)?"0":`${t.toFixed(0).replace(/./g,(r,n,s)=>n&&r!=="."&&(s.length-n)%3===0?`, ${r}`.replace(/\s/g,""):r)}`}export{a as c};
