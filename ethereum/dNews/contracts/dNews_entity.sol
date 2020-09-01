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
        address jourAddr;
        string ownMedia;
        address mediaAddr;
        string metadata;
        string contentHash;
        uint timestamp;
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
     
     address NCC;
     address public nccEntity = 0x8F10cf65d816F2974024B459A076e59694069079;

// to record the list of qualified certificate and recorded contents
     mediaCertificate[] Medias; // media under ncc 
     jourCertificate[] Jours; // journalist under a media

// Mappings
    // id verify
    mapping(address => bool) isMedia;
    mapping(address => bool) isJour;
    
    // content retrieve
    mapping(address => mapping(address => news_content)) public jourNews;  //journalist (which belongs to a media) content
    mapping(address => address[]) public JourUnderMedia;


// Modifiers
modifier MediaCert_give() { // provider 
    require(msg.sender == NCC);
    _;
}

// Event

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
     function newsConBookeeping (string memory jourName, address jourAddr, string memory MediaName, address mediaAddr, string memory metadata, string memory contHash, uint duedate) public {
        require(isJour[jourAddr] == true);
        news_content memory Created_New_Content;
            Created_New_Content.ownJour = jourName;
            Created_New_Content.jourAddr = jourAddr;
            Created_New_Content.ownMedia = MediaName;
            Created_New_Content.mediaAddr = mediaAddr;
            Created_New_Content.metadata = metadata;
            Created_New_Content.contentHash = contHash; // maybe for IPFS or validation comparison
            Created_New_Content.timestamp = duedate;
       //Contents.push(Created_New_Content);
       jourNews[mediaAddr][jourAddr] = Created_New_Content;
     }
     
// validation
    // for validator
    function retrieveNewsContents(string memory news_validation_hash, address jourAddr, address mediaAddr) public view returns (string memory) {
        if (keccak256(abi.encodePacked(news_validation_hash)) == keccak256(abi.encodePacked(jourNews[mediaAddr][jourAddr].contentHash)))
            return 'probably true';
        else return 'almost fake';
    }
     
}