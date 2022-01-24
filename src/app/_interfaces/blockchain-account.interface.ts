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
  sequence: {
    nonce: number;
  };
  keys: {
    numberOfSignatures: number;
    mandatoryKeys: [];
    optionalKeys: [];
  };
  dpos: {
    delegate: {
      username: string;
      pomHeights: [];
      consecutiveMissedBlocks: number;
      lastForgedHeight: number;
      isBanned: boolean;
      totalVotesReceived: number;
    };
    sentVotes: [];
    unlocking: [];
  };
  nft: {
    ownNFTs: [];
    mintedNFTs: [];
  };
}
