import{u as U,_ as M,a as R,b as T}from"./Container.bdcd2033.js";import{q as x,r as p,s as D,o as f,c as b,h as s,x as O,a as u,t as A,j as B,y as E,z as F,b as h,w as L,e as P,_ as G,m as H,A as W,B as v,C as J,D as y,E as Y,g as K,F as k,G as Q,H as N,n as C,I as X,J as Z,d as q,l as ee}from"./entry.9faa54b8.js";const ae={key:2,style:{width:"10em",position:"relative"}},ne={class:"button primary block",for:"single"},te=["disabled"],le={__name:"Avatar",props:["path","showUpload"],emits:["update:path","upload","alt"],setup(e,{emit:n}){const o=e,{path:l}=x(o),{alt:a}=x(o),t=U(),i=p(!1),r=p(""),g=p(),c=async()=>{try{const{data:_,error:m}=await t.storage.from("avatars").download(l.value);if(m)throw m;r.value=URL.createObjectURL(_)}catch(_){console.error("Error downloading image: ",_.message)}},d=async _=>{g.value=_.target.files;try{if(i.value=!0,!g.value||g.value.length===0)throw new Error("You must select an image to upload.");const m=g.value[0],I=m.name.split(".").pop(),w=`${`${Math.random()}.${I}`}`,{error:S}=await t.storage.from("avatars").upload(w,m);if(S)throw S;n("update:path",w),n("upload")}catch(m){alert(m.message)}finally{i.value=!1}};return c(),D(l,()=>{l.value&&c()}),(_,m)=>{const I=M;return f(),b("div",null,[s(r)?(f(),O(I,{key:0,src:s(r),size:"2xl"},null,8,["src"])):(f(),O(I,{key:1,alt:s(a),size:"2xl"},null,8,["alt"])),_.upload?(f(),b("div",ae,[u("label",ne,A(s(i)?"Uploading ...":"Upload"),1),u("input",{id:"single",style:{position:"absolute",visibility:"hidden"},type:"file",accept:"image/*",disabled:s(i),onChange:d},null,40,te)])):B("",!0)])}}},oe={class:"text-xl font-bold"},ie={class:""},se={__name:"Account",async setup(e){let n,o;const l=U(),a=E(),t=p(!0),i=p(""),r=p(""),g=p(""),c=p("");t.value=!0;const{data:d}=([n,o]=F(()=>l.from("profiles").select("username, website, avatar_url, full_name").eq("id",a.value.id).single()),n=await n,o(),n);return d&&(i.value=d.username,r.value=d.website,g.value=d.avatar_url,c.value=d.full_name),t.value=!1,(_,m)=>{const I=le,z=R,w=P;return f(),b("div",null,[h(I,{path:s(g)},null,8,["path"]),u("h1",oe,A(s(c)),1),u("div",ie,A("@"+s(i)),1),u("div",null,A(s(a).email),1),h(w,{to:s(r),target:"_blank"},{default:L(()=>[h(z,{variant:"theme",size:"xs",label:s(r)},null,8,["label"])]),_:1},8,["to"])])}}},re=H({components:{UIcon:W},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>v.ui.input.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>v.ui.input.default.size,validator(e){return Object.keys(v.ui.input.size).includes(e)}},color:{type:String,default:()=>v.ui.input.default.color,validator(e){return[...v.ui.colors,...Object.keys(v.ui.input.color)].includes(e)}},variant:{type:String,default:()=>v.ui.input.default.variant,validator(e){return[...Object.keys(v.ui.input.variant),...Object.values(v.ui.input.color).flatMap(n=>Object.keys(n))].includes(e)}},ui:{type:Object,default:()=>v.ui.input}},emits:["update:modelValue"],setup(e,{emit:n,slots:o}){const l=J(),a=y(()=>Y({},e.ui,l.ui.input)),t=p(null),i=()=>{var $;e.autofocus&&(($=t.value)==null||$.focus())},r=$=>{n("update:modelValue",$.target.value)};K(()=>{setTimeout(()=>{i()},100)});const g=y(()=>{var V,j;const $=((j=(V=a.value.color)==null?void 0:V[e.color])==null?void 0:j[e.variant])||a.value.variant[e.variant];return k(a.value.base,a.value.rounded,a.value.placeholder,a.value.size[e.size],e.padded?a.value.padding[e.size]:"p-0",$==null?void 0:$.replaceAll("{color}",e.color),(c.value||o.leading)&&a.value.leading.padding[e.size],(d.value||o.trailing)&&a.value.trailing.padding[e.size])}),c=y(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=y(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=y(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),m=y(()=>e.loading&&!c.value?e.loadingIcon:e.trailingIcon||e.icon),I=y(()=>k(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[e.size])),z=y(()=>k(a.value.icon.base,l.ui.colors.includes(e.color)&&a.value.icon.color.replaceAll("{color}",e.color),a.value.icon.size[e.size],e.loading&&"animate-spin")),w=y(()=>k(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[e.size])),S=y(()=>k(a.value.icon.base,l.ui.colors.includes(e.color)&&a.value.icon.color.replaceAll("{color}",e.color),a.value.icon.size[e.size],e.loading&&!c.value&&"animate-spin"));return{ui:a,input:t,isLeading:c,isTrailing:d,inputClass:g,leadingIconName:_,leadingIconClass:z,leadingWrapperIconClass:I,trailingIconName:m,trailingIconClass:S,trailingWrapperIconClass:w,onInput:r}}}),ue=["id","name","value","type","required","placeholder","disabled"];function ce(e,n,o,l,a,t){const i=W;return f(),b("div",{class:C(e.ui.wrapper)},[u("input",Q({id:e.name,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.$attrs,{onInput:n[0]||(n[0]=(...r)=>e.onInput&&e.onInput(...r))}),null,16,ue),N(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(f(),b("span",{key:0,class:C(e.leadingWrapperIconClass)},[N(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[h(i,{name:e.leadingIconName,class:C(e.leadingIconClass)},null,8,["name","class"])])],2)):B("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(f(),b("span",{key:1,class:C(e.trailingWrapperIconClass)},[N(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[h(i,{name:e.trailingIconName,class:C(e.trailingIconClass)},null,8,["name","class"])])],2)):B("",!0)],2)}const de=G(re,[["render",ce]]),ge=["onSubmit"],me=u("h1",{class:"text-3xl font-black"}," ההרשמה הגדולה האחת ",-1),pe=u("hr",{class:"mb-4 mt-6 border-l-gray-100 dark:border-gray-900"},null,-1),fe=u("p",{class:"my-4 text-lg text-gray-800 dark:text-gray-300"},[q(" כניסה באמצעות "),u("b",null,"קישור פלא"),q(' עם הדוא"ל שלך ')],-1),_e=u("span",{class:"text-xs text-gray-400 dark:text-gray-700 block mt-2"}," אין צורך בסיסמה",-1),ve={__name:"Auth",setup(e){const n=U(),o=p(!1),l=p(""),a=async()=>{try{o.value=!0;const{error:t}=await n.auth.signInWithOtp({email:l.value});if(t)throw t;alert("Check your email for the login link!")}catch(t){alert(t.error_description||t.message)}finally{o.value=!1}};return(t,i)=>{const r=de,g=ee,c=T;return f(),b("form",{class:"flex items-center justify-center",onSubmit:Z(a,["prevent"])},[h(c,{class:"max-w-xl text-center"},{default:L(()=>[me,pe,fe,u("div",null,[h(r,{modelValue:s(l),"onUpdate:modelValue":i[0]||(i[0]=d=>X(l)?l.value=d:null),type:"email",placeholder:'הדוא"ל שלך',size:"lg"},null,8,["modelValue"])]),u("div",null,[h(g,{label:s(o)?"טוען":"שלח קישור פלא",disabled:s(o),type:"submit",variant:"solid",class:"mt-2",color:"primary",size:"xl",block:""},null,8,["label","disabled"])]),_e]),_:1})],40,ge)}}},ye={key:0,class:"container mx-auto pt-20"},he={key:1,class:"min-h-screen flex items-center justify-center relative -mt-10"},$e={__name:"profile",setup(e){const n=E();return(o,l)=>{const a=se,t=ve;return s(n)?(f(),b("div",ye,[h(a)])):(f(),b("div",he,[h(t)]))}}};export{$e as default};