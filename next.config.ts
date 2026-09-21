import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      // Landing page estática do 3º Congresso servida na URL limpa /3-congresso
      { source: "/3-congresso", destination: "/3-congresso/index.html" },
      // Galeria estática do 1º Congresso servida na URL limpa /1-congresso
      { source: "/1-congresso", destination: "/1-congresso/index.html" },
    ];
  },
};

export default nextConfig;
