export const categories = ['Todas las categorías', 'Papelería', 'Tecnología', 'Mobiliario'];
export const products = [
 {name:'Papel reciclado A4',category:1,price:28,cost:17,units:210},
 {name:'Cuadernos de trabajo',category:1,price:12,cost:6.4,units:290},
 {name:'Kit de escritorio',category:1,price:24,cost:12.8,units:145},
 {name:'Monitor 27 pulgadas',category:2,price:249,cost:193,units:37},
 {name:'Teclado inalámbrico',category:2,price:58,cost:39,units:68},
 {name:'Base de conexión USB-C',category:2,price:89,cost:65,units:44},
 {name:'Silla ergonómica',category:3,price:219,cost:132,units:34},
 {name:'Mesa de trabajo',category:3,price:329,cost:211,units:21},
 {name:'Archivador modular',category:3,price:115,cost:69,units:27},
];
const season=[.76,.81,.93,.88,.98,.92,.72,.67,1.18,1.24,1.29,1.12];
export const months=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
export const records=months.flatMap((month,m)=>products.map((p,i)=>{const units=Math.round(p.units*season[m]*(1+m*.011)*(1+Math.sin(m*2+i)*.065));return {...p,month,m,units,revenue:units*p.price,purchase:units*p.cost*(1+(p.category===2?m*.008:m*.002)),expense:units*p.price*.17};}));
export function calculate(period:number,category:number,price=0,cost=0,days=30){
 const selected=records.filter(r=>r.m>=12-period&&(!category||r.category===category));
 const sum=(key:'revenue'|'purchase'|'expense')=>selected.reduce((a,r)=>a+r[key],0);
 const revenue=sum('revenue')*(1+price/100),purchase=sum('purchase')*(1+cost/100),expense=sum('expense'),gross=revenue-purchase,profit=gross-expense;
 const initial=24000*(category ? records.filter(r=>r.category===category).reduce((a,r)=>a+r.revenue,0)/records.reduce((a,r)=>a+r.revenue,0):1);
 const receivable=revenue/(period*30)*days;
 return {revenue,purchase,expense,gross,profit,margin:gross/revenue*100,cash:initial+profit-receivable,receivable,selected,initial};
}
export const money=(n:number)=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
export const number=(n:number)=>new Intl.NumberFormat('es-ES',{maximumFractionDigits:1}).format(n);
