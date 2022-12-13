(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[9],{1978:function(e,t,n){},1979:function(e,t,n){},2038:function(e,t,n){"use strict";n.r(t);var c,i=n(95),r=n(70),o=n(20),a=n(33),s=n(48),l=n(10),d=n(2),u=n(127),b=n(1951),j=n(1948),f=n(85),O=n(90),h=n(55),x=n(37),g=n(40),p=n(794),m=n(1),v=n(42),y=n(604),w=n(432),k=n(125),P=n(510),S=n(557),E=(n(194),n(1978),n(0));!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.PREV_LISTING=2]="PREV_LISTING"}(c||(c={}));var I,C=function(e){var t=e.selectedMarkets,n=Object(x.m)((function(e){return e.sellAssets})),i=Object(m.useState)(),r=Object(l.a)(i,2),o=r[0],a=r[1],d=Object(m.useState)(),u=Object(l.a)(d,2),b=u[0],j=u[1],f=Object(m.useMemo)((function(){return[{displayText:"Same price",onClick:function(){return a(c.SAME_PRICE)}},{displayText:"Floor price",onClick:function(){return a(c.FLOOR_PRICE)}},{displayText:"Prev. listing",onClick:function(){return a(c.PREV_LISTING)}}]}),[]);return Object(E.jsxs)(s.b,{children:[Object(E.jsxs)(s.c,{marginTop:"20",children:[Object(E.jsx)(s.b,{marginLeft:t.length>1?"36":"0",transition:"500",className:O.c,color:"textSecondary",flex:"2",children:"NFT"}),Object(E.jsxs)(s.c,{flex:{sm:"1.5",md:"3"},children:[Object(E.jsx)(s.b,{className:O.m,flex:"1.5",children:Object(E.jsx)(y.b,{dropDownOptions:f,mini:!0,miniPrompt:"Set price by"})}),Object(E.jsx)(s.b,{className:O.c,color:"textSecondary",flex:"1",display:{sm:"none",md:"flex"},textAlign:"right",children:"Marketplace fee"}),Object(E.jsx)(s.b,{className:O.c,color:"textSecondary",flex:"1",display:{sm:"none",md:"flex"},textAlign:"right",children:"Royalties"}),Object(E.jsx)(s.b,{className:O.c,color:"textSecondary",style:{flex:"1.5"},display:{sm:"none",md:"flex"},textAlign:"right",children:"You receive"})]})]}),n.map((function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(_,{asset:e,globalPriceMethod:o,globalPrice:b,setGlobalPrice:j,selectedMarkets:t}),n.indexOf(e)<n.length-1&&Object(E.jsx)("hr",{className:"rgw6ez169 rgw6ez153 rgw6ez7b9 rgw6ez7j1 rgw6ez79p rgw6ez4y3"})]})}))]})};!function(e){e.BELOW_FLOOR="LISTING BELOW FLOOR ",e.ALREADY_LISTED="ALREADY LISTED FOR ",e.NONE=""}(I||(I={}));var N=function(e){var t=e.listPrice,n=e.setListPrice,c=e.isGlobalPrice,i=e.setGlobalOverride,r=e.globalOverride,o=e.warning,d=e.asset,u=Object(m.useState)(!1),b=Object(l.a)(u,2),j=b[0],h=b[1],g=Object(m.useState)(I.NONE),p=Object(l.a)(g,2),v=p[0],y=p[1],k=Object(x.m)((function(e){return e.removeMarketplaceWarning})),S=Object(x.m)((function(e){return e.removeSellAsset})),C=Object(m.useRef)();return Object(m.useEffect)((function(){C.current.value=void 0!==t?"".concat(t):"",y(I.NONE),!o&&t?t<d.floorPrice?y(I.BELOW_FLOOR):d.floor_sell_order_price&&t>=d.floor_sell_order_price&&y(I.ALREADY_LISTED):o&&t&&t>=0&&k(d,o)}),[t]),Object(E.jsxs)(s.b,{gap:"12",position:"relative",children:[Object(E.jsxs)(s.c,{color:"textTertiary",height:"44",width:"min",padding:"4",borderRadius:"8",borderWidth:"1px",borderStyle:"solid",borderColor:v===I.NONE||j?c?"genieBlue":null!=t?"textSecondary":"gray700":"orange",children:[Object(E.jsx)(w.b,{as:"input",pattern:"[0-9]",borderStyle:"none",className:O.b,color:{placeholder:"textSecondary",default:"textPrimary"},placeholder:"0",marginRight:"0",marginLeft:"14",backgroundColor:"none",style:{width:"68px"},onFocus:function(){return h(!0)},onBlur:function(){h(!1)},ref:C,onChange:function(e){if(t||"0."!==e.currentTarget.value){var c=parseFloat(e.currentTarget.value);n(isNaN(c)?void 0:c)}}}),Object(E.jsx)(a.b,{color:t&&t>=0?"textPrimary":"textSecondary",marginRight:"16",children:"\xa0ETH"}),Object(E.jsx)(a.b,{cursor:"pointer",display:c||r?"block":"none",position:"absolute",style:{marginTop:"-36px",marginLeft:"124px"},backgroundColor:"backgroundSurface",onClick:function(){return i(!r)},children:r?Object(E.jsx)(f.h,{}):Object(E.jsx)(f.v,{})})]}),Object(E.jsx)(s.c,{top:"52",width:"max",className:O.a,color:v!==I.BELOW_FLOOR||j?"textSecondary":"orange",position:"absolute",children:j?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(s.c,{display:d.lastPrice?"flex":"none",marginRight:"8",children:["LAST: ",Object(P.b)(d.lastPrice)," ETH"]}),Object(E.jsxs)(s.c,{display:d.floorPrice?"flex":"none",children:["FLOOR: ",Object(P.b)(d.floorPrice)," ETH"]})]}):Object(E.jsx)(E.Fragment,{children:o?o.message:v!==I.NONE&&Object(E.jsxs)(E.Fragment,{children:[v,v===I.BELOW_FLOOR?Object(P.b)(d.floorPrice):Object(P.b)(d.floor_sell_order_price),"ETH",Object(E.jsx)(a.b,{color:v===I.BELOW_FLOOR?"genieBlue":"orange",marginLeft:"8",cursor:"pointer",onClick:function(){v===I.ALREADY_LISTED&&S(d),y(I.NONE)},children:v===I.BELOW_FLOOR?"DISMISS":"REMOVE ITEM"})]})})})]})},L=function(e){var t=e.ethPrice,n=void 0===t?0:t,c=Object(m.useState)(3e3),i=Object(l.a)(c,2),r=i[0],o=i[1];return Object(m.useEffect)((function(){Object(S.a)().then((function(e){o(null!==e&&void 0!==e?e:0)}))}),[]),Object(E.jsx)(s.b,{width:"full",children:Object(E.jsx)(s.c,{width:"full",justifyContent:"flex-end",children:0!==n?Object(E.jsx)(a.b,{className:O.b,color:"textSecondary",marginLeft:"12",marginRight:"0",children:Object(P.e)(n*r)}):"- ETH"})})};var M,R,A=function(e){var t,n=e.globalPriceMethod,i=e.globalPrice,r=e.setGlobalPrice,o=e.selectedMarkets,d=e.removeMarket,u=void 0===d?void 0:d,b=e.asset,j=e.showMarketplaceLogo,f=Object(m.useState)(),h=Object(l.a)(f,2),g=h[0],p=h[1],y=Object(m.useState)(!1),w=Object(l.a)(y,2),S=w[0],I=w[1],C=n===c.SAME_PRICE&&!S&&i,M=Object(x.m)((function(e){return e.setAssetListPrice})),R=Object(x.m)((function(e){return e.removeAssetMarketplace})),A=Object(m.useState)(!1),_=Object(l.a)(A,2),T=_[0],F=_[1],D=function(){return F(!T)},G=o.length>0?function(e){var t=-1;return e.forEach((function(e){e.fee>t&&(t=e.fee)})),t}(o):0,W=C?i:g,B=.01*(1===o.length&&"LooksRare"===o[0].name?k.a:b.basisPoints),z=W&&W*(B+G)/100,q=W&&z&&W-z,V=q&&b.lastPrice&&q-b.lastPrice,H=V&&b.lastPrice&&Math.round(V&&V/b.lastPrice*100);Object(m.useEffect)((function(){n===c.FLOOR_PRICE?(p(b.floorPrice),r(b.floorPrice)):n===c.PREV_LISTING?(p(b.lastPrice),r(b.lastPrice)):n===c.SAME_PRICE&&(g&&!i?r(g):p(i)),I(!1)}),[n]),Object(m.useEffect)((function(){if(o.length){var e,t=Object(v.a)(o);try{for(t.s();!(e=t.n()).done;){var n=e.value;M(b,g,n)}}catch(c){t.e(c)}finally{t.f()}}else M(b,g)}),[g]),Object(m.useEffect)((function(){var e=void 0;if(S?(g||p(i),e=g||i):e=i,o.length){var t,n=Object(v.a)(o);try{for(n.s();!(t=n.n()).done;){var c=t.value;M(b,e,c)}}catch(r){n.e(r)}finally{n.f()}}else M(b,e)}),[S]),Object(m.useEffect)((function(){if(n===c.SAME_PRICE&&!S)if(o.length){var e,t=Object(v.a)(o);try{for(t.s();!(e=t.n()).done;){var r=e.value;M(b,i,r)}}catch(a){t.e(a)}finally{t.f()}}else M(b,i)}),[i]);var U=void 0;if(b.listingWarnings&&(null===(t=b.listingWarnings)||void 0===t?void 0:t.length)>0)if(j){var Y,J=Object(v.a)(b.listingWarnings);try{for(J.s();!(Y=J.n()).done;){var K=Y.value;K.marketplace.name===o[0].name&&(U=K)}}catch(X){J.e(X)}finally{J.f()}}else U=b.listingWarnings[0];return Object(E.jsxs)(s.c,{transition:"500",marginLeft:o.length>1?"20":"0",children:[j&&Object(E.jsxs)(s.b,{position:"relative",cursor:"pointer",onMouseEnter:D,onMouseLeave:D,style:{marginLeft:"-28px"},onClick:function(e){e.stopPropagation(),R(b,o[0]),u&&u()},children:[Object(E.jsx)(a.b,{className:"_1olqq4n7",visibility:T?"visible":"hidden",position:"absolute",children:Object(E.jsx)(a.b,{as:"img",width:"32",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})}),Object(E.jsx)(a.b,{as:"img",alt:o[0].name,width:"28",height:"28",borderRadius:"4",objectFit:"cover",src:o[0].icon,marginRight:"16"})]}),Object(E.jsx)(s.b,{style:{flex:"1.5"},children:n!==c.SAME_PRICE||S?Object(E.jsx)(N,{listPrice:g,setListPrice:p,isGlobalPrice:!1,setGlobalOverride:I,globalOverride:S,warning:U,asset:b}):Object(E.jsx)(N,{listPrice:i,setListPrice:r,isGlobalPrice:!0,setGlobalOverride:I,globalOverride:S,warning:U,asset:b})}),Object(E.jsx)(s.c,{flex:"1",display:{sm:"none",md:"flex"},children:Object(E.jsx)(a.b,{className:O.b,color:"textSecondary",width:"full",textAlign:"right",children:G>0?G+(o.length>1?"% MAX":"%"):"--%"})}),Object(E.jsx)(s.c,{flex:"1",display:{sm:"none",md:"flex"},children:Object(E.jsxs)(a.b,{className:O.b,color:"textSecondary",width:"full",textAlign:"right",children:[B.toFixed(1),"%"]})}),Object(E.jsx)(s.c,{style:{flex:"1.5"},display:{sm:"none",md:"flex"},children:Object(E.jsxs)(s.b,{width:"full",children:[Object(E.jsx)(L,{ethPrice:q}),(C?i&&0!==i:0!==g)&&Object(E.jsxs)(s.c,{marginTop:"4",width:"full",fontSize:"12",color:"textSecondary",children:[V?Object(E.jsxs)(a.b,{marginLeft:"auto",children:["Profit: ",Object(P.b)(V)," ETH"]}):null,H?Object(E.jsxs)(a.b,{marginLeft:"8",marginRight:"0",children:["(",H>0&&"+",H>1e3?Math.round(H/1e3)+"K":H,"%)"]}):null]})]})})]})},_=function(e){var t,n=e.asset,c=e.globalPriceMethod,i=e.globalPrice,r=e.setGlobalPrice,o=e.selectedMarkets,d=Object(m.useState)(!1),u=Object(l.a)(d,2),b=u[0],j=u[1],h=Object(x.m)((function(e){return e.removeSellAsset})),g=Object(m.useState)([]),p=Object(l.a)(g,2),v=p[0],y=p[1],w=Object(m.useState)(!1),k=Object(l.a)(w,2),P=k[0],S=k[1],I=function(){return S(!P)};return Object(m.useEffect)((function(){y(JSON.parse(JSON.stringify(o))),o.length<2&&j(!1)}),[o]),Object(E.jsxs)(s.c,{marginTop:"24",marginBottom:"24",children:[Object(E.jsxs)(s.c,{flexWrap:"nowrap",flex:"2",marginTop:"0",marginBottom:"auto",minWidth:"0",children:[Object(E.jsx)(a.b,{transition:"500",style:{maxWidth:v.length>1?"28px":"0",opacity:v.length>1?"1":"0"},cursor:"pointer",onClick:function(){return j(!b)},children:b?Object(E.jsx)(f.O,{}):Object(E.jsx)(f.N,{})}),Object(E.jsxs)(a.b,{position:"relative",cursor:"pointer",onMouseEnter:I,onMouseLeave:I,onClick:function(){h(n)},children:[Object(E.jsx)(a.b,{className:"_1olqq4n6",visibility:P?"visible":"hidden",position:"absolute",children:Object(E.jsx)(a.b,{as:"img",width:"32",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})}),Object(E.jsx)(a.b,{as:"img",alt:n.name,width:"48",height:"48",borderRadius:"8",marginLeft:v.length>1?"8":"0",marginRight:"8",transition:"500",src:n.imageUrl||"/nft/svgs/image-placeholder.svg"})]}),Object(E.jsxs)(s.b,{gap:"4",minWidth:"0",children:[Object(E.jsx)(a.b,{paddingRight:"8",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",className:O.m,children:n.name?n.name:"#".concat(n.tokenId)}),Object(E.jsxs)(a.b,{paddingRight:"8",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",className:O.c,children:[null===(t=n.collection)||void 0===t?void 0:t.name,n.collectionIsVerified&&Object(E.jsx)(f.U,{style:{marginBottom:"-5px"}})]})]})]}),Object(E.jsx)(s.b,{flex:{sm:"1",md:"3"},gap:"24",children:b?v.map((function(e,t){return Object(E.jsx)(A,{globalPriceMethod:c,globalPrice:i,setGlobalPrice:r,selectedMarkets:[e],removeMarket:function(){return v.splice(t,1)},asset:n,showMarketplaceLogo:!0},t)})):Object(E.jsx)(A,{globalPriceMethod:c,globalPrice:i,setGlobalPrice:r,selectedMarkets:v,asset:n,showMarketplaceLogo:!1})})]})},T=n(24),F=n(277),D=n(392),G=n(12),W=n(214),B=Object(d.default)(s.c).withConfig({componentId:"sc-ak53ch-0"})(["gap:6px;height:44px;width:100%;cursor:pointer;justify-content:space-between;padding:0px 16px;&:hover{background-color:",";}border-radius:12px;"],(function(e){return e.theme.backgroundInteractive})),z=d.default.img.withConfig({componentId:"sc-ak53ch-1"})(["width:24px;height:24px;border-radius:4px;object-fit:cover;"]),q=d.default.div.withConfig({componentId:"sc-ak53ch-2"})(["color:",";"],(function(e){return e.theme.textSecondary})),V=Object(d.default)(s.c).withConfig({componentId:"sc-ak53ch-3"})(["padding:12px;border-radius:12px;width:180px;justify-content:space-between;background:",";cursor:pointer;&:hover{background-color:",";}@media screen and (min-width:","){width:220px;}"],(function(e){return e.theme.backgroundModule}),(function(e){return e.theme.backgroundInteractive}),u.e),H=d.default.div.withConfig({componentId:"sc-ak53ch-4"})(["display:flex;"]),U=d.default.img.withConfig({componentId:"sc-ak53ch-5"})(["height:20px;width:20px;margin-right:8px;border:1px solid;border-color:",";border-radius:4px;z-index:",";margin-left:",";"],(function(e){return e.theme.backgroundInteractive}),(function(e){var t=e.index;return e.totalSelected-t}),(function(e){var t=e.index;return"".concat(0===t?0:-18,"px")})),Y=Object(d.default)(f.q).withConfig({componentId:"sc-ak53ch-6"})(["height:20px;width:20px;fill:",";transition:",";transform:",";"],(function(e){return e.theme.textPrimary}),(function(e){var t=e.theme.transition.duration;return"".concat(t.fast," transform")}),(function(e){var t=e.isOpen;return"rotate(".concat(t?0:180,"deg)")})),J=d.default.div.withConfig({componentId:"sc-ak53ch-7"})(["display:flex;flex-direction:column;position:relative;"]),K=Object(d.default)(s.b).withConfig({componentId:"sc-ak53ch-8"})(["padding:16px 0px;background-color:",";display:",";position:absolute;top:52px;width:100%;border-radius:12px;gap:12px;z-index:",";"],(function(e){return e.theme.backgroundModule}),(function(e){return e.isOpen?"flex":"none"}),W.a.modalBackdrop),X=function(e){var t=e.setSelectedMarkets,n=e.selectedMarkets,c=Object(m.useReducer)((function(e){return!e}),!1),i=Object(l.a)(c,2),r=i[0],o=i[1],a=Object(m.useMemo)((function(){return 1===n.length?n[0].name:"Multiple"}),[n]),d=Object(m.useRef)(null);return Object(F.a)(d,(function(){return r&&o()})),Object(E.jsxs)(J,{ref:d,children:[Object(E.jsxs)(V,{className:O.e,onClick:o,children:[Object(E.jsxs)(H,{children:[n.map((function(e,t){return Object(E.jsx)(U,{alt:e.name,src:e.icon,totalSelected:n.length,index:t},t)})),a]}),Object(E.jsx)(Y,{isOpen:r,secondaryColor:h.c.colors.textPrimary})]}),Object(E.jsx)(K,{isOpen:r,children:p.b.map((function(e){return function(e){var t=e.market,n=e.setSelectedMarkets,c=e.selectedMarkets,i=c.includes(t),r=Object(m.useReducer)((function(e){return!e}),!1),o=Object(l.a)(r,2),a=o[0],d=o[1],u=function(){1===c.length&&i||n(i?c.filter((function(e){return e!==t})):[].concat(Object(T.a)(c),[t]))};return Object(E.jsxs)(B,{onMouseEnter:d,onMouseLeave:d,onClick:u,children:[Object(E.jsxs)(s.c,{gap:"12",onClick:u,children:[Object(E.jsx)(z,{alt:t.name,src:t.icon}),Object(E.jsxs)(s.b,{children:[Object(E.jsx)(G.s.BodyPrimary,{children:t.name}),Object(E.jsxs)(q,{className:O.g,children:[t.fee,"% fee"]})]})]}),Object(E.jsx)(D.a,{hovered:a,checked:i,onClick:function(e){e.preventDefault(),e.stopPropagation()},children:Object(E.jsx)("span",{})})]})}({market:e,setSelectedMarkets:t,selectedMarkets:n})}))})]})},Q=n(258),Z=n(1088),$=Object(d.default)(s.b).withConfig({componentId:"sc-1d5ev1f-0"})(["gap:4px;position:relative;"]),ee=Object(d.default)(s.c).withConfig({componentId:"sc-1d5ev1f-1"})(["padding:12px 8px 12px 12px;border:1px solid;position:relative;height:44px;border-radius:8px;border-color:",";"],(function(e){var t=e.isInvalid,n=e.theme;return t?n.accentCritical:n.backgroundOutline})),te=Object(d.default)(G.s.BodyPrimary).withConfig({componentId:"sc-1d5ev1f-2"})(["cursor:pointer;display:flex;justify-content:flex-end;height:min-content;width:80px;&:hover{background-color:",";}border-radius:12px;padding:8px;"],(function(e){return e.theme.backgroundInteractive})),ne=Object(d.default)(s.c).withConfig({componentId:"sc-1d5ev1f-3"})(["color:",";gap:4px;position:absolute;top:44px;"],(function(e){return e.theme.accentCritical})),ce=Object(d.default)(Z.a).withConfig({componentId:"sc-1d5ev1f-4"})(["width:16px;color:",";"],(function(e){return e.theme.accentCritical}));!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(M||(M={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(R||(R={}));var ie=function(){var e=Object(m.useState)(M.day),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(m.useState)(M.day),r=Object(l.a)(i,2),o=r[0],a=r[1],s=Object(m.useState)(7),d=Object(l.a)(s,2),u=d[0],b=d[1],j=Object(m.useState)(R.valid),f=Object(l.a)(j,2),h=f[0],g=f[1],p=Object(x.m)((function(e){return e.setGlobalExpiration})),v=function(e){c(e),a(e)},k=Object(m.useMemo)((function(){return[{displayText:"Hours",onClick:function(){return v(M.hour)}},{displayText:"Days",onClick:function(){return v(M.day)}},{displayText:"Weeks",onClick:function(){return v(M.week)}},{displayText:"Months",onClick:function(){return v(M.month)}}]}),[]);return Object(m.useEffect)((function(){var e=re(u,n);1e3*e-Date.now()<6e4?g(R.empty):1e3*e-Date.now()>15552e6?g(R.overMax):g(R.valid),p(e)}),[u,n,p]),Object(E.jsxs)($,{children:[Object(E.jsxs)(ee,{isInvalid:h!==R.valid,children:[Object(E.jsx)(w.b,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:O.c,color:{placeholder:"textSecondary",default:"textPrimary"},value:u,width:"32",marginRight:"4",backgroundColor:"none",onChange:function(e){b(e.target.value.length?parseFloat(e.target.value):0),c(o)},flexShrink:"0"}),Object(E.jsx)(te,{className:O.e,children:Object(E.jsx)(y.b,{dropDownOptions:k,mini:!0,miniPrompt:o+(o===n?Object(Q.a)(u):"s"),left:38,top:38})})]}),h!==R.valid&&Object(E.jsxs)(ne,{className:O.g,children:[" ",Object(E.jsx)(ce,{})," ",h===R.overMax?"Maximum 6 months":"Set duration"]})]})},re=function(e,t){return Math.round((Date.now()+36e5*function(){switch(t){case M.hour:return 1;case M.day:return 24;case M.week:return 168;default:return 720}}()*e)/1e3)},oe=d.default.section.withConfig({componentId:"sc-1th7sa1-0"})(["gap:48px;margin:0px auto;padding:0px 16px;max-width:1200px;width:100%;@media screen and (min-width:","){padding:0px 44px;}"],u.e),ae=Object(d.default)(s.c).withConfig({componentId:"sc-1th7sa1-1"})(["align-items:center;justify-content:space-between;flex-wrap:wrap;margin-top:18px;@media screen and (min-width:","){margin-top:40px;}"],u.e),se=d.default.div.withConfig({componentId:"sc-1th7sa1-2"})(["margin-top:24px;@media screen and (min-width:","){margin-left:40px;}"],u.e),le=d.default.div.withConfig({componentId:"sc-1th7sa1-3"})(["display:flex;margin:14px 16px 32px 16px;@media screen and (min-width:","){display:none;}"],u.e),de=function(){var e=Object(x.l)().setProfilePageState,t=Object(x.m)((function(e){return e.setGlobalMarketplaces})),n=Object(m.useState)([p.b[0]]),c=Object(l.a)(n,2),i=c[0],r=c[1],o=Object(x.f)((function(e){return e.toggleBag})),a=Object(x.k)((function(e){return e.listings})),d=Object(x.k)((function(e){return e.collectionsRequiringApproval})),u=Object(x.k)((function(e){return e.listingStatus})),v=Object(x.k)((function(e){return e.setListingStatus})),y=Object(x.j)();return Object(m.useEffect)((function(){var e=Object(j.b)(d,a);e.allListingsApproved?v(g.f.APPROVED):!e.anyPaused||e.anyActiveFailures||e.anyActiveSigning||e.anyActiveRejections?e.anyPaused?v(g.f.PAUSED):e.anyActiveSigning?v(g.f.SIGNING):e.allListingsPending||e.allCollectionsPending&&e.allListingsDefined?v(g.f.PENDING):e.anyActiveFailures&&u!==g.f.PAUSED&&v(g.f.FAILED):v(g.f.CONTINUE)}),[a,d]),Object(m.useEffect)((function(){t(i)}),[i]),Object(E.jsxs)(s.b,{children:[Object(E.jsxs)(oe,{children:[Object(E.jsxs)(ae,{children:[Object(E.jsxs)(s.c,{gap:"4",marginBottom:{sm:"18",md:"0"},children:[Object(E.jsx)(f.i,{height:y?20:32,width:y?20:32,fill:h.c.colors.textSecondary,onClick:function(){return e(g.i.VIEWING)},cursor:"pointer"}),Object(E.jsx)("div",{className:y?O.k:O.i,children:"Sell NFTs"})]}),Object(E.jsxs)(s.c,{gap:"12",children:[Object(E.jsx)(X,{setSelectedMarkets:r,selectedMarkets:i}),Object(E.jsx)(ie,{})]})]}),Object(E.jsx)(se,{children:Object(E.jsx)(C,{selectedMarkets:i})})]}),Object(E.jsx)(le,{children:Object(E.jsx)(b.a,{onClick:o,buttonText:"Continue listing"})})]})},ue=n(627),be=n(625),je=n(92),fe=(n(1979),function(){var e=Object(x.l)((function(e){return e.state})),t=Object(x.l)((function(e){return e.setProfilePageState})),n=Object(x.m)((function(e){return e.removeAllMarketplaceWarnings})),c=Object(x.m)((function(e){return e.reset})),l=Object(x.q)((function(e){return e.clearCollectionFilters})),d=Object(x.k)((function(e){return e.setListingStatus}));Object(m.useEffect)((function(){n(),d(g.f.DEFINED)}),[n,e,d]);var u=Object(o.useWeb3React)().account,b=Object(m.useRef)(u),j=Object(je.o)();Object(m.useEffect)((function(){b.current!==u&&(b.current=u,c(),t(g.i.VIEWING),l())}),[u,c,t,l]);var f=Object(x.f)((function(e){return e.bagExpanded}));return Object(E.jsx)(i.Trace,{page:r.PageName.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:Object(E.jsx)(a.b,{className:"_1vdfgqr4 rgw6ez1br rgw6ez1cm rgw6ez153",children:u?Object(E.jsx)(a.b,{style:{width:"calc(100% - ".concat(f?360:0,"px)")},children:e===g.i.VIEWING?Object(E.jsx)(ue.b,{}):Object(E.jsx)(de,{})}):Object(E.jsx)(s.b,{as:"section",gap:"60",className:"_1vdfgqr1 rgw6ez2al rgw6ez295 rgw6ez2g3 rgw6ez2en",children:Object(E.jsx)("div",{style:{minHeight:"70vh"},children:Object(E.jsxs)(s.a,{className:"_1vdfgqr2",flexDirection:"column",children:[Object(E.jsx)(a.b,{as:"span",className:O.j,color:"textSecondary",marginBottom:"24",display:"block",children:"No items to display"}),Object(E.jsx)(a.b,{as:"button",className:O.d,onClick:j,children:"Connect Wallet"})]})})})})})});t.default=function(){return Object(E.jsx)(m.Suspense,{fallback:Object(E.jsx)(be.b,{}),children:Object(E.jsx)(fe,{})})}}}]);
//# sourceMappingURL=9.959dac08.chunk.js.map