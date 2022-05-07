import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from '../styles/home.module.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
// import * as web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Home() {

  const [proxy, setProxy] = useState("");
  const [signature, setSignature] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  async function handleSubmit() {

    if (!publicKey) {
      alert('Please connect your wallet!');
      throw new WalletNotConnectedError();
    }

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: Keypair.generate().publicKey,
            lamports: 1,
        })
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, 'processed');

    // const encoded = new TextEncoder().encode(proxy);
    // const signed = await window.solana.signMessage(encoded, );
    // const decoded = new TextDecoder().decode(signed.signature);
    
    setSignature(decoded);
    
    console.log({
      "message": proxy,
      "public": publicKey,
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
        <InputGroup>
          <InputGroup.Text>{signature}</InputGroup.Text>
          <CopyToClipboard text={signature}>
            <Button variant="outline-secondary">Copy</Button>
          </CopyToClipboard>
        </InputGroup>
        
      </main>
    </>
  )
}

