import protobuf from 'protobufjs';

var skeleton = '{"nested":{"cothority":{},"authprox":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"AuthProxProto"},"nested":{"EnrollRequest":{"fields":{"type":{"rule":"required","type":"string","id":1},"issuer":{"rule":"required","type":"string","id":2},"participants":{"rule":"repeated","type":"bytes","id":3},"longpri":{"rule":"required","type":"PriShare","id":4},"longpubs":{"rule":"repeated","type":"bytes","id":5}}},"EnrollResponse":{"fields":{}},"SignatureRequest":{"fields":{"type":{"rule":"required","type":"string","id":1},"issuer":{"rule":"required","type":"string","id":2},"authinfo":{"rule":"required","type":"bytes","id":3},"randpri":{"rule":"required","type":"PriShare","id":4},"randpubs":{"rule":"repeated","type":"bytes","id":5},"message":{"rule":"required","type":"bytes","id":6}}},"PriShare":{"fields":{}},"PartialSig":{"fields":{"partial":{"rule":"required","type":"PriShare","id":1},"sessionid":{"rule":"required","type":"bytes","id":2},"signature":{"rule":"required","type":"bytes","id":3}}},"SignatureResponse":{"fields":{"partialsignature":{"rule":"required","type":"PartialSig","id":1}}},"EnrollmentsRequest":{"fields":{"types":{"rule":"repeated","type":"string","id":1},"issuers":{"rule":"repeated","type":"string","id":2}}},"EnrollmentsResponse":{"fields":{"enrollments":{"rule":"repeated","type":"EnrollmentInfo","id":1,"options":{"packed":false}}}},"EnrollmentInfo":{"fields":{"type":{"rule":"required","type":"string","id":1},"issuer":{"rule":"required","type":"string","id":2},"public":{"rule":"required","type":"bytes","id":3}}}}},"byzcoin":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"ByzCoinProto"},"nested":{"DataHeader":{"fields":{"trieroot":{"rule":"required","type":"bytes","id":1},"clienttransactionhash":{"rule":"required","type":"bytes","id":2},"statechangeshash":{"rule":"required","type":"bytes","id":3},"timestamp":{"rule":"required","type":"sint64","id":4}}},"DataBody":{"fields":{"txresults":{"rule":"repeated","type":"TxResult","id":1,"options":{"packed":false}}}},"CreateGenesisBlock":{"fields":{"version":{"rule":"required","type":"sint32","id":1},"roster":{"rule":"required","type":"onet.Roster","id":2},"genesisdarc":{"rule":"required","type":"darc.Darc","id":3},"blockinterval":{"rule":"required","type":"sint64","id":4},"maxblocksize":{"type":"sint32","id":5},"darccontractids":{"rule":"repeated","type":"string","id":6}}},"CreateGenesisBlockResponse":{"fields":{"version":{"rule":"required","type":"sint32","id":1},"skipblock":{"type":"skipchain.SkipBlock","id":2}}},"AddTxRequest":{"fields":{"version":{"rule":"required","type":"sint32","id":1},"skipchainid":{"rule":"required","type":"bytes","id":2},"transaction":{"rule":"required","type":"ClientTransaction","id":3},"inclusionwait":{"type":"sint32","id":4}}},"AddTxResponse":{"fields":{"version":{"rule":"required","type":"sint32","id":1}}},"GetProof":{"fields":{"version":{"rule":"required","type":"sint32","id":1},"key":{"rule":"required","type":"bytes","id":2},"id":{"rule":"required","type":"bytes","id":3}}},"GetProofResponse":{"fields":{"version":{"rule":"required","type":"sint32","id":1},"proof":{"rule":"required","type":"Proof","id":2}}},"CheckAuthorization":{"fields":{"version":{"rule":"required","type":"sint32","id":1},"byzcoinid":{"rule":"required","type":"bytes","id":2},"darcid":{"rule":"required","type":"bytes","id":3},"identities":{"rule":"repeated","type":"darc.Identity","id":4,"options":{"packed":false}}}},"CheckAuthorizationResponse":{"fields":{"actions":{"rule":"repeated","type":"string","id":1}}},"ChainConfig":{"fields":{"blockinterval":{"rule":"required","type":"sint64","id":1},"roster":{"rule":"required","type":"onet.Roster","id":2},"maxblocksize":{"rule":"required","type":"sint32","id":3},"darccontractids":{"rule":"repeated","type":"string","id":4}}},"Proof":{"fields":{"inclusionproof":{"rule":"required","type":"trie.Proof","id":1},"latest":{"rule":"required","type":"skipchain.SkipBlock","id":2},"links":{"rule":"repeated","type":"skipchain.ForwardLink","id":3,"options":{"packed":false}}}},"Instruction":{"fields":{"instanceid":{"rule":"required","type":"bytes","id":1},"spawn":{"type":"Spawn","id":2},"invoke":{"type":"Invoke","id":3},"delete":{"type":"Delete","id":4},"signercounter":{"rule":"repeated","type":"uint64","id":5,"options":{"packed":true}},"signeridentities":{"rule":"repeated","type":"darc.Identity","id":6,"options":{"packed":false}},"signatures":{"rule":"repeated","type":"bytes","id":7}}},"Spawn":{"fields":{"contractid":{"rule":"required","type":"string","id":1},"args":{"rule":"repeated","type":"Argument","id":2,"options":{"packed":false}}}},"Invoke":{"fields":{"contractid":{"rule":"required","type":"string","id":1},"command":{"rule":"required","type":"string","id":2},"args":{"rule":"repeated","type":"Argument","id":3,"options":{"packed":false}}}},"Delete":{"fields":{"contractid":{"rule":"required","type":"string","id":1}}},"Argument":{"fields":{"name":{"rule":"required","type":"string","id":1},"value":{"rule":"required","type":"bytes","id":2}}},"ClientTransaction":{"fields":{"instructions":{"rule":"repeated","type":"Instruction","id":1,"options":{"packed":false}}}},"TxResult":{"fields":{"clienttransaction":{"rule":"required","type":"ClientTransaction","id":1},"accepted":{"rule":"required","type":"bool","id":2}}},"StateChange":{"fields":{"stateaction":{"rule":"required","type":"sint32","id":1},"instanceid":{"rule":"required","type":"bytes","id":2},"contractid":{"rule":"required","type":"bytes","id":3},"value":{"rule":"required","type":"bytes","id":4},"darcid":{"rule":"required","type":"bytes","id":5},"version":{"rule":"required","type":"uint64","id":6}}},"Coin":{"fields":{"name":{"rule":"required","type":"bytes","id":1},"value":{"rule":"required","type":"uint64","id":2}}},"StreamingRequest":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"StreamingResponse":{"fields":{"block":{"type":"skipchain.SkipBlock","id":1}}},"DownloadState":{"fields":{"byzcoinid":{"rule":"required","type":"bytes","id":1},"nonce":{"rule":"required","type":"uint64","id":2},"length":{"rule":"required","type":"sint32","id":3}}},"DownloadStateResponse":{"fields":{"keyvalues":{"rule":"repeated","type":"DBKeyValue","id":1,"options":{"packed":false}},"nonce":{"rule":"required","type":"uint64","id":2}}},"DBKeyValue":{"fields":{"key":{"rule":"required","type":"bytes","id":1},"value":{"rule":"required","type":"bytes","id":2}}},"StateChangeBody":{"fields":{"stateaction":{"rule":"required","type":"sint32","id":1},"contractid":{"rule":"required","type":"bytes","id":2},"value":{"rule":"required","type":"bytes","id":3},"version":{"rule":"required","type":"uint64","id":4},"darcid":{"rule":"required","type":"bytes","id":5}}},"GetSignerCounters":{"fields":{"signerids":{"rule":"repeated","type":"string","id":1},"skipchainid":{"rule":"required","type":"bytes","id":2}}},"GetSignerCountersResponse":{"fields":{"counters":{"rule":"repeated","type":"uint64","id":1,"options":{"packed":true}}}},"GetInstanceVersion":{"fields":{"skipchainid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2},"version":{"rule":"required","type":"uint64","id":3}}},"GetLastInstanceVersion":{"fields":{"skipchainid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2}}},"GetInstanceVersionResponse":{"fields":{"statechange":{"rule":"required","type":"StateChange","id":1},"blockindex":{"rule":"required","type":"sint32","id":2}}},"GetAllInstanceVersion":{"fields":{"skipchainid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2}}},"GetAllInstanceVersionResponse":{"fields":{"statechanges":{"rule":"repeated","type":"GetInstanceVersionResponse","id":1,"options":{"packed":false}}}},"CheckStateChangeValidity":{"fields":{"skipchainid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2},"version":{"rule":"required","type":"uint64","id":3}}},"CheckStateChangeValidityResponse":{"fields":{"statechanges":{"rule":"repeated","type":"StateChange","id":1,"options":{"packed":false}},"blockid":{"rule":"required","type":"bytes","id":2}}},"DebugRequest":{"fields":{"byzcoinid":{"type":"bytes","id":1}}},"DebugResponse":{"fields":{"byzcoins":{"rule":"repeated","type":"DebugResponseByzcoin","id":1,"options":{"packed":false}},"dump":{"rule":"repeated","type":"DebugResponseState","id":2,"options":{"packed":false}}}},"DebugResponseByzcoin":{"fields":{"byzcoinid":{"rule":"required","type":"bytes","id":1},"genesis":{"type":"skipchain.SkipBlock","id":2},"latest":{"type":"skipchain.SkipBlock","id":3}}},"DebugResponseState":{"fields":{"key":{"rule":"required","type":"bytes","id":1},"state":{"rule":"required","type":"StateChangeBody","id":2}}},"DebugRemoveRequest":{"fields":{"byzcoinid":{"rule":"required","type":"bytes","id":1},"signature":{"rule":"required","type":"bytes","id":2}}}}},"skipchain":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"SkipchainProto"},"nested":{"StoreSkipBlock":{"fields":{"targetSkipChainID":{"rule":"required","type":"bytes","id":1},"newBlock":{"rule":"required","type":"SkipBlock","id":2},"signature":{"type":"bytes","id":3}}},"StoreSkipBlockReply":{"fields":{"previous":{"type":"SkipBlock","id":1},"latest":{"rule":"required","type":"SkipBlock","id":2}}},"GetAllSkipChainIDs":{"fields":{}},"GetAllSkipChainIDsReply":{"fields":{"skipChainIDs":{"rule":"repeated","type":"bytes","id":1}}},"GetSingleBlock":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"GetSingleBlockByIndex":{"fields":{"genesis":{"rule":"required","type":"bytes","id":1},"index":{"rule":"required","type":"sint32","id":2}}},"GetSingleBlockByIndexReply":{"fields":{"skipblock":{"rule":"required","type":"SkipBlock","id":1},"links":{"rule":"repeated","type":"ForwardLink","id":2,"options":{"packed":false}}}},"GetUpdateChain":{"fields":{"latestID":{"rule":"required","type":"bytes","id":1}}},"GetUpdateChainReply":{"fields":{"update":{"rule":"repeated","type":"SkipBlock","id":1,"options":{"packed":false}}}},"SkipBlock":{"fields":{"index":{"rule":"required","type":"sint32","id":1},"height":{"rule":"required","type":"sint32","id":2},"maxHeight":{"rule":"required","type":"sint32","id":3},"baseHeight":{"rule":"required","type":"sint32","id":4},"backlinks":{"rule":"repeated","type":"bytes","id":5},"verifiers":{"rule":"repeated","type":"bytes","id":6},"genesis":{"rule":"required","type":"bytes","id":7},"data":{"rule":"required","type":"bytes","id":8},"roster":{"rule":"required","type":"onet.Roster","id":9},"hash":{"rule":"required","type":"bytes","id":10},"forward":{"rule":"repeated","type":"ForwardLink","id":11,"options":{"packed":false}},"payload":{"type":"bytes","id":12}}},"ForwardLink":{"fields":{"from":{"rule":"required","type":"bytes","id":1},"to":{"rule":"required","type":"bytes","id":2},"newRoster":{"type":"onet.Roster","id":3},"signature":{"rule":"required","type":"ByzcoinSig","id":4}}},"ByzcoinSig":{"fields":{"msg":{"rule":"required","type":"bytes","id":1},"sig":{"rule":"required","type":"bytes","id":2}}},"SchnorrSig":{"fields":{"challenge":{"rule":"required","type":"bytes","id":1},"response":{"rule":"required","type":"bytes","id":2}}},"Exception":{"fields":{"index":{"rule":"required","type":"sint32","id":1},"commitment":{"rule":"required","type":"bytes","id":2}}}}},"onet":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"OnetProto"},"nested":{"Roster":{"fields":{"id":{"type":"bytes","id":1},"list":{"rule":"repeated","type":"network.ServerIdentity","id":2,"options":{"packed":false}},"aggregate":{"rule":"required","type":"bytes","id":3}}},"Status":{"fields":{"field":{"keyType":"string","type":"string","id":1}}}}},"network":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"NetworkProto"},"nested":{"ServerIdentity":{"fields":{"public":{"rule":"required","type":"bytes","id":1},"serviceIdentities":{"rule":"repeated","type":"ServiceIdentity","id":2,"options":{"packed":false}},"id":{"rule":"required","type":"bytes","id":3},"address":{"rule":"required","type":"string","id":4},"description":{"rule":"required","type":"string","id":5},"url":{"type":"string","id":6}}},"ServiceIdentity":{"fields":{"name":{"rule":"required","type":"string","id":1},"suite":{"rule":"required","type":"string","id":2},"public":{"rule":"required","type":"bytes","id":3}}}}},"darc":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"DarcProto"},"nested":{"Darc":{"fields":{"version":{"rule":"required","type":"uint64","id":1},"description":{"rule":"required","type":"bytes","id":2},"baseid":{"type":"bytes","id":3},"previd":{"rule":"required","type":"bytes","id":4},"rules":{"rule":"required","type":"Rules","id":5},"signatures":{"rule":"repeated","type":"Signature","id":6,"options":{"packed":false}},"verificationdarcs":{"rule":"repeated","type":"Darc","id":7,"options":{"packed":false}}}},"Identity":{"fields":{"darc":{"type":"IdentityDarc","id":1},"ed25519":{"type":"IdentityEd25519","id":2},"x509ec":{"type":"IdentityX509EC","id":3},"proxy":{"type":"IdentityProxy","id":4}}},"IdentityEd25519":{"fields":{"point":{"rule":"required","type":"bytes","id":1}}},"IdentityX509EC":{"fields":{"public":{"rule":"required","type":"bytes","id":1}}},"IdentityProxy":{"fields":{"data":{"rule":"required","type":"string","id":1},"public":{"rule":"required","type":"bytes","id":2}}},"IdentityDarc":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"Signature":{"fields":{"signature":{"rule":"required","type":"bytes","id":1},"signer":{"rule":"required","type":"Identity","id":2}}},"Signer":{"fields":{"ed25519":{"type":"SignerEd25519","id":1},"x509ec":{"type":"SignerX509EC","id":2},"proxy":{"type":"SignerProxy","id":3}}},"SignerEd25519":{"fields":{"point":{"rule":"required","type":"bytes","id":1},"secret":{"rule":"required","type":"bytes","id":2}}},"SignerX509EC":{"fields":{"point":{"rule":"required","type":"bytes","id":1}}},"SignerProxy":{"fields":{"data":{"rule":"required","type":"string","id":1},"public":{"rule":"required","type":"bytes","id":2}}},"Request":{"fields":{"baseid":{"rule":"required","type":"bytes","id":1},"action":{"rule":"required","type":"string","id":2},"msg":{"rule":"required","type":"bytes","id":3},"identities":{"rule":"repeated","type":"Identity","id":4,"options":{"packed":false}},"signatures":{"rule":"repeated","type":"bytes","id":5}}},"Rules":{"fields":{"list":{"rule":"repeated","type":"Rule","id":1,"options":{"packed":false}}}},"Rule":{"fields":{"action":{"rule":"required","type":"string","id":1},"expr":{"rule":"required","type":"bytes","id":2}}}}},"trie":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"TrieProto"},"nested":{"InteriorNode":{"fields":{"left":{"rule":"required","type":"bytes","id":1},"right":{"rule":"required","type":"bytes","id":2}}},"EmptyNode":{"fields":{"prefix":{"rule":"repeated","type":"bool","id":1,"options":{"packed":true}}}},"LeafNode":{"fields":{"prefix":{"rule":"repeated","type":"bool","id":1,"options":{"packed":true}},"key":{"rule":"required","type":"bytes","id":2},"value":{"rule":"required","type":"bytes","id":3}}},"Proof":{"fields":{"interiors":{"rule":"repeated","type":"InteriorNode","id":1,"options":{"packed":false}},"leaf":{"rule":"required","type":"LeafNode","id":2},"empty":{"rule":"required","type":"EmptyNode","id":3},"nonce":{"rule":"required","type":"bytes","id":4}}}}},"calypso":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"Calypso"},"nested":{"Write":{"fields":{"data":{"rule":"required","type":"bytes","id":1},"u":{"rule":"required","type":"bytes","id":2},"ubar":{"rule":"required","type":"bytes","id":3},"e":{"rule":"required","type":"bytes","id":4},"f":{"rule":"required","type":"bytes","id":5},"c":{"rule":"required","type":"bytes","id":6},"extradata":{"type":"bytes","id":7},"ltsid":{"rule":"required","type":"bytes","id":8}}},"Read":{"fields":{"write":{"rule":"required","type":"bytes","id":1},"xc":{"rule":"required","type":"bytes","id":2}}},"Authorise":{"fields":{"byzcoinid":{"rule":"required","type":"bytes","id":1}}},"AuthoriseReply":{"fields":{}},"CreateLTS":{"fields":{"proof":{"rule":"required","type":"byzcoin.Proof","id":1}}},"CreateLTSReply":{"fields":{"byzcoinid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2},"x":{"rule":"required","type":"bytes","id":3}}},"ReshareLTS":{"fields":{"proof":{"rule":"required","type":"byzcoin.Proof","id":1}}},"ReshareLTSReply":{"fields":{}},"DecryptKey":{"fields":{"read":{"rule":"required","type":"byzcoin.Proof","id":1},"write":{"rule":"required","type":"byzcoin.Proof","id":2}}},"DecryptKeyReply":{"fields":{"c":{"rule":"required","type":"bytes","id":1},"xhatenc":{"rule":"required","type":"bytes","id":2},"x":{"rule":"required","type":"bytes","id":3}}},"GetLTSReply":{"fields":{"ltsid":{"rule":"required","type":"bytes","id":1}}},"LtsInstanceInfo":{"fields":{"roster":{"rule":"required","type":"onet.Roster","id":1}}}}},"cisc":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"CiscProto"},"nested":{"IDBlock":{"fields":{"latest":{"type":"Data","id":1},"proposed":{"type":"Data","id":2},"latestskipblock":{"type":"skipchain.SkipBlock","id":3}}},"Data":{"fields":{"threshold":{"rule":"required","type":"sint32","id":1},"device":{"keyType":"string","type":"Device","id":2},"storage":{"keyType":"string","type":"string","id":3},"roster":{"type":"onet.Roster","id":4},"votes":{"keyType":"string","type":"bytes","id":5}}},"Device":{"fields":{"point":{"rule":"required","type":"bytes","id":1}}},"PinRequest":{"fields":{"pin":{"rule":"required","type":"string","id":1},"public":{"rule":"required","type":"bytes","id":2}}},"StoreKeys":{"fields":{"type":{"rule":"required","type":"sint32","id":1},"final":{"type":"pop.FinalStatement","id":2},"publics":{"rule":"repeated","type":"bytes","id":3},"sig":{"rule":"required","type":"bytes","id":4}}},"CreateIdentity":{"fields":{"data":{"type":"Data","id":1},"type":{"rule":"required","type":"sint32","id":2},"schnsig":{"type":"bytes","id":3},"sig":{"rule":"required","type":"bytes","id":4},"nonce":{"rule":"required","type":"bytes","id":5}}},"CreateIdentityReply":{"fields":{"genesis":{"type":"skipchain.SkipBlock","id":1}}},"DataUpdate":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"DataUpdateReply":{"fields":{"data":{"type":"Data","id":1}}},"ProposeSend":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"propose":{"type":"Data","id":2}}},"ProposeUpdate":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"ProposeUpdateReply":{"fields":{"propose":{"type":"Data","id":1}}},"ProposeVote":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"signer":{"rule":"required","type":"string","id":2},"signature":{"rule":"required","type":"bytes","id":3}}},"ProposeVoteReply":{"fields":{"data":{"type":"skipchain.SkipBlock","id":1}}},"PropagateIdentity":{"fields":{"idblock":{"type":"IDBlock","id":1},"tag":{"rule":"required","type":"string","id":2},"pubstr":{"rule":"required","type":"string","id":3}}},"UpdateSkipBlock":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"latest":{"type":"skipchain.SkipBlock","id":2}}},"Authenticate":{"fields":{"nonce":{"rule":"required","type":"bytes","id":1},"ctx":{"rule":"required","type":"bytes","id":2}}}}},"pop":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"PoPProto"},"nested":{"ShortDesc":{"fields":{"location":{"rule":"required","type":"string","id":1},"roster":{"type":"onet.Roster","id":2}}},"PopDesc":{"fields":{"name":{"rule":"required","type":"string","id":1},"datetime":{"rule":"required","type":"string","id":2},"location":{"rule":"required","type":"string","id":3},"roster":{"type":"onet.Roster","id":4},"parties":{"rule":"repeated","type":"ShortDesc","id":5,"options":{"packed":false}}}},"FinalStatement":{"fields":{"desc":{"type":"PopDesc","id":1},"attendees":{"rule":"repeated","type":"bytes","id":2},"signature":{"rule":"required","type":"bytes","id":3},"merged":{"rule":"required","type":"bool","id":4}}},"CheckConfig":{"fields":{"pophash":{"rule":"required","type":"bytes","id":1},"attendees":{"rule":"repeated","type":"bytes","id":2}}},"CheckConfigReply":{"fields":{"popstatus":{"rule":"required","type":"sint32","id":1},"pophash":{"rule":"required","type":"bytes","id":2},"attendees":{"rule":"repeated","type":"bytes","id":3}}},"MergeConfig":{"fields":{"final":{"type":"FinalStatement","id":1},"id":{"rule":"required","type":"bytes","id":2}}},"MergeConfigReply":{"fields":{"popstatus":{"rule":"required","type":"sint32","id":1},"pophash":{"rule":"required","type":"bytes","id":2},"final":{"type":"FinalStatement","id":3}}},"PinRequest":{"fields":{"pin":{"rule":"required","type":"string","id":1},"public":{"rule":"required","type":"bytes","id":2}}},"StoreConfig":{"fields":{"desc":{"type":"PopDesc","id":1},"signature":{"rule":"required","type":"bytes","id":2}}},"StoreConfigReply":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"FinalizeRequest":{"fields":{"descid":{"rule":"required","type":"bytes","id":1},"attendees":{"rule":"repeated","type":"bytes","id":2},"signature":{"rule":"required","type":"bytes","id":3}}},"FinalizeResponse":{"fields":{"final":{"type":"FinalStatement","id":1}}},"FetchRequest":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"returnuncomplete":{"type":"bool","id":2}}},"MergeRequest":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"signature":{"rule":"required","type":"bytes","id":2}}},"GetProposals":{"fields":{}},"GetProposalsReply":{"fields":{"proposals":{"rule":"repeated","type":"PopDesc","id":1,"options":{"packed":false}}}},"VerifyLink":{"fields":{"public":{"rule":"required","type":"bytes","id":1}}},"VerifyLinkReply":{"fields":{"exists":{"rule":"required","type":"bool","id":1}}},"GetLink":{"fields":{}},"GetLinkReply":{"fields":{"public":{"rule":"required","type":"bytes","id":1}}},"GetFinalStatements":{"fields":{}},"GetFinalStatementsReply":{"fields":{"finalstatements":{"keyType":"string","type":"FinalStatement","id":1}}},"StoreInstanceID":{"fields":{"partyid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2},"darcid":{"rule":"required","type":"bytes","id":3}}},"StoreInstanceIDReply":{"fields":{}},"GetInstanceID":{"fields":{"partyid":{"rule":"required","type":"bytes","id":1}}},"GetInstanceIDReply":{"fields":{"instanceid":{"rule":"required","type":"bytes","id":1},"darcid":{"rule":"required","type":"bytes","id":2}}},"StoreSigner":{"fields":{"partyid":{"rule":"required","type":"bytes","id":1},"signer":{"rule":"required","type":"darc.Signer","id":2}}},"StoreSignerReply":{"fields":{}},"GetSigner":{"fields":{"partyid":{"rule":"required","type":"bytes","id":1}}},"GetSignerReply":{"fields":{"signer":{"rule":"required","type":"darc.Signer","id":1}}},"StoreKeys":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"keys":{"rule":"repeated","type":"bytes","id":2},"signature":{"rule":"required","type":"bytes","id":3}}},"StoreKeysReply":{"fields":{}},"GetKeys":{"fields":{"id":{"rule":"required","type":"bytes","id":1}}},"GetKeysReply":{"fields":{"id":{"rule":"required","type":"bytes","id":1},"keys":{"rule":"repeated","type":"bytes","id":2}}},"PopPartyInstance":{"fields":{"state":{"rule":"required","type":"sint32","id":1},"finalstatement":{"type":"FinalStatement","id":2},"previous":{"rule":"required","type":"bytes","id":3},"next":{"rule":"required","type":"bytes","id":4},"service":{"type":"bytes","id":5}}}}},"eventlog":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"EventLogProto"},"nested":{"SearchRequest":{"fields":{"instance":{"rule":"required","type":"bytes","id":1},"id":{"rule":"required","type":"bytes","id":2},"topic":{"rule":"required","type":"string","id":3},"from":{"rule":"required","type":"sint64","id":4},"to":{"rule":"required","type":"sint64","id":5}}},"SearchResponse":{"fields":{"events":{"rule":"repeated","type":"Event","id":1,"options":{"packed":false}},"truncated":{"rule":"required","type":"bool","id":2}}},"Event":{"fields":{"when":{"rule":"required","type":"sint64","id":1},"topic":{"rule":"required","type":"string","id":2},"content":{"rule":"required","type":"string","id":3}}}}},"personhood":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"Personhood"},"nested":{"LinkPoP":{"fields":{"party":{"rule":"required","type":"Party","id":1}}},"Party":{"fields":{"byzcoinid":{"rule":"required","type":"bytes","id":1},"instanceid":{"rule":"required","type":"bytes","id":2},"finalstatement":{"rule":"required","type":"pop.FinalStatement","id":3},"darc":{"rule":"required","type":"darc.Darc","id":4},"signer":{"rule":"required","type":"darc.Signer","id":5}}},"StringReply":{"fields":{"reply":{"rule":"required","type":"string","id":1}}},"Questionnaire":{"fields":{"title":{"rule":"required","type":"string","id":1},"questions":{"rule":"repeated","type":"string","id":2},"replies":{"rule":"required","type":"sint32","id":3},"balance":{"rule":"required","type":"uint64","id":4},"reward":{"rule":"required","type":"uint64","id":5},"id":{"rule":"required","type":"bytes","id":6}}},"Reply":{"fields":{"sum":{"rule":"repeated","type":"sint32","id":1,"options":{"packed":true}},"users":{"rule":"repeated","type":"bytes","id":2}}},"RegisterQuestionnaire":{"fields":{"questionnaire":{"rule":"required","type":"Questionnaire","id":1}}},"ListQuestionnaires":{"fields":{"start":{"rule":"required","type":"sint32","id":1},"number":{"rule":"required","type":"sint32","id":2}}},"ListQuestionnairesReply":{"fields":{"questionnaires":{"rule":"repeated","type":"Questionnaire","id":1,"options":{"packed":false}}}},"AnswerQuestionnaire":{"fields":{"questid":{"rule":"required","type":"bytes","id":1},"replies":{"rule":"repeated","type":"sint32","id":2,"options":{"packed":true}},"account":{"rule":"required","type":"bytes","id":3}}},"TopupQuestionnaire":{"fields":{"questid":{"rule":"required","type":"bytes","id":1},"topup":{"rule":"required","type":"uint64","id":2}}},"Message":{"fields":{"subject":{"rule":"required","type":"string","id":1},"date":{"rule":"required","type":"uint64","id":2},"text":{"rule":"required","type":"string","id":3},"author":{"rule":"required","type":"bytes","id":4},"balance":{"rule":"required","type":"uint64","id":5},"reward":{"rule":"required","type":"uint64","id":6},"id":{"rule":"required","type":"bytes","id":7},"partyiid":{"rule":"required","type":"bytes","id":8}}},"SendMessage":{"fields":{"message":{"rule":"required","type":"Message","id":1}}},"ListMessages":{"fields":{"start":{"rule":"required","type":"sint32","id":1},"number":{"rule":"required","type":"sint32","id":2},"readerid":{"rule":"required","type":"bytes","id":3}}},"ListMessagesReply":{"fields":{"subjects":{"rule":"repeated","type":"string","id":1},"msgids":{"rule":"repeated","type":"bytes","id":2},"balances":{"rule":"repeated","type":"uint64","id":3,"options":{"packed":true}},"rewards":{"rule":"repeated","type":"uint64","id":4,"options":{"packed":true}},"partyiids":{"rule":"repeated","type":"bytes","id":5}}},"ReadMessage":{"fields":{"msgid":{"rule":"required","type":"bytes","id":1},"partyiid":{"rule":"required","type":"bytes","id":2},"reader":{"rule":"required","type":"bytes","id":3}}},"ReadMessageReply":{"fields":{"message":{"rule":"required","type":"Message","id":1},"rewarded":{"rule":"required","type":"bool","id":2}}},"TopupMessage":{"fields":{"msgid":{"rule":"required","type":"bytes","id":1},"amount":{"rule":"required","type":"uint64","id":2}}}}},"status":{"options":{"java_package":"ch.epfl.dedis.lib.proto","java_outer_classname":"StatusProto"},"nested":{"Request":{"fields":{}},"Response":{"fields":{"status":{"keyType":"string","type":"onet.Status","id":1},"serveridentity":{"type":"network.ServerIdentity","id":2}}}}}}}';

const {Root} = protobuf;

/**
 * As we need to create a bundle, we cannot use the *.proto files and the a script will wrap
 * them in a skeleton file that contains the JSON representation that can be used in the js code
 */
var Root$1 = Root.fromJSON(JSON.parse(skeleton));

/**
 * Base class for the protobuf library that provides helpers to encode and decode
 * messages according to a given model
 *
 * @author Gaylor Bosson (gaylor.bosson@epfl.ch)
 */
class CothorityProtobuf {

  /**
   * @constructor
   */
  constructor() {
    this.root = Root$1;
  }
  
  /**
   * Encode a model to be transmitted over websocket
   * @param {String} name
   * @param {Object} fields
   * @returns {*|Buffer|Uint8Array}
   */
  encodeMessage(name, fields) {
    const model = this.getModel(name);
	if (model === null) {
	  throw new Error("model for " + name + " not found")
	}
    
    // Create the message with the model
    const msg = model.create(fields);

    // Encode the message in a BufferArray
    return model.encode(msg).finish();
  }
  
  /**
   * Decode a message coming from a websocket
   * @param {String} name
   * @param {*|Buffer|Uint8Array} buffer
   */
  decodeMessage(name, buffer) {
    const model = this.getModel(name);
	if (model === null) {
	  throw new Error("model for " + name + " not found")
	}
    return model.decode(buffer);
  }
  
  /**
   * Return the protobuf loaded model
   * @param {String} name
   * @returns {ReflectionObject|?ReflectionObject|string}
   */
  getModel(name) {
    return this.root.lookup(`${name}`);
  }
}

/**
 * Helpers to encode and decode messages of the Cothority
 *
 * @author Gaylor Bosson (gaylor.bosson@epfl.ch)
 */
class CothorityMessages extends CothorityProtobuf {

  /**
   * Create an encoded message to make a sign request to a cothority node
   * @param {Uint8Array} message - Message to sign stored in a Uint8Array
   * @param {Array} servers - list of ServerIdentity
   * @returns {*|Buffer|Uint8Array}
   */
  createSignatureRequest(message, servers) {
    if (!(message instanceof Uint8Array)) {
      throw new Error("message must be a instance of Uint8Array");
    }

    const fields = {
      message,
      roster: {
        list: servers
      }
    };

    return this.encodeMessage('SignatureRequest', fields);
  }

  /**
   * Return the decoded response of a signature request
   * @param {*|Buffer|Uint8Array} response - Response of the Cothority
   * @returns {Object}
   */
  decodeSignatureResponse(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('SignatureResponse', response);
  }

  /**
   * Return the decoded response of a status request
   * @param {*|Buffer|Uint8Array} response - Response of the Cothority
   * @returns {*}
   */
  decodeStatusResponse(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('Response', response);
  }

  /**
   * Create a message to store a new block
   * @param {Uint8Array} id - ID of the current latest block
   * @param {Array} servers - list of ServerIdentity
   * @returns {*|Buffer|Uint8Array}
   */
  createStoreSkipBlockRequest(id, servers) {
    if (!(id instanceof Uint8Array)) {
      throw new Error("message must be a instance of Uint8Array");
    }

    return this.encodeMessage('StoreSkipBlockRequest', {
      LatestID: id,
      NewBlock: {
        MaximumHeight: 1,
        BaseHeight: 1,
        Data: new Uint8Array([]),
        Roster: {
          list: servers
        }
      }
    });
  }

  /**
   * Return the decoded message of a store skip block request
   * @param {*|Buffer|Uint8Array} response - Response of the Cothority
   * @returns {*}
   */
  decodeStoreSkipBlockResponse(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('StoreSkipBlockResponse', response);
  }

  /**
   * Create a message request to get the latest blocks of a skip-chain
   * @param {Uint8Array} id - ID of the genesis block of the skip-chain
   * @returns {*|Buffer|Uint8Array}
   */
  createLatestBlockRequest(id) {
    if (!(id instanceof Uint8Array)) {
      throw new Error("message must be a instance of Uint8Array");
    }
    return this.encodeMessage('GetUpdateChain', {
      latestID: id
    });
  }

  /**
   * Return the decoded message of a latest block request
   * @param {*|Buffer|Uint8Array} response - Response of the Cothority
   * @returns {*}
   */
  decodeLatestBlockResponse(response) {
    response = new Uint8Array(response);
    return this.decodeMessage('GetUpdateChainReply', response);
  }

  /**
   * Create an encoded message to make a PinRequest to a cothority node
   * @param pin previously generated by the conode
   * @param publicKey
   * @returns {*|Buffer|Uint8Array}
   */
  createPinRequest(pin, publicKey) {
    const fields = {
      pin: pin,
      public: publicKey
    };

    return this.encodeMessage('PinRequest', fields);
  }

  /**
   * Create an encoded message to store configuration information of a given PoP party
   * @param name
   * @param date
   * @param location
   * @param id
   * @param servers
   * @param aggregate
   * @returns {*|Buffer|Uint8Array}
   */
  createStoreConfig(name, date, location, id, servers, aggregate) {
    const fields = {
      desc: {
        name: name,
        dateTime: date,
        location: location,
        roster: {
          id: id,
          list: servers,
          aggregate: aggregate
        }
      }
    };

    return this.encodeMessage('StoreConfig', fields);
  }

  /**
   * Return the decoded response
   * @param response
   * @returns {*}
   */
  deccdeStoreConfigReply(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('StoreConfigReply', response);
  }

  /**
   * Create an encoded message to finalize on the given descid-popconfig
   * @param descId
   * @param attendees
   * @returns {*|Buffer|Uint8Array}
   */
  createFinalizeRequest(descId, attendees) {
    const fields = {
      descId: descId,
      attendees: attendees
    };

    return this.encodeMessage('FinalizeRequest', fields);
  }

  /**
   * Return the decoded response
   * @param response
   * @returns {*}
   */
  decodeFinalizeResponse(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('FinalizeResponse', response);
  }

  /**
   * Create a message request to get the config of a given conode
   * @param id
   * @returns {*|Buffer|Uint8Array}
   */
  createConfigUpdate(id) {
    const fields = {
      id: id
    };

    return this.encodeMessage('ConfigUpdate', fields);
  }

  /**
   * Return the decoded message of a config update
   * @param response
   * @returns {*}
   */
  decodeConfigUpdateReply(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('ConfigUpdateReply', response);
  }

  /**
   * Create a device structure, that may be added to a config
   * @param key
   * @returns {fields}
   */
  createDevice(key) {

    const model = this.getModel('Device');

    const fields = {
      point: key
    };

    return model.create(fields);
  }

  /**
   * Create a message request to propose an update to a config
   * @param id
   * @param config
   * @returns {*|Buffer|Uint8Array}
   */
  createProposeSend(id, config) {
    const fields = {
      id: id,
      config: {
        threshold: config.threshold,
        device: config.device,
        data: config.data
      }
    };

    return this.encodeMessage('ProposeSend', fields);
  }

  /**
   * Create a message request to get the current config update propositions
   * @param id
   * @returns {*|Buffer|Uint8Array}
   */
  createProposeUpdate(id) {
    const fields = {
      id: id
    };

    return this.encodeMessage('ProposeUpdate', fields);
  }

  /**
   * Return the decoded message of a propose update
   * @param response
   * @returns {*}
   */
  decodeProposeUpdateReply(response) {
    response = new Uint8Array(response);

    return this.decodeMessage('ProposeUpdateReply', response);
  }

  /**
   * Create a message request to vote an update to a config
   * @param id
   * @param signer
   * @param challenge
   * @param response
   * @returns {*|Buffer|Uint8Array}
   */
  createProposeVote(id, signer, challenge, response) {
    const fields = {
      id: id,
      signer: signer,
        signature: {
          challenge: challenge,
          response: response
        }
    };

    return this.encodeMessage('ProposeVote', fields);
  }
}

/**
 * Singleton
 */
var index = new CothorityMessages();

export default index;
