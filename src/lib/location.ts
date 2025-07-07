import https from "https";

export type LocationData = {
  ip: string;
  asn: string;
  as_name: string;
  as_domain: string;
  country_code: string;
  country: string;
  continent_code: string;
  continent: string;
};

export async function getLocation(): Promise<LocationData | null> {
  return new Promise((resolve, reject) => {
    const options = {
      path: "/lite/me?token=fef4f4a004451f",
      host: "api.ipinfo.io",
      port: 443,
      headers: { "User-Agent": "nodejs-ipinfo-lite-v1.0" },
    };
    https.get(options, function (resp) {
      let body = "";
      resp.on("data", function (data) {
        body += data;
      });
      resp.on("end", function () {
        try {
          const loc = JSON.parse(body);
          if (loc.error) {
            console.error("IPinfo API error:", loc.error);
            resolve(null);
            return;
          }
          resolve({
            ip: loc.ip,
            asn: loc.asn,
            as_name: loc.as_name,
            as_domain: loc.as_domain,
            country_code: loc.country_code,
            country: loc.country,
            continent_code: loc.continent_code,
            continent: loc.continent,
          });
        } catch (error) {
          console.error("Location detection failed:", error, body);
          resolve(null);
        }
      });
      resp.on("error", function (err) {
        console.error("Location detection failed:", err);
        resolve(null);
      });
    });
  });
}
