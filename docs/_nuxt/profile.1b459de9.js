import{_ as V,a as z}from"./Badge.c907a36d.js";import{q as U,s as w,r,x as E,o as m,c as x,h as e,y as A,a,t as g,j as S,z as B,A as j,b as h,w as N,e as L,B as R,C as I,d as C,D as q,l as D,E as M}from"./entry.a64f2650.js";const O={key:2,style:{width:"10em",position:"relative"}},P={class:"button primary block",for:"single"},T=["disabled"],W={__name:"Avatar",props:["path","showUpload"],emits:["update:path","upload","alt"],setup(b,{emit:s}){const o=b,{path:n}=U(o),{alt:d}=U(o),t=w(),l=r(!1),c=r(""),i=r(),f=async()=>{try{const{data:p,error:_}=await t.storage.from("avatars").download(n.value);if(_)throw _;c.value=URL.createObjectURL(p)}catch(p){console.error("Error downloading image: ",p.message)}},u=async p=>{i.value=p.target.files;try{if(l.value=!0,!i.value||i.value.length===0)throw new Error("You must select an image to upload.");const _=i.value[0],v=_.name.split(".").pop(),y=`${`${Math.random()}.${v}`}`,{error:$}=await t.storage.from("avatars").upload(y,_);if($)throw $;s("update:path",y),s("upload")}catch(_){alert(_.message)}finally{l.value=!1}};return f(),E(n,()=>{n.value&&f()}),(p,_)=>{const v=V;return m(),x("div",null,[e(c)?(m(),A(v,{key:0,src:e(c),size:"2xl"},null,8,["src"])):(m(),A(v,{key:1,alt:e(d),size:"2xl"},null,8,["alt"])),p.upload?(m(),x("div",O,[a("label",P,g(e(l)?"Uploading ...":"Upload"),1),a("input",{id:"single",style:{position:"absolute",visibility:"hidden"},type:"file",accept:"image/*",disabled:e(l),onChange:u},null,40,T)])):S("",!0)])}}},Y={class:"text-xl font-bold"},F={class:""},G={__name:"Account",async setup(b){let s,o;const n=w(),d=B(),t=r(!0),l=r(""),c=r(""),i=r(""),f=r("");t.value=!0;const{data:u}=([s,o]=j(()=>n.from("profiles").select("username, website, avatar_url, full_name").eq("id",d.value.id).single()),s=await s,o(),s);return u&&(l.value=u.username,c.value=u.website,i.value=u.avatar_url,f.value=u.full_name),t.value=!1,(p,_)=>{const v=W,k=z,y=L;return m(),x("div",null,[h(v,{path:e(i)},null,8,["path"]),a("h1",Y,g(e(f)),1),a("div",F,g("@"+e(l)),1),a("div",null,g(e(d).email),1),h(y,{to:e(c),target:"_blank"},{default:N(()=>[h(k,{variant:"theme",size:"xs",label:e(c)},null,8,["label"])]),_:1},8,["to"])])}}},H=["onSubmit"],J=a("h1",{class:"text-3xl font-black"}," ההרשמה הגדולה האחת ",-1),K=a("hr",{class:"mb-4 mt-6 border-l-gray-100 dark:border-gray-900"},null,-1),Q=a("p",{class:"my-4 text-lg text-gray-800 dark:text-gray-300"},[C(" כניסה באמצעות "),a("b",null,"קישור פלא"),C(' עם הדוא"ל שלך ')],-1),X=a("span",{class:"text-xs text-gray-400 dark:text-gray-700 block mt-2"}," אין צורך בסיסמה",-1),Z={__name:"Auth",setup(b){const s=w(),o=r(!1),n=r(""),d=async()=>{try{o.value=!0;const{error:t}=await s.auth.signInWithOtp({email:n.value});if(t)throw t;alert("Check your email for the login link!")}catch(t){alert(t.error_description||t.message)}finally{o.value=!1}};return(t,l)=>{const c=q,i=D,f=M;return m(),x("form",{class:"flex items-center justify-center",onSubmit:I(d,["prevent"])},[h(f,{class:"max-w-xl text-center"},{default:N(()=>[J,K,Q,a("div",null,[h(c,{modelValue:e(n),"onUpdate:modelValue":l[0]||(l[0]=u=>R(n)?n.value=u:null),type:"email",placeholder:'הדוא"ל שלך',size:"lg"},null,8,["modelValue"])]),a("div",null,[h(i,{label:e(o)?"טוען":"שלח קישור פלא",disabled:e(o),type:"submit",variant:"solid",class:"mt-2",color:"primary",size:"xl",block:""},null,8,["label","disabled"])]),X]),_:1})],40,H)}}},ee={key:0,class:"container mx-auto pt-20"},te={key:1,class:"min-h-screen flex items-center justify-center relative -mt-10"},oe={__name:"profile",setup(b){const s=B();return(o,n)=>{const d=G,t=Z;return e(s)?(m(),x("div",ee,[h(d)])):(m(),x("div",te,[h(t)]))}}};export{oe as default};