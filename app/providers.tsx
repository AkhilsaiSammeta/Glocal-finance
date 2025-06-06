"use client";

import {
  CrossmintProvider,
  CrossmintAuthProvider,
  CrossmintWalletProvider,
} from "@crossmint/client-sdk-react-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (!process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY || !process.env.NEXT_PUBLIC_CHAIN_ID) {
  throw new Error("NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY or NEXT_PUBLIC_CHAIN_ID is not set");
}

const queryClient = new QueryClient();
const chain = process.env.NEXT_PUBLIC_CHAIN_ID as any;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CrossmintProvider apiKey={process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY || ""}>
        <CrossmintAuthProvider
          authModalTitle="Welcome to Glocal finance"
          loginMethods={["email", "google"]}
        >
          <CrossmintWalletProvider
            showPasskeyHelpers={chain !== "solana"}
            createOnLogin={{
              chain: process.env.NEXT_PUBLIC_CHAIN_ID as any,
              signer: { type: chain === "solana" ? "email" : "passkey" },
            }}
          >
            {children}
          </CrossmintWalletProvider>
        </CrossmintAuthProvider>
      </CrossmintProvider>
    </QueryClientProvider>
  );
}


// "use client";

// import {
//   CrossmintProvider,
//   CrossmintAuthProvider,
//   CrossmintWalletProvider,
// } from "@crossmint/client-sdk-react-ui";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY = "ck_staging_ABDMYoJwuTM2LQuKdxTuHtZmnjtsdxYPiSdPds1cwTzfkebkeqh3MCgs7DNvWF7Li81eUc9CzE7tgA6bhULsXtN6GrW2Wbd3HtyfhpXSteEfaciXtoG4VgaHdsu1u3a7wFj1wXLjx7GNyPFGwgewE81vmbaJYGtqNzYpQzVm3sbBUHWtptpCSjfH2yPtbeSL1YyBCiCYALyuhTc6ZsaXRZmV";
// const NEXT_PUBLIC_CHAIN_ID = "solana";
// const NEXT_PUBLIC_USDC_MINT = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";

// if (!NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY || !NEXT_PUBLIC_CHAIN_ID) {
//   throw new Error("API KEY or CHAIN ID is not set");
// }

// const queryClient = new QueryClient();
// const chain = NEXT_PUBLIC_CHAIN_ID;

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <CrossmintProvider apiKey={NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY}>
//         <CrossmintAuthProvider
//           authModalTitle="Welcome to Glocal finance"
//           loginMethods={["email", "google"]}
//         >
//           <CrossmintWalletProvider
//             showPasskeyHelpers={chain !== "solana"}
//             createOnLogin={{
//               chain,
//               signer: { type: chain === "solana" ? "email" : "passkey" },
//             }}
//           >
//             {children}
//           </CrossmintWalletProvider>
//         </CrossmintAuthProvider>
//       </CrossmintProvider>
//     </QueryClientProvider>
//   );
// }

// "use client";

// import {
//   CrossmintProvider,
//   CrossmintAuthProvider,
//   CrossmintWalletProvider,
// } from "@crossmint/client-sdk-react-ui";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY = "ck_staging_ABDMYoJwuTM2LQuKdxTuHtZmnjtsdxYPiSdPds1cwTzfkebkeqh3MCgs7DNvWF7Li81eUc9CzE7tgA6bhULsXtN6GrW2Wbd3HtyfhpXSteEfaciXtoG4VgaHdsu1u3a7wFj1wXLjx7GNyPFGwgewE81vmbaJYGtqNzYpQzVm3sbBUHWtptpCSjfH2yPtbeSL1YyBCiCYALyuhTc6ZsaXRZmV";
// const NEXT_PUBLIC_CHAIN_ID = "solana";

// const queryClient = new QueryClient();

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <CrossmintProvider apiKey={NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY}>
//         <CrossmintAuthProvider
//           authModalTitle="Fintech Starter App"
//           loginMethods={["email", "google"]}
//         >
//           <CrossmintWalletProvider
//             showPasskeyHelpers={NEXT_PUBLIC_CHAIN_ID !== "solana"}
//             createOnLogin={{
//               chain: NEXT_PUBLIC_CHAIN_ID,
//               signer: {
//                 type: NEXT_PUBLIC_CHAIN_ID === "solana" ? "email" : "passkey",
//               },
//             }}
//           >
//             {children}
//           </CrossmintWalletProvider>
//         </CrossmintAuthProvider>
//       </CrossmintProvider>
//     </QueryClientProvider>
//   );
// }
