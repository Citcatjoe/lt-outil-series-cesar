(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/cross.52eba50b.svg"},24:function(e,t,a){e.exports=a.p+"static/media/favicon-lt.418e31ac.svg"},28:function(e,t,a){e.exports=a.p+"static/media/filter.7a0aa683.svg"},29:function(e,t,a){e.exports=a.p+"static/media/manifier.fb52c751.svg"},30:function(e,t,a){e.exports=a.p+"static/media/angle.8169ec21.svg"},31:function(e,t,a){e.exports=a.p+"static/media/aside-footer-bg.e1ffebce.svg"},32:function(e,t,a){e.exports=a.p+"static/media/aside-bg-1.9cebe77f.png"},33:function(e,t,a){e.exports=a.p+"static/media/no-results.0033cc21.svg"},36:function(e,t,a){e.exports=a(92)},41:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(10),i=a.n(n),r=(a(41),a(3)),c=a(4),o=a(6),u=a(5),m=a(7),d=a(2),b=a(11),p=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.frameVisible,t=this.props.children;return s.a.createElement("div",{className:"frame ".concat(e?"is-visible":"")},t)}}]),t}(l.Component),h=a(12),f=a.n(h),v=a(24),g=a.n(v),O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(!this.props.item)return!1;var e={background:"url("+this.props.item.np8_main_media+")"};return s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content-background",style:e}),s.a.createElement("div",{className:"content-gradient"}),s.a.createElement("div",{className:"content-details"},s.a.createElement("div",{className:"content-details-header"},s.a.createElement("button",{className:"content-close",onClick:this.props.articleClose},"Fermer")),s.a.createElement("div",{className:"content-details-body"},s.a.createElement("div",{className:"content-details-body-col1"},s.a.createElement("img",{src:this.props.item.np8_main_media,alt:""})),s.a.createElement("div",{className:"content-details-body-col2"},s.a.createElement("h1",{className:"body-h1"},this.props.item.title),s.a.createElement("span",{className:"body-highlighted"},this.props.item.lt_tv_show_genre),s.a.createElement("div",{className:"body-p"},f()(this.props.item.body)),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("span",{className:"col1"},"Ann\xe9es prod. :"),s.a.createElement("span",{className:"col2"},this.props.item.np8_start_date," -"," ",this.props.item.np8_end_date?this.props.item.np8_end_date:"aujourd\u2019hui")),s.a.createElement("li",null,s.a.createElement("span",{className:"col1"},"R\xe9alis\xe9 par :"),s.a.createElement("span",{className:"col2"},this.props.item.np8_gallery_author)),s.a.createElement("li",null,s.a.createElement("span",{className:"col1"},"Format :"),s.a.createElement("span",{className:"col2"},"\xc9pisodes de"," ",this.props.item.lt_reading_time," minutes")),s.a.createElement("li",null,s.a.createElement("span",{className:"col1"},"Diffuseur :"),s.a.createElement("span",{className:"col2"},this.props.item.lt_distributor)),s.a.createElement("li",null,s.a.createElement("span",{className:"col1"},"Provenance :"),s.a.createElement("span",{className:"col2"},this.props.item.lt_country)),""===this.props.item.np8_news_ref?"":f()('<li className="related-news"><span className="col1">Lire aussi:</span><span className="col2"><img src='+g.a+' alt="">'+this.props.item.np8_news_ref+"</span></li>")),s.a.createElement("div",{className:"links"})))))}}]),t}(l.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.loading;return s.a.createElement("div",{className:"loading ".concat(e?"is-visible":"")},s.a.createElement("div",{className:"loader"},"Loading..."))}}]),t}(l.Component),N=a(13),j=a.n(N),C=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.introVisible,t=this.props.introInnerVisible,a=this.props.item.title,l=this.props.item.body,n=this.props.item.np8_main_media;return this.props.item.lt_tv_show_tag?s.a.createElement("div",{className:"intro ".concat(e?"is-visible":"")},s.a.createElement("div",{className:"intro-inner ".concat(t?"is-visible":"")},s.a.createElement("h1",null,a),f()(l),s.a.createElement("button",{className:"content-close is-selected",onClick:this.props.introClose},"Fermer"))):s.a.createElement("div",{className:"item-teaser",onClick:this.props.articleOpen.bind(this,this.props.item)},s.a.createElement("div",{className:"item-teaser--overlay"},s.a.createElement("img",{className:"item-teaser--overlay-icon",src:j.a,alt:""})),s.a.createElement("figure",{className:"item-teaser--figure",style:{backgroundImage:"url("+n+")"}}),s.a.createElement("h2",{className:"item-teaser--title"},a))}}]),t}(s.a.Component),_=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.button.label;return s.a.createElement("button",{onClick:this.props.buttonHandle.bind(this,this.props.index),className:this.props.button.status?"is-selected":""},e)}}]),t}(l.Component),y=a(35),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,s=new Array(l),n=0;n<l;n++)s[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={selectedOption:null,selectJsonLabel:a.props.select.selectJsonLabel},a.handleChange=function(e){a.setState({selectedOption:e}),a.props.selectHandle(e,a.state.selectJsonLabel)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.selectedOption,t=this.props.select.selectName,a=this.props.select.selectOptions,l=!!this.props.select.isMulti;return s.a.createElement("div",{className:"filter-select"},s.a.createElement(y.a,{className:"select",classNamePrefix:"select",options:a,value:e,onChange:this.handleChange,isClearable:!0,isMulti:l,placeholder:t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.selectedOption&&e.filteredOptions[t.selectJsonLabel]!==t.selectedOption.value?{selectedOption:null}:{}}}]),t}(l.Component),S=a(28),V=a.n(S),F=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"aside-toggle",onClick:this.props.asideToggle},s.a.createElement("img",{className:"aside-toggle--icon",src:V.a,alt:""}),s.a.createElement("span",{className:"aside-toggle--text"},"Filtrer"))}}]),t}(l.Component),T=a(29),w=a.n(T),H=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"filter-search"},s.a.createElement("input",{className:"filter-search--textfield",type:"text",placeholder:"Recherche",id:"filter-search--textfield",onChange:this.props.onChange,value:this.props.searchTerm}),s.a.createElement("img",{className:"filter-search--icon",src:w.a,alt:""}))}}]),t}(l.Component),L=a(30),x=a.n(L),P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(e){e.preventDefault(),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this,t=this.state.isOpen;return s.a.createElement("div",{className:"filter-order ".concat(t?"is-open":"is-closed"),onClick:function(t){return e.handleToggle(t)}},s.a.createElement("span",{className:"filter-order--text"},this.props.orderLabel?this.props.orderLabel:"Ajouts r\xe9cents"),s.a.createElement("img",{className:"filter-order--icon",src:x.a,alt:""}),s.a.createElement("ul",{className:"filter-order--items"},s.a.createElement("li",{className:"filter-order--items--item",onClick:this.props.orderHandle.bind(this,"created","des","Ajouts r\xe9cents")},"Ajouts r\xe9cents"),s.a.createElement("li",{className:"filter-order--items--item",onClick:this.props.orderHandle.bind(this,"title","asc","Par nom")},"Par nom"),s.a.createElement("li",{className:"filter-order--items--item",onClick:this.props.orderHandle.bind(this,"title","des","Par nom inv.")},"Par nom inv."),s.a.createElement("li",{className:"filter-order--items--item",onClick:this.props.orderHandle.bind(this,"np8_start_date","asc","Par ann\xe9e")},"Par ann\xe9e"),s.a.createElement("li",{className:"filter-order--items--item",onClick:this.props.orderHandle.bind(this,"np8_start_date","des","Par ann\xe9e inv.")},"Par ann\xe9e inv.")))}}]),t}(l.Component),B=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("p",{className:"aside--count"},"R\xe9sultats:\xa0\xa0",s.a.createElement("b",{className:"aside--count--highlight"},this.props.articlesVar.length))}}]),t}(l.Component),A=(a(65),a(67),a(69),a(71),a(73),a(75),a(77),a(79),a(81),a(83),a(85),a(87),a(31)),J=a.n(A),R=a(32),I=a.n(R),D=a(33),M=a.n(D);a(89);var W=a(91),U={backgroundImage:"url("+I.a+")"},q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).introClose=a.introClose.bind(Object(d.a)(Object(d.a)(a))),a.articleClose=a.articleClose.bind(Object(d.a)(Object(d.a)(a))),a.articleOpen=a.articleOpen.bind(Object(d.a)(Object(d.a)(a))),a.buttonHandle=a.buttonHandle.bind(Object(d.a)(Object(d.a)(a))),a.asideToggle=a.asideToggle.bind(Object(d.a)(Object(d.a)(a))),a.selectHandle=a.selectHandle.bind(Object(d.a)(Object(d.a)(a))),a.resetFilters=a.resetFilters.bind(Object(d.a)(Object(d.a)(a))),a.searchHandler=a.searchHandler.bind(Object(d.a)(Object(d.a)(a))),a.searchingFor=a.searchingFor.bind(Object(d.a)(Object(d.a)(a))),a.orderHandle=a.orderHandle.bind(Object(d.a)(Object(d.a)(a))),a.state={articles:[],articlesFiltered:null,asideCloseButtonVisible:!1,asideVisible:!1,introVisible:!0,introInnerVisible:!0,headerVisible:!0,gridVisible:!0,frameVisible:!1,loading:!0,selectedOption:!1,filteredOptions:[],searchTerm:"",orderLabel:null,orderValue:null,orderSort:null,buttons:[{status:!1,label:"Se d\xe9lasser en mangeant ou repassant"},{status:!1,label:"Frissonner"},{status:!1,label:"En discuter demain au bureau"},{status:!1,label:"Remonter le temps"},{status:!1,label:"Regarder un truc compl\xe8tement frapp\xe9"}],selects:[{selectName:"Genre",selectJsonLabel:"lt_tv_show_genre",selectOptions:[{value:"Action",label:"Action"},{value:"Com\xe9die",label:"Com\xe9die"},{value:"Historique",label:"Historique"},{value:"Policier",label:"Policier"},{value:"Science-fiction, fantastique",label:"Science-fiction, fantastique"},{value:"Sentimental",label:"Sentimental"},{value:"Soci\xe9t\xe9",label:"Soci\xe9t\xe9"}]},{selectName:"Public",selectJsonLabel:"lt_informed_public",selectOptions:[{value:"Tout le monde dans la famille",label:"Tout le monde dans la famille"},{value:"Public averti",label:"Public averti"}]},{selectName:"Provenance de la s\xe9rie",selectJsonLabel:"lt_country",selectOptions:[{value:"Canada",label:"Canada"},{value:"\xc9tats-Unis",label:"\xc9tats-Unis"},{value:"France",label:"France"},{value:"Grande-Bretagne",label:"Grande-Bretagne"}]},{selectName:"Diffuseur",selectJsonLabel:"lt_distributor",isMulti:!0,selectOptions:[{value:"A&amp;E",label:"A&E"},{value:"ABC",label:"ABC"},{value:"AMC",label:"*AMC"},{value:"Amazon",label:"*Amazon"},{value:"Arte",label:"Arte"},{value:"BBC",label:"BBC"},{value:"CBS",label:"CBS"},{value:"CTV ",label:"CTV "},{value:"Canal+",label:"Canal+"},{value:"Channel 4",label:"Channel 4"},{value:"DR1",label:"DR1"},{value:"E4",label:"E4"},{value:"FOX",label:"*FOX"},{value:"FX",label:"FX"},{value:"Facebook Watch",label:"Facebook Watch"},{value:"Fox",label:"Fox"},{value:"France 2",label:"France 2"},{value:"G4",label:"G4"},{value:"HBO",label:"*HBO"},{value:"Hulu",label:"Hulu"},{value:"ITV",label:"ITV"},{value:"M6",label:"M6"},{value:"NBC",label:"NBC"},{value:"Netflix",label:"*Netflix"},{value:"RTS",label:"*RTS"},{value:"RT\xc9 One",label:"RT\xc9 One"},{value:"Radio-Canada",label:"Radio-Canada"},{value:"ShowTime",label:"ShowTime"},{value:"Showcase",label:"Showcase"},{value:"Space",label:"Space"},{value:"The CW",label:"The CW"},{value:"The WB",label:"The WB"},{value:"UPN",label:"UPN"},{value:"USA Network",label:"*USA Network"},{value:"YouTube",label:"YouTube"}]},{selectName:"Format des \xe9pisodes",selectJsonLabel:"lt_reading_time",selectOptions:[{value:"<15",label:"Moins de 15 minutes"},{value:"<=30",label:"De 15 \xe0 30 minutes"},{value:">30",label:"Plus de 30 minutes"}]},{selectName:"\xc9tat de la production",selectJsonLabel:"np8_end_date",selectOptions:[{value:!1,label:"En cours"},{value:!0,label:"Termin\xe9e"}]},{selectName:"Histoire suivie",selectJsonLabel:"lt_tv_show_serial",selectOptions:[{value:"Feuilleton",label:"Oui"},{value:"Histoires autonomes",label:"Non"}]}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"orderHandle",value:function(e,t,a){var l=null;l=null!==this.state.articlesFiltered?W(this.state.articlesFiltered,e,t):W(this.state.articles,e,t),this.setState({articlesFiltered:l,orderLabel:a,orderValue:e,orderSort:t})}},{key:"searchingFor",value:function(e){return function(t){return t.title.toLowerCase().includes(e.toLowerCase())||!e}}},{key:"searchHandler",value:function(e){this.setState({searchTerm:e.target.value,introVisible:!1})}},{key:"resetFilters",value:function(){var e=this.state.buttons;e.map(function(e){return e.status=!1,e}),this.setState({filteredOptions:[],articlesFiltered:null,searchTerm:"",buttons:e})}},{key:"introClose",value:function(){var e=this;this.setState({introInnerVisible:!1},function(){setTimeout(function(){e.setState({introVisible:!1})},200)})}},{key:"articleOpen",value:function(e){var t=this;this.setState({headerVisible:!1,gridVisible:!1,item:e},function(){setTimeout(function(){t.setState({frameVisible:!0}),document.body.classList.add("no-scroll")},500)})}},{key:"articleClose",value:function(){var e=this;this.setState({frameVisible:!1},function(){setTimeout(function(){e.setState({headerVisible:!0,gridVisible:!0}),document.body.classList.remove("no-scroll")},500)})}},{key:"selectHandle",value:function(e,t){var a=this,l=this.state.articles,s=this.state.filteredOptions;null!==e?s[t]=e.value:s[t]&&delete s[t];var n=function(e){if(s.hasOwnProperty(e))switch(!0){case["lt_tv_show_genre","lt_country"].indexOf(e)>=0:l=l.filter(function(t){return t[e].includes(s[e])});break;case"lt_reading_time"===e:l=l.filter(function(t){return a=t[e],((a=parseInt(a,10))<15?"<15":a<=30?"<=30":">30")===s[e];var a});break;case"np8_end_date"===e:l=l.filter(function(t){return t.completed===s[e]});break;default:l=l.filter(function(t){return t[e]===s[e]})}a.setState({introVisible:!1})};for(var i in s)n(i);s.forEach(function(e,t){}),this.setState({selectedOption:e,articlesFiltered:l,filteredOptions:s})}},{key:"buttonHandle",value:function(e){var t=this.state.buttons,a=this.state.articles,l=t.map(function(t,l){return l===e?(!1===t.status&&(a=a.filter(function(e){return e.lt_tv_show_quick_suggestion===t.label})),t.status=!t.status):t.status=!1,t});this.setState({buttons:l,introVisible:!1});var s=null;null!==this.state.orderLabel?(s=W(a,this.state.orderValue,this.state.orderSort),this.setState({articlesFiltered:s})):this.setState({articlesFiltered:a})}},{key:"asideToggle",value:function(){var e=this;this.state.asideVisible?this.setState({asideCloseButtonVisible:!1},function(){setTimeout(function(){e.setState({asideVisible:!1})},250)}):this.setState({asideVisible:!0},function(){setTimeout(function(){e.setState({asideCloseButtonVisible:!0})},250)})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://web.tcch.ch/tv-test/index_read.php").then(function(e){return e.json()}).then(function(t){t.map(function(e,t){return e.completed=""!==e.np8_end_date}),e.setState({baseData:t,articles:t,loading:!1});var a=[];t.map(function(e,t){var l=e.lt_country.length>0?e.lt_country.split(", "):[];return a=a.concat(l)}),(a=a.filter(function(e,t,a){return a.indexOf(e)===t})).sort(function(e,t){return e.localeCompare(t)});var l=[];a.map(function(e,t){return l.push({value:e,label:e})});var s=e.state.selects;s.forEach(function(e){"lt_country"===e.selectJsonLabel&&(e.selectOptions=l)}),e.setState({selects:s})}).catch(function(){console.log("Error when loading json")})}},{key:"render",value:function(){var e=this,t=this.state,a=t.articles,l=t.articlesFiltered,n=this.state.asideCloseButtonVisible,i=this.state.asideVisible,r=this.state.headerVisible,c=this.state.frameVisible,o=this.state.gridVisible,u=this.state.loading,m=this.state.buttons,d=this.state.selects,h=this.state.introVisible,f=this.state.introInnerVisible;return null!==l&&(a=l),a=a.filter(this.searchingFor(this.state.searchTerm)),s.a.createElement("div",{className:"App"},s.a.createElement("aside",{style:U,className:"".concat(i?"is-visible":"")},s.a.createElement("div",{className:"aside--close-button ".concat(n?"is-visible":""),onClick:this.asideToggle},s.a.createElement("img",{className:"aside--close-button--img",alt:"Fermer",src:j.a})),s.a.createElement(b.d,{defaultIndex:0},s.a.createElement(b.b,null,s.a.createElement(b.a,{onClick:this.resetFilters},"Suggestions"),s.a.createElement(b.a,{onClick:this.resetFilters},"Sur mesure")),s.a.createElement(b.c,null,s.a.createElement("h3",{className:"aside-title"},"Nos suggestions rapides"),m.length>0?m.map(function(t,a){return s.a.createElement(_,{index:a,key:a,button:t,buttonHandle:e.buttonHandle})}):null),s.a.createElement(b.c,null,s.a.createElement("h3",{className:"aside-title"},"Filtrage personnalis\xe9"),d.length>0?d.map(function(t,l){return s.a.createElement(k,{index:l,key:l,articles:a,select:t,selectHandle:e.selectHandle,filteredOptions:e.state.filteredOptions})}):null)),s.a.createElement(B,{articlesVar:a}),s.a.createElement("ul",{className:"aside-footer-list"},s.a.createElement("li",{className:"aside-footer-list-item"},"Partager sur Facebook"),s.a.createElement("li",{className:"aside-footer-list-item"},"Partager sur Twitter"),s.a.createElement("li",{className:"aside-footer-list-item"},"Partager sur Linkedin"),s.a.createElement("li",{className:"aside-footer-list-item"},"letemps.ch")),s.a.createElement("img",{className:"aside-footer-bg",alt:"",src:J.a})),s.a.createElement("main",{className:"".concat(i?"is-moved-right":"")},s.a.createElement("div",{className:"main-header ".concat(r?"is-visible":"")},s.a.createElement(F,{asideToggle:this.asideToggle}),s.a.createElement(H,{onChange:this.searchHandler,searchTerm:this.state.searchTerm}),s.a.createElement(P,{orderHandle:this.orderHandle,orderLabel:this.state.orderLabel})),s.a.createElement(E,{loading:u}),s.a.createElement("div",{className:"grid ".concat(o?"is-visible":"")},a.length>0?a.map(function(t,a){return s.a.createElement(C,{index:a,key:a,item:t,introVisible:h,introInnerVisible:f,articleOpen:e.articleOpen,introClose:e.introClose,hideLoading:e.hideLoading})}):s.a.createElement("div",{className:"no-results"},s.a.createElement("div",{className:"no-results--inner"},s.a.createElement("img",{className:"aside--close-button--img",src:M.a,alt:""}),s.a.createElement("h4",{className:"no-results--title"},"Votre recherche n'a produit aucun r\xe9sultat"),s.a.createElement("button",{className:"no-results--button",onClick:this.resetFilters},"R\xe9initialiser les filtres"))))),s.a.createElement(p,{frameVisible:c},s.a.createElement(O,{articleClose:this.articleClose,item:this.state.item})))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.44319c69.chunk.js.map