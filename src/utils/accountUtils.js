import { Wallet, ethers } from "ethers";
import { sepolia } from './../chains/sepolia'

export const generateAccount = async (seedPhrase) => {
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
    // console.log('provider : ', provider)
    const balance = await provider.getBalance(address);
    // console.log('bal : ', balance)
    return Number(ethers.formatEther(balance));
}

export const handleCreateAccountAndLogin = async (seedPhrase) => {
    try {
        let accountInfo;
        if (!seedPhrase) {
            accountInfo = await generateAccount();
        }
        accountInfo = await generateAccount(seedPhrase);
        console.log('accountInfo : ', accountInfo)
        const balance = await getBalance(accountInfo.address);

        let acc = {
            publicKey: accountInfo.address,
            privateKey: accountInfo.signingKey.privateKey,
            balance,
        }

        localStorage.setItem("account", JSON.stringify(acc));
    }
    catch (err) {
        console.log(err);
    }
}

export const sendETHToAddress = async () => {
    try {
        const provider = new ethers.JsonRpcProvider(sepolia.rpcUrl);
        const signer = new ethers.Wallet(account.privateKey, provider);

        const tx = await signer.sendTransaction({
            to: receiverAddress,
            value: ethers.parseEther(amount)
        });

        return tx;
    }
    catch (err) {
        console.log(err);
    }
}

export const saveTx = (tx) => {
    
}