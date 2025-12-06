// api/forecast.js
export default async function handler(req, res) {
  const key = req.query.key;
  if(key !== "1") {
    res.status(401).send("Unauthorized");
    return;
  }
  const imageUrl = "https://drive.google.com/uc?export=download&id=1SyH2OFBc-Lb2A-NMU01MIRU5YHo-kL5e";
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  res.setHeader("Content-Type", "image/png");
  res.send(Buffer.from(buffer));
}
