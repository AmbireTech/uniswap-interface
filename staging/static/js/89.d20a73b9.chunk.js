(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[89],{1628:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var a={messages:{Accept:"\u63a5\u53d7",Acknowledge:"\u78ba\u8a8d",Allow:"\u5141\u8a31","Allow in your wallet":"\u5141\u8a31\u5728\u4f60\u7684\u9322\u5305\u88e1","Allow {symbol} first":["\u5148\u5141\u8a31 ",["symbol"]],"Allowance pending":"\u5f85\u5b9a\u6d25\u8cbc","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u5617\u8a66\u57f7\u884c\u6b64\u514c\u63db\u6642\u767c\u751f\u932f\u8aa4\u3002\u60a8\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6ed1\u9ede\u9650\u5236\u3002\u5982\u679c\u9084\u662f\u4e0d\u884c\uff0c\u5247\u53ef\u80fd\u662f\u60a8\u6b63\u5728\u4ea4\u6613\u7684\u4ee3\u5e63\u8207Uniswap\u4e0d\u517c\u5bb9\u3002\u6ce8\uff1aUniswap V3\u4e0d\u517c\u5bb9\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u5f48\u6027\u4f9b\u61c9\uff08rebase\uff09\u4ee3\u5e63\u3002","Approval pending":"\u7b49\u5f85\u6279\u51c6",Approve:"\u6279\u6e96","Approve in your wallet":"\u5728\u60a8\u7684\u9322\u5305\u4e2d\u6279\u51c6","Approve {symbol} first":["\u5148\u6279\u51c6 ",["symbol"]],Auto:"\u81ea\u52d5","Auto Router":"\u81ea\u52d5\u8def\u7531",Close:"\u95dc\u9589","Confirm in your wallet":"\u5728\u4f60\u7684\u9322\u5305\u4e2d\u78ba\u8a8d","Confirm swap":"\u78ba\u8a8d\u514c\u63db","Connect wallet":"\u9023\u63a5\u9322\u5305","Connect wallet to swap":"\u9023\u63a5\u9322\u5305\u4ee5\u514c\u63db","Connecting\u2026":"\u9023\u63a5\u2026","Convert {0} to {1}":["\u5c07 ",["0"]," \u8f49\u63db\u70ba ",["1"]],"Disconnect wallet":"\u65b7\u958b\u9322\u5305",Dismiss:"\u95dc\u9589","Enter an amount":"\u8f38\u5165\u6578\u984d","Error details":"\u932f\u8aa4\u8a73\u60c5","Error fetching trade":"\u7372\u53d6\u4ea4\u6613\u6642\u51fa\u932f","Fetching best price\u2026":"\u6b63\u5728\u7372\u53d6\u6700\u512a\u514c\u63db\u7387...",For:"\u8d0a\u6210","High price impact":"\u9ad8\u514c\u63db\u7387\u5f71\u97ff","High slippage":"\u9ad8\u6ed1\u9ede","High slippage increases the risk of price movement":"\u9ad8\u6ed1\u9ede\u589e\u52a0\u4e86\u50f9\u683c\u8b8a\u52d5\u7684\u98a8\u96aa","I don't have a wallet":"\u6211\u6c92\u6709\u9322\u5305","Insufficient liquidity in the pool for your trade":"\u60a8\u60f3\u4ea4\u6613\u7684\u6c60\u4e2d\u6d41\u52d5\u6027\u4e0d\u8db3","Insufficient {0} balance":[["0"]," \u9918\u984d\u4e0d\u8db3"],"Invalid recipient":"\u7121\u6548\u7684\u63a5\u6536\u65b9","Liquidity provider fee":"\u6d41\u52d5\u6027\u63d0\u4f9b\u8005\u8cbb\u7528",Max:"\u6700\u5927\u503c","Max slippage":"\u6700\u5927\u6ed1\u9ede","Maximum sent":"\u767c\u9001\u7684\u6700\u5927\u503c","Minimum received":"\u6536\u5230\u7684\u6700\u4f4e\u6578\u984d","Missing dependencies":"\u7f3a\u5c11\u4f9d\u8cf4\u5957\u4ef6","No results found.":"\u672a\u627e\u5230\u4efb\u4f55\u7d50\u679c\u3002","No tokens are available on this network. Please switch to another network.":"\u6b64\u7db2\u7d61\u4e0a\u6c92\u6709\u53ef\u7528\u7684\u4ee4\u724c\u3002\u8acb\u5207\u63db\u5230\u53e6\u4e00\u500b\u7db2\u7d61\u3002",OFF:"\u95dc\u9589",ON:"\u958b\u555f","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["\u4f30\u8a08\u8f38\u51fa\u3002\u60a8\u5c07\u6536\u5230\u81f3\u5c11 ",["0"]," ",["1"]," \u6216\u4ea4\u6613\u5c07\u6062\u5fa9\u3002"],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["\u4f30\u8a08\u8f38\u51fa\u3002\u60a8\u6700\u591a\u767c\u9001 ",["0"]," ",["1"]," \u6216\u4ea4\u6613\u5c07\u6062\u5fa9\u3002"],"Please enter a valid slippage %":"\u8acb\u8f38\u5165\u6709\u6548\u7684\u6ed1\u9ede\u767e\u5206\u6bd4","Powered by the Uniswap protocol":"\u7531 Uniswap \u5354\u8b70\u63d0\u4f9b\u652f\u6301","Price impact":"\u514c\u63db\u7387\u5f71\u97ff","Price updated":"\u514c\u63db\u7387\u5df2\u66f4\u65b0","Recent transactions":"\u6700\u8fd1\u7684\u4ea4\u6613","Reload the page":"\u91cd\u65b0\u52a0\u8f09\u9801\u9762",Reset:"\u91cd\u7f6e","Review swap":"\u5be9\u67e5\u4ea4\u63db","Search by token name or address":"\u6309\u4ee3\u5e63\u540d\u7a31\u6216\u5730\u5740\u641c\u7d22","Select a token":"\u9078\u64c7\u4ee3\u5e63",Settings:"\u8a2d\u7f6e","Slippage tolerance":"\u6ed1\u9ede\u5bb9\u5dee","Something went wrong.":"\u51fa\u554f\u984c\u4e86\u3002",Swap:"\u514c\u63db","Swap confirmed":"\u4ea4\u63db\u78ba\u8a8d","Swap details":"\u4ea4\u6613\u8a73\u60c5","Swap failed: {0}":["\u5151\u6362\u5931\u8d25\uff1a ",["0"]],"Swap pending":"\u4ea4\u63db\u5f85\u8655\u7406","Swap summary":"\u4ea4\u6613\u6458\u8981",Switch:"\u8f49\u8b8a","Switch network":"\u5207\u63db\u7db2\u7d61","Switch network in your wallet":"\u5728\u60a8\u7684\u9322\u5305\u4e2d\u5207\u63db\u7db2\u7d61","Switching network":"\u4ea4\u63db\u7db2\u7d61","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"\u514c\u63db\u4ea4\u6613\u4e0d\u6eff\u8db3 Uniswap \u4e0d\u8b8a\u91cf X \xd7 Y = K \u7684\u8981\u6c42\u3002\u9019\u901a\u5e38\u610f\u5473\u8457\u60a8\u8981\u514c\u63db\u7684\u4ee3\u5e63\u4e4b\u4e00\u5728\u4ee3\u5e63\u8f49\u8cec\u904e\u7a0b\u4e2d\u5e36\u6709\u4e00\u4e9b\u81ea\u5b9a\u7fa9\u4ee3\u5e63\u5408\u7d04\u7279\u6027\u3002","The input token cannot be transferred. There may be an issue with the input token.":"\u8f38\u5165\u4ee3\u5e63\u7121\u6cd5\u9032\u884c\u8f49\u8cec\u3002\u8f38\u5165\u4ee3\u5e63\u53ef\u80fd\u6709\u4e9b\u554f\u984c\u3002","The output token cannot be transferred. There may be an issue with the output token.":"\u8f38\u51fa\u4ee3\u5e63\u7121\u6cd5\u9032\u884c\u8f49\u8cec\u3002\u8f38\u51fa\u4ee3\u5e63\u53ef\u80fd\u6709\u4e9b\u554f\u984c\u3002","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u8f38\u51fa\u4ee3\u5e63\u7121\u6cd5\u9032\u884c\u8f49\u8cec\u3002\u8f38\u51fa\u4ee3\u5e63\u53ef\u80fd\u6709\u4e9b\u554f\u984c\u3002\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207Uniswap V3\u4e0d\u76f8\u5bb9\u3002","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"\u7531\u65bc\u671f\u9650\u5df2\u904e\uff0c\u56e0\u6b64\u7121\u6cd5\u767c\u9001\u4ea4\u6613\u3002\u8acb\u6aa2\u67e5\u60a8\u7684\u4ea4\u6613\u622a\u6b62\u671f\u9650\u8a2d\u7f6e\u3002","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u7531\u65bc\u514c\u63db\u7387\u8b8a\u52d5\uff0c\u8a72\u4ea4\u6613\u5c07\u4e0d\u6703\u6210\u529f\u3002\u8acb\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207Uniswap V3\u4e0d\u517c\u5bb9\u3002","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"\u7531\u65bc\u514c\u63db\u7387\u8b8a\u52d5\u6216\u4ee3\u5e63\u5e36\u6709\u8f49\u8cec\u6642\u7684\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\uff0c\u8a72\u4ea4\u6613\u5c07\u4e0d\u6703\u6210\u529f\u3002\u8acb\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002","Transaction confirmed":"\u4ea4\u6613\u78ba\u8a8d","Transaction deadline":"\u4ea4\u6613\u622a\u6b62\u671f\u9650","Transaction pending":"\u4ea4\u6613\u5f85\u5b9a","Transaction rejected.":"\u4ea4\u6613\u88ab\u62d2\u7d55\u3002","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002<0/>\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207Uniswap V3\u4e0d\u76f8\u5bb9\u3002","Unexpected error. Could not estimate gas for the swap.":"\u932f\u8aa4\u3002\u7121\u6cd5\u4f30\u8a08\u5151\u6362\u6240\u9700\u7684 gas\u3002","Unexpected issue with estimating the gas. Please try again.":"\u4f30\u8a08 gas \u6642\u9047\u5230\u554f\u984c\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["\u672a\u77e5\u932f\u8aa4",["0"],"\u3002\u8acb\u5617\u8a66\u589e\u52a0\u6ed1\u9ede\u5bb9\u5dee\u3002\u8a3b\uff1a\u8f49\u8cec\u6642\u5e36\u6263\u9664\u8cbb\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e63\u548c\u6703\u81ea\u52d5\u91cd\u65b0\u5b9a\u50f9\uff08rebase\uff09\u7684\u4ee3\u5e63\u90fd\u8207Uniswap V3\u4e0d\u76f8\u5bb9\u3002"],"Unsupported network - switch to another to trade":"\u4e0d\u652f\u6301\u7684\u7db2\u7d61 - \u5207\u63db\u5230\u53e6\u4e00\u500b\u9032\u884c\u4ea4\u6613","Unwrap confirmed":"\u6253\u958b\u5305\u88dd\u78ba\u8a8d","Unwrap pending":"\u6253\u958b\u5f85\u8655\u7406","View on Etherscan":"\u5728Etherscan\u4e0a\u67e5\u770b","Your transaction will revert if it has been pending for longer than this period of time.":"\u5982\u679c\u60a8\u7684\u4ea4\u6613\u5f85\u8655\u7406\u7684\u6642\u9593\u8d85\u904e\u6b64\u6642\u9593\u6bb5\uff0c\u4ea4\u6613\u5c07\u6062\u5fa9\u3002","Your transaction will revert if the price changes unfavorably by more than this percentage.":"\u5982\u679c\u514c\u63db\u7387\u8b8a\u52d5\u8d85\u904e\u6b64\u767e\u5206\u6bd4\uff0c\u5247\u5c07\u9084\u539f\u8a72\u4ea4\u6613\u3002",minutes:"\u5206\u9418","{0} {1}":[["0"]," ",["1"]],"{caption}":[["caption"]],"{integrator} fee":[["integrator"]," \u8cbb\u7528"],"{min}m {sec}s":[["min"],"\u5206\u9418 ",["sec"],"\u79d2"],"{sec}s":[["sec"],"\u79d2"]}}}}]);
//# sourceMappingURL=89.d20a73b9.chunk.js.map