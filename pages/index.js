import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../styles/home.module.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { useWallet } from '@solana/wallet-adapter-react';
import { encode } from 'base58-universal';
import { CopyBlock, atomOneLight } from "react-code-blocks";
import { Keypair, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
// import * as web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as bs58 from "@socket.io/base64-arraybuffer";

export default function Home() {

  const [proxy, setProxy] = useState("");
  const [signature, setSignature] = useState("");
  const { publicKey } = useWallet();

  async function validateSolAddress(address){
    try {
        let pubkey = new PublicKey(address)
        let  isSolana =  PublicKey.isOnCurve(pubkey.toBuffer())
        return isSolana
    } catch (error) {
        return false
    }
}

  async function handleSubmit() {

    if (!publicKey) {
      alert('Please connect your wallet!');
      throw new WalletNotConnectedError();
    }

    /**
    * Todo: I don't want this to be transaction, just a signature, should not cost any gas or be on chain.
    * */

    const message = proxy;
    const isValid = await validateSolAddress(message);
    if(!isValid){
      alert('Not valid proxy address format');
      return;
    }


    // const message = `Verify account ownership`;
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await window.solana.signMessage(encodedMessage, "utf8");

    // setSignature(decoded);
    // console.log("signedMessage.toString()");
    // console.log(signedMessage.toString());


    // console.log('type of ');
    // console.log(typeof signedMessage);

    // const stringSignature = new TextDecoder().decode(signedMessage.signature);
    // console.log("stringSignature");
    // console.log(stringSignature);
    //
    // const stringSignature2 = new TextDecoder().decode(signedMessage.signature, "utf8");
    // console.log("stringSignature2");
    // console.log(stringSignature2);
    console.log('signedMessage');
    console.log(signedMessage);

    const base58Public = signedMessage.publicKey.toBase58();

    const base58Signature = bs58.encode(signedMessage.signature);
    console.log(`Message signature: ${bs58.encode(signedMessage.signature)}`)
    // return bs58.encode(signature)

    //Where does the publicKey key come from. Arent I saving that to public?
    const signatureObject = {
      "proxy": message,
      "root": base58Public,
      "signature": base58Signature,
    };

    console.log(signatureObject);

    setSignature(JSON.stringify(signatureObject));

    /** Original */

    // const transaction = new Transaction().add(
    //     SystemProgram.transfer({
    //         fromPubkey: publicKey,
    //         toPubkey: Keypair.generate().publicKey,
    //         lamports: 1,
    //     })
    // );
    //
    // const signature = await sendTransaction(transaction, connection);
    //
    // await connection.confirmTransaction(signature, 'processed');
    //
    // // const encoded = new TextEncoder().encode(proxy);
    // // const signed = await window.solana.signMessage(encoded, );
    // // const decoded = new TextDecoder().decode(signed.signature);
    //
    // setSignature(decoded);
    //
    // console.log({
    //   "message": proxy,
    //   "public": publicKey,
    //   "signature": decoded,
    // });
  }

  return (
    <>
      <Head>
        <title>collabland-proxy</title>
        <meta name="description" content="collabland-proxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/collabland.png"
          width={260}
          height={40}
          className={styles.collab_logo}
        />
        <WalletMultiButton className={styles.wallet_adapter_button}/>
        <Form className={styles.form}>
          <Form.Group className={["mb-3", styles.form_row].join(" ")}>
            <Form.Control
              type="input"
              className={styles.input}
              placeholder="Proxy Wallet Address"
              onChange={ (e) => setProxy(e.target.value) }
              disabled={!publicKey}
            />
          </Form.Group>
          <Button
            type="button"
            variant="primary"
            className ={styles.submit_btn}
            onClick={handleSubmit}
            disabled={!publicKey}>
              Submit
          </Button>
        </Form>
        <div className={styles.codeblock}>
          <CopyBlock
            text={signature}
            theme={atomOneLight}
            language="json"
            wrapLines
          />
        </div>
      </main>
    </>
  )
}

