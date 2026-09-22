import http from 'node:http';
import {readFile} from 'node:fs/promises';
const html = await readFile(new URL('./public/index.html', import.meta.url));
const server=http.createServer((req,res)=>{
 const path=new URL(req.url,'http://localhost').pathname;
 if(path==='/health'){res.writeHead(200,{'Content-Type':'text/plain'});return res.end('ok');}
 if(path!=='/'&&path!=='/index.html'){res.writeHead(404);return res.end('Not found');}
 res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','X-Frame-Options':'DENY'});
 res.end(req.method==='HEAD'?undefined:html);
});
server.listen(Number(process.env.PORT)||3000,'0.0.0.0');
