"use client";

import React, { useState, useEffect } from "react";
import { ReclaimProofRequest } from "@reclaimprotocol/js-sdk";
import QRCode from "react-qr-code";

function ReclaimComponent() {
  const [reclaimProofRequest, setReclaimProofRequest] = useState<any>(null);
  const [requestUrl, setRequestUrl] = useState("");
  const [statusUrl, setStatusUrl] = useState("");
  const [proofs, setProofs] = useState(null);

  useEffect(() => {
    async function initializeReclaim() {
      const APP_ID = "0x4E29c6d73E12C125eEC043F025A9a9aeC913a2d4";
      const APP_SECRET =
        "0x237a03ce5050d6c13a79b55b7e4a47fd678298b0c16ceee5849699f31d2adc20";
      const PROVIDER_ID = "a50c3b9b-f5a2-420e-9797-6c3be26ff621";
      const proofRequest = await ReclaimProofRequest.init(
        APP_ID,
        APP_SECRET,
        PROVIDER_ID
      );
      setReclaimProofRequest(proofRequest);
    }

    initializeReclaim();
  }, []);

  async function handleCreateClaim() {
    if (!reclaimProofRequest) {
      console.error("Reclaim Proof Request not initialized");
      return;
    }
    const url = await reclaimProofRequest.getRequestUrl();
    setRequestUrl(url);
    const status = reclaimProofRequest.getStatusUrl();
    setStatusUrl(status);
    await reclaimProofRequest.startSession({
      onSuccess: (proofs: any) => {
        console.log("Verification success", proofs);
        setProofs(proofs);
      },
      onFailure: (error: any) => {
        console.error("Verification failed", error);
      },
    });
  }
  return (
    <div className="App">
      <h1>Reclaim Protocol Demo</h1>
      <button onClick={handleCreateClaim}>Create Claim</button>
      {requestUrl && (
        <div>
          {requestUrl}
          <h2>Scan this QR code to start the verification process:</h2>
          <QRCode value={requestUrl} />
        </div>
      )}
      {proofs && (
        <div>
          <h2>Verification Successful!</h2>
          <pre>{JSON.stringify(proofs, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ReclaimComponent;
