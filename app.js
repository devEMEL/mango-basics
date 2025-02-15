import { getFullnodeUrl, MgoClient } from "@mgonetwork/mango.js/client";

const MY_ADDRESS = "0x70c5946715212f3bf27aa31e559dbdb9a028ce363f07ef26672bb33faf34b7a8";

const coinType = "0x2::mgo::MGO";

const client = new MgoClient({ url: getFullnodeUrl("devnet") });

const getBalance = async (owner, coinType) => {
  return await client.getBalance({
    owner,
    coinType
  });
}


getBalance(MY_ADDRESS, coinType)
  .then((balance) => {
    console.log({ balance });
  })
  .catch(({ message }) => {
    console.log({ error: message });
  });