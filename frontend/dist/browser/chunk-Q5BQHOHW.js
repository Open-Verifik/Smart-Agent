var a=(t,e)=>({whereGTE_createdAt:t.startOf("day").toUTC().toISO()??"",whereLTE_createdAt:e.endOf("day").toUTC().toISO()??""});export{a};
