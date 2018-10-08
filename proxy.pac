function FindProxyForURL(url, host) {
	if (shExpMatch(host,"dknp.e-pointchina.com.cn")) {
	return "PROXY kungfoos.cn:8899";
	}
	if (shExpMatch(host,"*.spdbccc.com.cn")) {
	return "PROXY kungfoos.cn:8899";
	}
	if (shExpMatch(host,"*.smbpos.cn")) {
	return "PROXY kungfoos.cn:8899";
	}
return "DIRECT";
}
