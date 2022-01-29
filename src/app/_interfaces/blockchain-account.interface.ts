export interface IBlockchainAccountForm {
  publicKey: string;
  privateKey: string;
  address: string;
  humanReadableAddress: string;
}

export interface IBlockchainAccountStructure {
  address: string;
  token: {
    balance: number;
  };
  nft: {
    ownNFTs: [];
    mintedNFTs: [];
  };
}
