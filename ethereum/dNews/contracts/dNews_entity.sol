// identity verification
pragma solidity >= 0.6.0 < 0.7.0;
pragma experimental ABIEncoderV2;
//import "./DRM_VersionControl";
//import "./DRM_Tracibility";
import "./Entity.sol";

contract Certificate {

 // Variables
     struct news_content {
        string ownJour; // the name of the journalist
        address jourAddr; // EA
        string ownMedia;
        address mediaAddr;
        string metadata;
        bytes32 IPFS_Hash; 
        uint timestamp;
        uint index;
     } 
     
    struct mediaCertificate {
        string medianame;
        address mediaAddr;
        string representative; 
        address repreAddr;
        string timeperiod; // period of validation
        string mediacerHash;
    }
    
    struct jourCertificate {
        string journame;
        address jourAddr;
        string medianame;
        address mediaAddr;
        string department;
        string jourtimeperiod; // period of validation
        string jourcerHash;
    }
    
    struct traceOwner {
        ownerState state;
        address EA; // owner 's addr
        uint OwnedContent; // index of the owner's newscontent
        bytes32 IPFS_Hash;
        bool result;
    }

     address NCC;
     address public nccEntity = 0x82671b9d3ABAa76277d5b38167b09646c2c32d94;

// to record the list of qualified certificate and recorded contents
     mediaCertificate[] Medias; // media under ncc 
     jourCertificate[] Jours; // journalist under a media
     
// Mappings
    // id verify
    mapping(address => bool) isMedia;
    mapping(address => bool) isJour;
    
    // content retrieve
    mapping(address => mapping(address => news_content[])) public jourNews;  //journalist (which belongs to a media) content
    mapping(address => address[]) public JourUnderMedia;
    
// Modifiers
modifier MediaCert_give() {
    require(msg.sender == NCC);
    _;
}

// Constructors
    constructor () public {
        NCC = msg.sender;
    }
    
// Functions
// entity login
//NCC entity
    function nccLogin(address nccAddr) public view   MediaCert_give{
        Entity entityNCC = Entity(nccAddr);
        string memory text = entityNCC.columnValue(nccEntity, "certificate", "isNCC");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
    }

// Media Entity
    function mediaLogin(address mediaAddr) public view{
        require(isMedia[mediaAddr] == true); 
        Entity entityMedia = Entity(mediaAddr);
        string memory text = entityMedia.columnValue(nccEntity, "MediaCertificate", "isMedia");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
    }
    
// Journalists Entity
    function jourLogin(address jourAddr, address mediaEntity) public view {
        require(isJour[jourAddr] == true);
        Entity entityJour = Entity(jourAddr);
        string memory text = entityJour.columnValue(mediaEntity, "JourCertificate", "isJour");
        require(keccak256(abi.encodePacked(text)) == keccak256(abi.encodePacked("Yes")));
    }
    
// eID certificate giver and news content bookeeping
// certificate by ncc
     function mediaCert (string memory mediaName, address mediaAddr, string memory repre, address repreAddr, string memory timeperiod, string memory mediacerHash) public MediaCert_give{ // add qualify media to the list
        nccLogin(NCC);
        isMedia[mediaAddr] = true;
        mediaCertificate memory qualified_media;
        qualified_media.medianame =  mediaName;
        qualified_media.mediaAddr =  mediaAddr;
        qualified_media.representative =  repre;
        qualified_media.repreAddr =  repreAddr;
        qualified_media.timeperiod =  timeperiod;
        qualified_media.mediacerHash =  mediacerHash;
        Medias.push(qualified_media);
     }
     
//certificate by media
     function jourCert (string memory jourName, address jourAddr, string memory mediaName, address mediaAddr, string memory department, string memory jourTimePeriod, string memory jourcerHash) public  { // add qualify journalists to the list
        require(isMedia[mediaAddr] == true);
        mediaLogin(mediaAddr);
        isJour[jourAddr] = true;
        jourCertificate memory qualified_jour;
        qualified_jour.journame = jourName;
        qualified_jour.jourAddr = jourAddr;
        qualified_jour.medianame = mediaName;
        qualified_jour.mediaAddr = mediaAddr;
        qualified_jour.department = department;
        qualified_jour.jourtimeperiod = jourTimePeriod; // period of validation
        qualified_jour.jourcerHash = jourcerHash;
        Jours.push(qualified_jour);
        JourUnderMedia[mediaAddr].push(jourAddr);
     }
     
// news content
     function newsConBookeeping (string memory jourName, address jourAddr, string memory MediaName, address mediaAddr, string memory metadata, bytes32 contHash, uint duedate) public {
        require(isJour[jourAddr] == true);
        //require();
        news_content memory Created_New_Content;
        Created_New_Content.ownJour = jourName;
        Created_New_Content.jourAddr = msg.sender;
        Created_New_Content.ownMedia = MediaName;
        Created_New_Content.mediaAddr = mediaAddr;
        Created_New_Content.metadata = metadata;
        Created_New_Content.IPFS_Hash = contHash;
        Created_New_Content.timestamp = duedate;
        Created_New_Content.index = Created_New_Content.index + 1;
    
        jourNews[mediaAddr][jourAddr][Created_New_Content.index] = Created_New_Content;
     }
     
    function getMediasCount() public view returns (uint256) {
        return Medias.length;
    }

// validation
    function retrieveNewsContents(bytes32 news_validation_hash, address jourAddr, address mediaAddr, uint index) public view returns (string memory) {
        if (keccak256(abi.encodePacked(news_validation_hash)) == keccak256(abi.encodePacked(jourNews[mediaAddr][jourAddr][index].IPFS_Hash)))
            return 'true';
        else return 'almost fake';
    }

//enum     
     enum  ownerState  {SendRequest, GrantedPermission, DeniedPermission,
     SentAttestationRequest, GrantedAttestation, DeniedAttestation}  

// Event
    event ArtistRequestingPermission(address artist);
    event PermissionGranted(string info, address artist);
    event PermissionDenied(string info, address artist);
    event AttestationGranted(string info, address CHaddress);
    event AttestationDenied(string info, address CHaddress);

    mapping(address=>traceOwner[])public Requests; // owner addr. -> traceowner
    mapping (address =>mapping(address=>news_content[])) public Granted_Permission_ChildContent;//for history tracking, mapping all children videos with their SC address
    mapping (address =>mapping(address=>news_content[])) public Denied_Permission_ChildContent;
    mapping (address =>mapping(address=>news_content[])) public Check_Waiting_ChildContent;
    mapping(address=>mapping(uint => uint)) public indexlength; // owner addr. -> news content index -> request length
    mapping(address=>mapping(address=>uint)) public indexlengthcheck;
    mapping(address=>mapping(uint => uint)) public indexlengthattest;
    
    function return_request_length(address addr)public view returns(uint){
        return Requests[addr].length;
    }
    // editor -> ask owner for authorization -> owner's address
    function requestPermission(address owner, uint index)public {
        require(owner != msg.sender);
        emit ArtistRequestingPermission(msg.sender);
        traceOwner memory temp;
        temp.EA = msg.sender; // EA is the editor 's addr.
        temp.state = ownerState.SendRequest;
        temp.OwnedContent = index;
        temp.result = false;
        Requests[owner].push(temp);
        indexlength[owner][index] = Requests[owner].length -1;
    }
    
    // owner
    function GrantedPermission(bool result, address editor, uint index) public {
        uint num = indexlength[msg.sender][index];
        require(Requests[msg.sender][num].EA != msg.sender);
        require(Requests[msg.sender][num].state == ownerState.SendRequest);
        if(result) {
            Requests[msg.sender][num].state = ownerState.GrantedPermission;
            Requests[msg.sender][num].result = true;
            emit PermissionGranted("Permission has already been Granted to address ", editor);
        } 
        else {
            Requests[msg.sender][num].state = ownerState.DeniedPermission;
            Requests[msg.sender][num].result = false;
            emit PermissionDenied("Permission Denied to address", editor);
        }
    }
    
    //child content information given by the editor
     function ChildContentInfo(bytes32 IPFShash, string memory metadata,address owner, uint referIndex)public {
         uint num = indexlength[owner][referIndex];
         require(Requests[owner][num].EA == msg.sender);
         require(Requests[owner][num].state==ownerState.GrantedPermission);
        news_content memory temp;
        temp.jourAddr = msg.sender;
        temp.IPFS_Hash = IPFShash;
        temp.timestamp = block.timestamp;
        temp.metadata = metadata;
        Check_Waiting_ChildContent[msg.sender][owner].push(temp);
        indexlengthcheck[msg.sender][owner] = Check_Waiting_ChildContent[msg.sender][owner].length -1;
        uint numCheck = indexlengthcheck[msg.sender][owner];
        BeforeAttestation(owner, msg.sender, numCheck);
     }
     
    // the info fills by the editor and attests by the owner
    function BeforeAttestation(address owner, address editor, uint checkIndex)public view returns(address, bytes32, uint, string memory){
        return  (
            Check_Waiting_ChildContent[editor][owner][checkIndex].jourAddr,
            Check_Waiting_ChildContent[editor][owner][checkIndex].IPFS_Hash,
            Check_Waiting_ChildContent[editor][owner][checkIndex].timestamp,
            Check_Waiting_ChildContent[editor][owner][checkIndex].metadata
            );
    }
    
    // owner
    function Attestation(bool result, bytes32 hash, string memory meta, address editor, uint index) public{
        uint num = indexlength[msg.sender][index];
        require(Requests[msg.sender][num].EA == editor);
        require(Requests[msg.sender][num].state == ownerState.GrantedPermission);
        require(Requests[msg.sender][num].result == true);
        news_content memory temp;
        temp.jourAddr = msg.sender;
        temp.IPFS_Hash = hash;
        temp.timestamp = block.timestamp;
        temp.metadata = meta;
        if(result){
            Granted_Permission_ChildContent[msg.sender][editor].push(temp);
            indexlengthattest[msg.sender][index] = Granted_Permission_ChildContent[msg.sender][editor].length -1;
            Requests[msg.sender][num].state = ownerState.GrantedAttestation;
            AttestationGranted("Successfully Attested: ", editor);
        }
        else {
            Denied_Permission_ChildContent[msg.sender][editor].push(temp);
            indexlengthattest[msg.sender][index] = Denied_Permission_ChildContent[msg.sender][editor].length -1;
            Requests[msg.sender][num].state = ownerState.DeniedAttestation;
            AttestationDenied("Failure Attested: ", editor);
        }
    }
    

    //0xa5e9e176c996433efd87cacad975908eb0994dfa2f69673fc378bf5b32da3d41
    
}
