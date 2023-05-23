const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const apiKey = import.meta.env.VITE_PUBLIC_KEY;

import CryptoJS from "crypto-js";
const hashMD5 = (data) => {
	const hash = CryptoJS.MD5(data);
	return hash.toString(CryptoJS.enc.Hex);
};

// Ejemplo de uso
const data = `1${privateKey}${apiKey}`;
const hashedData = hashMD5(data);

export default hashedData;
