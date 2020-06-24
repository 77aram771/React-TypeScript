var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standard"] = 1] = "Standard";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var membership = MemberShip.Standard;
var membershipRevers = MemberShip[2];
console.log(MemberShip);
console.log(membership);
console.log(membershipRevers);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "Vk";
    SocialMedia["FB"] = "FB";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
