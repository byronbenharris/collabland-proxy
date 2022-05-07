import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../styles/home.module.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { encode } from 'base58-universal';
import { CopyBlock, atomOneLight } from "react-code-blocks";

export default function Home() {

  const [proxy, setProxy] = useState("");
  const [signature, setSignature] = useState("");
  const { publicKey } = useWallet();

  async function handleSubmit() {

    if (!publicKey) {
      alert('Please connect your wallet!');
      throw new WalletNotConnectedError();
    }

    const encoded = new TextEncoder().encode(proxy);
    const signed = await window.solana.signMessage(encoded, 'utf8');
    const decoded = encode(signed.signature);
    
    setSignature(decoded);
    
    console.log({
      "proxy": proxy,
      "public": publicKey.toString(),
      "signature": decoded,
    });
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
            text={"{\n\t\"proxy\": \"" + proxy + "\",\n\t\"root\": \"" + publicKey.toString() + "\",\n\t\"signature\": \"" + signature + "\"\n}"}
            theme={atomOneLight}
            language="json"
            wrapLines
          />
        </div>
      </main>
    </>
  )
}

