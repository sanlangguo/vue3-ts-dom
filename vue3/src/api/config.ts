export const env: string = import.meta.env.MODE || "development";

import { Domain } from "@/types/interface";

export const config: Domain = {
  development: {
    domain: "https://test-gateway.jinyi999.cn/invest-adviser-service/",
  },
  production: {
    domain: "https://gw-inner-proxy.techgp.cn/edu-invest-adviser-service/",
  },
}[env];
