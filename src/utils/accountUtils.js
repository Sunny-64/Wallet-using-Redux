import { Wallet, ethers } from "ethers"; 

export const generateAccount = async () => {
    try {
        if (!seedPhrase) {
            const account = Wallet.createRandom();
            return account;
        }
        return seedPhrase.includes(" ") ? Wallet.fromPhrase(seedPhrase) : new Wallet(seedPhrase);
    }

    catch (err) {
        console.log(err);
        throw err; 
    }

}

export const getBalance = async (address) => {
    const provider = new ethers.JsonRpcProvider(sepolia.rpcUrl);
    return await provider.getBalance(address);
}



