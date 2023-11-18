import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import axios from "axios";

import styles from "../styles/Home.module.css";
import Card from "./Card";

export default function GetNfts(props) {  
  const [nfts, setNfts] = useState([]);
  const [selectNft,setSelectedNFT]=useState(0);
console.log(props.address)

  var route;
  var { address } = useAccount();
  if(props.loadCounterNFt===true){
  address=props.address
 route="https://nftbackend-2p4r.onrender.com/getContractNFTs"
  }
  else
  route="https://nftbackend-2p4r.onrender.com/getnfts"
  // address="0x9d305a42a3975ee4c1c57555bed5919889dce63f"
  const chain = "0x89";
// 
  useEffect(() => {
    let response;
    async function getData() {
      response = await axios
        .get(route, {
          params: { address, chain },
        })
        .then((response) => {
          setNfts(response.data.result);
          console.log(response);
        });
    }
    getData();
  }, []);
  const handleSelectNFT = (name, image) => {
    setSelectedNFT({ name, image });
  };

  return (
    // <section className={styles.dataContainer}>
    <>
      {nfts.map((nft) => {
        return nft.metadata && <Card uri={nft} key={nft.token_uri}  onSelectNFT={handleSelectNFT} setFormData={props.setFormData} type={props.type} />;
      })}
    </>
    // </section>
  );
}
