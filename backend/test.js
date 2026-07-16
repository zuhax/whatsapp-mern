import dns from "node:dns";

dns.resolveSrv("_mongodb._tcp.marthin.bgvm212.mongodb.net", (err, records) => {
  console.log(err);
  console.log(records);
});